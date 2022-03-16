import { NextPage } from "next";
import QuoteForm from "../components/QuoteForm/QuoteForm";

const QuoteFormPage: NextPage = () => {
    return (
        <div className="quote-form-container">
            <QuoteForm className="rounded-overflow-hidden" />
        </div>
    );
}

export default QuoteFormPage;