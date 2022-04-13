import { NextPage } from "next";
import QuoteForm from "../components/QuoteForm/QuoteForm";

const ContactUsPage: NextPage = () => {
    return (
        <div className="quote-form-container">
            <QuoteForm className="rounded-overflow-hidden" />
        </div>
    );
}

export default ContactUsPage;