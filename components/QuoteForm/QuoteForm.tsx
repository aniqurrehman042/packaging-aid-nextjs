import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const QuoteForm = ({className}: {className?: string}) => {
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [boxType, setBoxType] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        const quoteUrl = 'https://www.packagingaid.com/quote';
        console.log('form submit')
        e.preventDefault();
        if (isValid()) {
            setLoading(true);
            const quoteResponse = await fetch(
                quoteUrl,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        email,
                        phone,
                        boxType,
                        message
                    }),
                });
            const responseObject = await quoteResponse!.json();
            const responseMessage = responseObject!.message;
            setLoading(false);
            if (responseMessage === 'Success') {
                router.push('/form-thank-you');
                console.log('Email Sent Successfully');
            } else {
                console.log('Email Could not be sent');
            }
        }
    };

    const isValid = (): boolean => {
        return firstName.trim() !== '' &&
            lastName.trim() !== '' &&
            email.trim() !== '' &&
            phone.trim() !== '' &&
            boxType.trim() !== '' &&
            message.trim() !== '';
    };

    return (
        <form className={`quote-form ${className ?? ''}`} onSubmit={(e) => onSubmit(e)}>
            <h2 className="form-heading">GET INSTANT QUOTE</h2>
            <div className="row">
                <div className="col-6">
                    <input className="form-input" value={firstName} placeholder="First name" name="firstName"
                        id="firstName" type="text" onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="col-6">
                    <input className="form-input" value={lastName} placeholder="Last name" name="lastName" id="lastName"
                        type="text" onChange={(e) => setLastName(e.target.value)} required />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <input className="form-input" value={email} placeholder="Your email" name="email" id="email"
                        type="email" onChange={(e) => setEmail(e.target.value)} required />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <input className="form-input" value={phone} placeholder="Your phone" name="phone" id="phone"
                        type="text" onChange={(e) => setPhone(e.target.value)} required />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <select className="form-input" value={boxType} placeholder="Select Box Type" name="boxType"
                        id="boxType" onChange={(e) => setBoxType(e.target.value)}>
                        <option value="CBD Boxes">CBD Boxes</option>
                        <option value="Cosmetic Boxes">Cosmetic Boxes</option>
                        <option value="Display Boxes">Display Boxes</option>
                        <option value="Eco Friendly Boxes">Eco Friendly Boxes</option>
                        <option value="Metalized Boxes">Metalized Boxes</option>
                        <option value="Retail Boxes">Retail Boxes</option>
                        <option value="Food &amp; Beverage Boxes">Food &amp; Beverage Boxes</option>
                        <option value="Gift Boxes">Gift Boxes</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <textarea className="form-input" value={message} rows={5}
                        placeholder="Let us know what you need! Box dimensions, number of boxes you need, design-we can help."
                        name="message" id="message" onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
            </div >
            <div className="row">
                <div className="col-12">
                    <button className="form-input btn-submit">SUBMIT</button>
                </div>
            </div>
            {loading &&
                <>
                    <div id="overlay"></div >
                    <div id="loader"></div >
                </>}
        </form >
    );
}

export default QuoteForm;