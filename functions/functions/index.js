const express = require('express');
const nodemailer = require('nodemailer'); 
const functions = require('firebase-functions');

// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express();

  // Mail
  server.post('/quote', (req, res) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'packagingaid123@gmail.com',
        pass: 'omfddmfyefbugzun'
      }
    });

    const request = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    var mailOptions = {
      from: 'packagingaid123@gmail.com',
      to: 'packagingaid123@gmail.com',
      subject: 'Packaging Aid Quote Form',
      text: `First Name: ${request.firstName}\nLast Name: ${request.lastName}\nEmail: ${request.email}\nPhone: ${request.phone}\nBox Type: ${request.boxType}\nMessage: ${request.message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.send({ message: 'Error' });
      } else {
        res.send({ message: 'Success' });
      }
    });
  });

  return server;
}

function run() {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
module.exports.ssrapp = functions.https.onRequest(app());
