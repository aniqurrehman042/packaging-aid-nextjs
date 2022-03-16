import { NextPage } from "next";

const FormThankYouPage: NextPage = () => {
    return (
        <>
            <p className="thank-you-text">Thank you for filling out the Quote Form!</p>
            <p className="will-get-back-text">We will get back to you within a few hours.</p>
        </>
    );
}

export default FormThankYouPage;