import { NextPage } from "next";

const PrivacyPolicyPage: NextPage = () => {
    return (
        <article className="padding-2">
            <h1 className="page-heading">Privacy Policy</h1>
            <p className="page-content">
                PackagingAid.com is an acceptance of agreement to the privacy policy described on our website. PackagingAid
                knows well and is managing the privacy of users of the website strictly. It is guaranteed that any data which is
                received for the processing of the order or any other query will not be revealed or disclosed to any third-party
                user. It will carefully be used only for client service, fulfilling shipping requests, and contacting the
                customers for feedback.
                Please note we will reveal your information when required by law or to protect our interests. Your information
                can also be revealed when we have a good-faith belief that it is important to abide by a current judicial
                proceeding.
            </p>
            <h2 className="page-sub-heading">Information Use</h2>
            <p className="page-content">
                We ask for information from the user on our order page. A user must provide contact information (such as name,
                email, and shipping address) and financial information (such as credit card number and expiration date). This
                information is used for credit card authorization and to fill customer’s requests. If we have difficulty
                processing an order, the information is used to reach the user.
            </p>
            <p className="page-content">
                We do not provide, distribute or sell our website users’ and customers’ information to any other party. The
                website users’ and customers’ information can be used for marketing and improvement of the PackagingAid.com
                website, products, services, and promotional offers. Please note we also use this information, to contact you
                about important updates on our website.
            </p>
            <h2 className="page-sub-heading">Information Protection</h2>
            <p className="page-content">
                Our Websites take every precaution to protect our users’ data. When users submit sensitive data via the Web
                site, their data is protected both online and offline.
                When our registration/order form asks users to enter sensitive data (such as credit card number and/or social
                security number) that data is encrypted and is protected with the best encryption software in the industry—SSL.
            </p>
            <p className="page-content">
                While on a protected page, such as our order form, the lock icon on the bottom of Web browsers becomes locked,
                as opposed to un-locked, or open, when users are just ‘surfing.’
                While we use SSL encryption to protect sensitive data online, we also do everything in our power to protect
                user-information offline. All of our users’ data, not just the sensitive information mentioned above, is
                restricted in our offices.
            </p>
            <p className="page-content">
                Only employees who need the information to perform a specific job are granted access to personally identifiable
                data. Employees must enter their passwords to gain access to user information. Finally, the servers that store
                personally identifiable data are in a high-security environment at our co-location facility.
            </p>
            <h2 className="page-sub-heading">Cookies</h2>
            <p className="page-content">
                Do we use cookies? Yes!
            </p>
            <p className="page-content">
                A cookie is a piece of data stored on the user’s computer tied to information about the user. We use persistent
                cookies. A persistent cookie is a small text file stored on the user’s hard drive for an extended period of
                time. Persistent cookies can be removed by following Internet browser help file directions.
            </p>
            <p className="page-content">
                Cookies are used by the PackagingAid order section in order to uniquely identify users, associate user files
                with orders, and enable the shopping basket.
            </p>
            <h2 className="page-sub-heading">Customer Service</h2>
            <p className="page-content">
                We communicate with users on a regular basis to provide requested services. Our customer service uses both email
                and phone information to communicate with customers in regards to issues relating to the in-process order.
            </p>
            <p className="page-content">
                If there are any questions regarding this privacy policy, you may contact us using the information below.
            </p>
            <p className="page-content">
                <a href="mailto:sales@PackagingAid.com">sales@PackagingAid.com</a>
            </p>
            <p className="page-content">
                <a href="tel:19165818050">1-916-581-8050</a>
            </p>
        </article>
    );
}