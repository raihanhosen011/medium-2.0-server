const nodemailer = require("nodemailer");
import { OAuth2Client } from "google-auth-library";


const OAUTH_PLAYGROUND = `${process.env.MAIL_REDIRECT_URL}`;

const CLIENT_ID = `${process.env.MAIL_CLIENT_ID}`;
const CLIENT_SECRET = `${process.env.MAIL_CLIENT_SECRET}`;
const REFRESH_TOKEN = `${process.env.MAIL_REFRESH_TOKEN}`;
const SENDER_MAIL = `${process.env.MAIL_CLIENT}`;

// send mail
export default async (to: string, url: string, txt: string, type?: string, code?: string) => {
  // call google oAuth class  
  const oAuth2Client = new OAuth2Client(
    CLIENT_ID,
    CLIENT_SECRET,
    OAUTH_PLAYGROUND
  );

  // set refresh token that import from "oAuthPlayground"
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    // get access token from google oAuth2Client
    const access_token = await oAuth2Client.getAccessToken();

    // create nodemailer transport
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: SENDER_MAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        access_token,
      },
    });

    // mail template
    const byLink = `
      <span>${url}</span>
    `

    const byNumber = `
      <span>${code}</span>
    `

    // set mail option to send user
    const mailOptions = {
      from: SENDER_MAIL,
      to: to,
      subject: "Medium mail varification",
      html: type == 'send_code' ? byNumber : byLink,
    };

    // finaly get and return the result
    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (err) {
    console.log(err);
  }
};




// const nodemailer = require("nodemailer");
// const { google } = require('googleapis')
// import { OAuth2Client } from "google-auth-library";

// const OAUTH_PLAYGROUND = `${process.env.MAIL_REDIRECT_URL}`;

// const CLIENT_ID = `${process.env.MAIL_CLIENT_ID}`;
// const CLIENT_SECRET = `${process.env.MAIL_CLIENT_SECRET}`;
// const REFRESH_TOKEN = `${process.env.MAIL_REFRESH_TOKEN}`;
// const SENDER_MAIL = `${process.env.MAIL_CLIENT}`;

// // send mail
// export default async (to: string, url: string, txt: string, type?: string, code?: string) => {
//   // call google oAuth class  
//   const OAuth2 = google.auth.OAuth2
//   const OAuth2_client = new OAuth2(CLIENT_ID, CLIENT_SECRET);

//   // set refresh token that import from "oAuthPlayground"
//   OAuth2_client.setCredentials({ refresh_token: REFRESH_TOKEN })

//   try {
//     // get access token from google oAuth2Client
//     const accessToken = OAuth2_client.getAccessToken();

//     // create nodemailer transport
//     const transport = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: SENDER_MAIL,
//         clientId: CLIENT_ID,
//         clientSecret: CLIENT_SECRET,
//         refreshToken: REFRESH_TOKEN,
//         accessToken: accessToken,
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//     // mail template
//     const byLink = `
//       <span>${url}</span>
//     `

//     const byNumber = `
//       <span>${code}</span>
//     `

//     // set mail option to send user
//     const mailOptions = {
//       from: SENDER_MAIL,
//       to: to,
//       subject: "Medium mail varification",
//       html: type == 'send_code' ? byNumber : byLink,
//     };

//     // finaly get and return the result
//     const result = await transport.sendMail(mailOptions);
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };
