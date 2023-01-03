const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SEND_GRID_KEY);

exports.sendEmail = async (from, to, subject, body) => {
  sgMail
    .send({ from, to, subject, html: body })
    .then(() => {
      console.log(`Email sent from ${from} to ${to}`);
    })
    .catch((error) => {
      console.error(error);
    });
};
