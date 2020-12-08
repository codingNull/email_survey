const Survey = require("../models/surveyModel");
const Mailer = require("../services/Mailer");
const { Path } = require("path-parser");
const _ = require("lodash");
const { URL } = require("url");
const template = require("../services/mailerTemplate");
const checkLogin = require("../middleware/checkLogin");
const checkCredits = require("../middleware/checkCredits");

module.exports = (app) => {
  app.get("/api/surveys", checkLogin, async (req, res) => {
    const user = req.user;
    const surveys = await Survey.find({
      _user: user.id,
    }).select({ recipients: false });
    res.send(surveys);
  });
  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("Thanks for your feedback!");
  });

  app.post("/api/surveys/webhook", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");
    console.log(req.body);
    _.chain(req.body)
      .map((evt) => {
        if (evt.event === "click") {
          const pathName = new URL(evt.url).pathname;
          const match = p.test(pathName);
          if (match) {
            return { email: evt.email, ...match };
          }
        }
      })
      .compact()
      .each(({ email, surveyId, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: {
                email: email,
                responded: false,
              },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            dateResponded: Date.now(),
          }
        ).exec();
      })
      .value();
    res.send({});
  });

  app.post("/api/surveys", checkLogin, checkCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });
    //send surveys via Mailer
    const mailer = new Mailer(survey, template(survey));
    await mailer.send();
    await survey.save();

    req.user.credits -= 1;
    const user = await req.user.save();

    res.send(user);
  });
};
