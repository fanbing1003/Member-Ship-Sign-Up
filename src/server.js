const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const JsBarcode = require("jsbarcode");
const { createCanvas } = require("canvas");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Create App Password
  },
});

const html = app.post("/sendEmail", (req, res) => {
  const { name, mobile, email, postcode } = req.body;

  const { createCanvas } = require("canvas");
  console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS)
  const canvas = createCanvas();
  JsBarcode(canvas, mobile, {
    format: "CODE128",
    lineColor: "#000",
    width: 2,
    height: 100,
  });
  console.log(canvas.toDataURL());
  const barcodeImage = canvas.toDataURL();
  const html = `<!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
      <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; padding: 0; }
          a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; }
          #MessageViewBody a { color: inherit; text-decoration: none; }
          p { line-height: inherit; }
          .desktop_hide, .desktop_hide table { display: none; }
          @media (max-width:520px) { .desktop_hide table.icons-inner { display: inline-block !important; } }
        </style>
      </head>
      <body style="background-color: #FFFFFF; margin: 0; padding: 0;">
        <table class="nl-container" width="100%" role="presentation" style="background-color: #FFFFFF;">
          <tbody>
            <tr>
              <td>
                <table class="row row-1" align="center" width="100%" role="presentation">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" width="500" role="presentation" style="color: #000000; width: 500px; margin: 0 auto;">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%">
                                <table class="image_block" width="100%" role="presentation">
                                  <tr>
                                    <td>
                                      <div align="center">
                                        <img src="https://76ac7bbbc1.imgdist.com/pub/bfra/teosctg2/bny/hco/zpf/Middle.jpg" style="width: 100%; height: auto; border: 0;">
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-2" align="center" width="100%" role="presentation">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" width="500" role="presentation" style="width: 500px; margin: 0 auto;">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%">
                                <table class="paragraph_block" width="100%" role="presentation">
                                  <tr>
                                    <td>
                                      <div style="color:#444a5b; font-family:Arial, Helvetica, sans-serif; font-size:16px; text-align:left;">
                                        <p>Dear ${name},</p>
                                        <p>Thank you for becoming a valued member of our community! We're thrilled to have you with us and look forward to providing you with great experiences and exclusive benefits.</p>
                                        <p>We've attached your membership information below, feel free to screenshot it and show us next time you visit.</p>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-3" align="center" width="100%" role="presentation">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" width="500" role="presentation" style="width: 500px; margin: 0 auto;">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="25%">
                                <table class="image_block" width="100%" role="presentation">
                                  <tr>
                                    <td>
                                      <div align="center">
                                        <img src="https://76ac7bbbc1.imgdist.com/pub/bfra/teosctg2/29h/u4t/f0s/Davely%27s%20Logo.jpg" style="width: 100%; height: auto; border: 0;">
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td class="column column-2" width="75%">
                                <table class="list_block" width="100%" role="presentation">
                                  <tr>
                                    <td>
                                      <ul style="list-style-type: none;">
                                        <li>Name: ${name}</li>
                                        <li>Mobile: ${mobile}</li>
                                        <li>Email: ${email}</li>
                                        <li>Postcode: ${postcode}</li>
                                      </ul>
                                    </td>
                                  </tr>
                                </table>
                                <table class="paragraph_block" width="100%" role="presentation">
                                  <tr>
                                    <td>
                                      <img src="data:image/png;base64,${barcodeImage}" alt="Barcode" style="width: 100%; height: auto; border: 0;">
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-4" align="center" width="100%" role="presentation">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" width="500" role="presentation" style="width: 500px; margin: 0 auto;">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%">
                                <table class="paragraph_block" width="100%" role="presentation">
                                  <tr>
                                    <td>
                                      <p>
                                        Please leave us a review if you like and enjoy your time at 
                                        <a href="https://maps.app.goo.gl/d2WmYK8rycgc5BNM8" target="_blank" style="color: #007bff; text-decoration: none;">Davely's Asian Supermarket</a>.
                                      </p>
                                      <p>We hope to see you again soon, and please don't hesitate to reach out if you have any questions or need assistance.</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-5" align="center" width="100%" role="presentation">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" width="500" role="presentation" style="width: 500px; margin: 0 auto;">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%">
                                <table class="paragraph_block" width="100%" role="presentation">
                                  <tr>
                                    <td>
                                      <p>Best regards,</p>
                                      <p>Davely's Asian Supermarket</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  `;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Welcome to Davely's Asian Supermarket",
    html: html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      console.log(error);
      res.status(500).send({ success: false, error: error.message });
    } else {
      console.log("Email sent:", info.response);
      res.send({ success: true });
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
