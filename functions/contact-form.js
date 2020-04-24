const sgMail = require("@sendgrid/mail")
const { SEND_GRID_API_KEY } = process.env

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body)
  const { name, email, subject, message } = payload

  sgMail.setApiKey(SEND_GRID_API_KEY)

  const msg = {
    to: "nickypellerin@gmail.com",
    from: email,
    subject: subject,
    html: payload,
  }

  try {
    await sgMail.send(msg)

    return {
      statusCode: 200,
      body: "Email sent",
    }
  } catch (err) {
    return {
      statusCode: err.code,
      body: err.message,
    }
  }
}
