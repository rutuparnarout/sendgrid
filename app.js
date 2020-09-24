const express = require("express");
const sgMail = require("@sendgrid/mail");
var cron = require("node-cron");

const app = express();

app.get("/sendEmail", (req, res) => {
  sgMail.setApiKey("SG.**********************************************");
  const msg = {
    to: "rutuparna.rout@kare4u.in",
    from: "digital@sitemaster.app",
    subject: "Sending with Twilio SendGrid is Fun.",
    text: "It is easy to integrate.",
    html: "<strong>Hello... Message from Sendgrid.</strong>",
  };
  sgMail.send(msg);
  res.status(200).send("Email sent successfully.");
});

cron.schedule("5 * * * * *", () => {
  console.log("running a task every minute");
});

app.listen(process.env.PORT || 5555, () => {
  console.log("Server is up and running on port 5555!!!");
});
