var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'forhadhridoy.43@gmail.com',
    pass: 'afrinishpa45#!'
  }
});

var mailOptions = {
  from: 'forhadhridoy.43@gmail.com',
  to: 'dasajit697@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});