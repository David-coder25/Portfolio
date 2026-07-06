import emailjs from '@emailjs/browser';

interface mailInput {
    name: String;
    email: String;
    message: String
}

export const sendEmail = async ({ name, email, message = "" }: mailInput) => {

    await emailjs.send(
        'service_safrdyg',
        'template_gvtvdgd',
        {
            name,
            email,
            message
        },
        'grJmY09kI0CQX0zvH'
    );

    console.log("Mail Sent Sucessfully!")
};