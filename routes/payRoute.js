const { Stripe_Secret_Key } = require("../config/keys");
const stripe = require("stripe")(Stripe_Secret_Key);
const checkLogin = require("../middleware/checkLogin");

module.exports = (app) => {
  app.post("/api/add-credits", checkLogin, async (req, res) => {
    try {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: "usd",
        source: req.body.id,
        description: "5 dollars for 5 surveys",
      });
      req.user.credits += 5; //credits
      const user = await req.user.save();
      res.send(user);
    } catch (error) {
      res.status(401).send({ error: "payment failed" });
    }
  });
};
