const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'cjiano91@gmail.com',
    subject: 'Welcome to the App',
    text: `Welcome to the app ${name}.Let me know what you think of the app`
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'cjiano91@gmail.com',
    subject: 'Sorry to see you go',
    text: `Goodbye ${name}, Hope to see you back soon`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail
};
