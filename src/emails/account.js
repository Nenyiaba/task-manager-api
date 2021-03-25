const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'leokeex@gmail.com',
        subject: 'Thanks for singing up!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'leokeex@gmail.com',
        subject: 'Account Cancellation!',
        text: `Your account has been cancelled ${name}, was there a reason why you cancelled your account? `
    })
}

module.exports = {
    sendWelcomeEmail,
   sendCancelEmail
}

