import { NextPage } from "next";
import QuoteForm from "../components/QuoteForm/QuoteForm";
import PageSection from "../components/QuoteFormSection/PageSection";

const QuoteFormPage: NextPage = () => {
  return (
    <div className="quote-form-container">
      <PageSection>
        <QuoteForm className="rounded-overflow-hidden" />
      </PageSection>
    </div>
  );
};

export default QuoteFormPage;
