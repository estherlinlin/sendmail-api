const Mail = require("../models/mail");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


exports.postSendEmail = async (req, res,next) => {

  // try {
    const mail = new Mail(
      req.body.email,
      req.body.name,
      req.body.content,
    );
  
    console.log(mail);
    const msg = {
      to: "pinchunchun112@gmail.com",
      from: "pinchunchun112@gmail.com",
      // from: "bajaja1102@gmail.com",
      subject: `Hi Pin Chun, ${mail.name} sent you a mail!`,
      text: "Content went wrong",
      html:`<p>${mail.content}<p><br><p>Send from ${mail.email}</p>`,
    };
  
    sgMail
      .send(msg)
      .then(() => {
        console.log("Message sent");
        res.status(201).json({ message: 'Message sent'});
      })
      .catch((error) => {
        console.log(error.response.body);
        if (!error.statusCode) {
          error.statusCode = 500; 
        }
        next(error);
      }); 
};
