const keys = require("../config/keys");

module.exports = (survey) => {
  return `<html>
      <body>
        <div style="text-align:center;">
          <h3>I'd like your feedback!</h3>
          <p>please answer the follow questions:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirect_domain}/api/surveys/${survey.id}/yes">yes</a>
          </div>
          <div>
            <a href="${keys.redirect_domain}/api/surveys/${survey.id}/no">no</a>
          </div>
        </div>
      </body>
  </html>`;
};
