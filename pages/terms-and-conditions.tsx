import { NextPage } from "next";

const TermsAndConditionsPage: NextPage = () => {
    return (
        <article className="padding-2">
            <h1 className="page-heading">Terms Of Service</h1>
            <p className="page-content">
                At PackagingAid, we truly care about and pride ourselves on the excellence of our services. We strive for 100%
                customer satisfaction. Please read these Terms and Conditions attentively. These Terms and Conditions dictate
                your access and use of this Site. By reaching or using this Site you agree to be treated by these Terms and
                Conditions. To any further guidelines, restrictions, or rules that may be posted in association with specific
                sections or services of this Site. All such new posted guidelines, restrictions, or rules are hereby included by
                reference into these Terms and Conditions.
            </p>
            <h2 className="page-sub-heading">PRICE AND PAYMENT</h2>
            <p className="page-content">
                The price shall be the Suggested Retail Price less any agreed discount unless otherwise agreed in writing
                between the parties. The price is exclusive of VAT or any other relevant costs.
                Terms of payment will be given and explained by the Seller through PayPal check. The proposal of credit or
                partial payment via PayPal or otherwise will be the sole responsibility of the Seller.
            </p>
            <h2 className="page-sub-heading">COLOR ACCURACY AND HARDCOPY PROOFS</h2>
            <p className="page-content">
                PackagingAid.com™ will print color from suggested print-ready files as closely as possible. However,
                PackagingAid cannot assure color match and color density because of limitations in the printing processes,
                different properties of different printing surfaces, as well as neighboring image ink requirements.
            </p>
            <p className="page-content">
                The accuracy of color copies is guaranteed to be within 90% of the final proof you approved. Please note that
                PackagingAid can only ensure color reproduction for your print-ready files if you order a hardcopy proof for an
                additional charge.
                Please note that PackagingAid is not accountable for color variations between submitted print-ready images and
                the actual artwork or product they represent.
            </p>
            <h2 className="page-sub-heading">ORDER CANCELLATION</h2>
            <p className="page-content">
                PackagingAid.com™ will cancel your order preceding printing/shipping. However, if you’re ordered item has been
                shipped then it cannot be canceled. Orders may be cancelable during the different production stages but
                cancellation charges will apply. Our Customer Service Team will inform you of any cancellation charges.
            </p>
            <ol className="list-round-numbers page-content">
                <li>Orders are placed online.</li>
                <li>Orders are reworked in our design department.</li>
                <li>Orders are sent to the press.</li>
                <li>Orders are collected by the shipping firm and shipped.</li>
            </ol>
            <p className="page-content">
                All orders are cancelable before stage 2.
            </p>
        </article>
    );
}

export default TermsAndConditionsPage;