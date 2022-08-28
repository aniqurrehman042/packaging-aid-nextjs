import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import styles from "../../styles/QuoteFormPage.module.css";

const QuoteForm = ({ className }: { className?: string }) => {
  const [loading, setLoading] = useState(false);
  const [productName, setProductName] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [units, setUnits] = useState("");
  const [stock, setStock] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [file, setFile] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [captcha1, setCaptcha1] = useState("");
  const [captcha2, setCaptcha2] = useState("");
  const [answer, setAnswer] = useState("");

  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    captchaGen();
    return captchaGen();
  }, []);

  // captcha
  const captchaGen = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptcha1(num1.toLocaleString());
    setCaptcha2(num2.toLocaleString());
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    const quoteUrl = "https://www.packagingaid.com/quote";

    e.preventDefault();
    const code = parseInt(captcha1) + parseInt(captcha2);

    const isValid = (): boolean => {
      return (
        productName.trim() === "" &&
        length.trim() === "" &&
        width.trim() === "" &&
        depth.trim() === "" &&
        units.trim() === "" &&
        stock.trim() === "" &&
        color.trim() === "" &&
        quantity.trim() === "" &&
        file.trim() === "" &&
        fullName.trim() === "" &&
        email.trim() === "" &&
        phone.trim() === "" &&
        message.trim() === "" &&
        answer.trim() === ""
      );
    };

    if (!isValid()) {
      if (code === parseInt(answer)) {
        captchaGen();
        console.log("form submited");
        setError("");
        setLoading(true);
        const quoteResponse = await fetch(quoteUrl, {
          method: "POST",
          body: JSON.stringify({
            productName,
            length,
            width,
            depth,
            units,
            stock,
            color,
            quantity,
            fullName,
            email,
            phone,
            message,
            answer,
          }),
        });
        const responseObject = await quoteResponse!.json();
        const responseMessage = responseObject!.message;
        setLoading(false);
        if (responseMessage === "Success") {
          router.push("/form-thank-you");
          console.log("Email Sent Successfully");
        } else {
          console.log("Email Could not be sent");
        }

        // clear form
        setProductName("");
        setLength("");
        setWidth("");
        setDepth("");
        setUnits("");
        setStock("");
        setColor("");
        setQuantity("");
        setFile("");
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAnswer("");
      } else {
        captchaGen();
        setError("not matched code");
        return;
      }
    } else {
      captchaGen();
      setError("Blank Form");
    }
  };

  return (
    <section className={styles.quote_sec}>
      <div className={styles.quote_content}>
        {/* <!-- heading --> */}
        <div className={styles.heading}>
          <h1>get custom quote</h1>
        </div>
        <form onSubmit={onSubmit}>
          {/* <!-- quote product information--> */}
          <div className={styles.quote_form}>
            <label className={styles.quote_label}>PRODUCT INFORMATION</label>
            <input
              type="text"
              name="productName"
              className="quote_input"
              placeholder="product name?"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          {/* <!-- quote size information --> */}
          <div className={styles.quote_form}>
            <label className={styles.quote_label}>SELECT SIZE</label>
            <div className={styles.fildes}>
              <input
                type="text"
                name="length"
                className="quote_input"
                placeholder="Length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <input
                type="text"
                name="width"
                className="quote_input"
                placeholder="Width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
              <input
                type="text"
                name="depth"
                className="quote_input"
                placeholder="depth"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
              />
              <select
                name="units"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
              >
                <option value="0">Units</option>
                <option value="cm">cm</option>
                <option value="inches">inches</option>
                <option value="mm">mm</option>
              </select>
            </div>
          </div>

          {/* <!-- quote materials --> */}
          <div className={styles.quote_form}>
            <label className={styles.quote_label}>CHOOSE MATERIALS</label>
            <div className={styles.fildes}>
              {/* <!-- stock --> */}
              <select
                name="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              >
                <option value="">Stock</option>
                <option value="12pt Cardboard Stock">
                  12pt Cardboard Stock
                </option>
                <option value="14pt Cardboard Stock">
                  14pt Cardboard Stock
                </option>
                <option value="16pt Cardboard Stock">
                  16pt Cardboard Stock
                </option>
                <option value="18pt Cardboard Stock">
                  18pt Cardboard Stock
                </option>
                <option value="20pt Cardboard Stock">
                  20pt Cardboard Stock
                </option>
                <option value="22pt Cardboard Stock">
                  22pt Cardboard Stock
                </option>
                <option value="24pt Cardboard Stock">
                  24pt Cardboard Stock
                </option>
                <option value="Corrugated Stock">Corrugated Stock</option>
                <option value="Kraft Stock">Kraft Stock</option>
                <option value="Other">Other</option>
              </select>
              {/* <!-- color --> */}
              <select
                name="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option value="">Color</option>
                <option value="1 Color">1 Color</option>
                <option value="2 Color">2 Color</option>
                <option value="3 Color">3 Color</option>
                <option value="4 Color">4 Color</option>
                <option value="4/1 Color">4/1 Color</option>
                <option value="4/2 Color">4/2 Color</option>
                <option value="4/3 Color">4/3 Color</option>
                <option value="4/4 Color">4/4 Color</option>
              </select>
              <input
                type="text"
                name="quantity"
                className="quote_input"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>

          {/* <!-- upload artwork --> */}
          <div className={styles.quote_form}>
            <label className={styles.quote_label}>UPLOAD ARTWORK</label>
            <input
              type="file"
              name="productName"
              className="quote_input"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            />
          </div>

          {/* <!-- PERSONAL INFORMATION --> */}
          <div className={styles.quote_form}>
            <label className={styles.quote_label}>CHOOSE MATERIALS</label>
            <div className={styles.fildes}>
              {/* <!-- fullname --> */}
              <input
                type="text"
                name="fullName"
                className="quote_input"
                placeholder="Full Name*"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {/* <!-- email --> */}
              <input
                type="email"
                name="email"
                className="quote_input"
                placeholder="Email ID*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <!-- contact number --> */}
              <input
                type="text"
                name="phone"
                className="quote_input"
                placeholder="Contact Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* <!-- additional information --> */}
          <div className={styles.quote_form}>
            <label className={styles.quote_label}>ADDITIONAL INFORMATION</label>
            <textarea
              name="message"
              placeholder="Message...?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* <!-- capcha & button --> */}
          <div className={styles.quote_form}>
            <div className={`${styles.fildes} ${styles.md_wrap}`}>
              {/* <!-- captcha --> */}
              <div className={styles.captcha}>
                <p>
                  Catpcha <sup>*</sup>
                  <span className="code">{captcha1}</span>
                  {"+ "}
                  {/* <input type="hidden" value={numberCaptcha1} ref={numCap1} />
                  <input type="hidden" value={numberCaptcha2} ref={numCap2} /> */}
                  <span className="code">{captcha2}</span> =
                </p>
                {/* <!-- answer --> */}
                <input
                  type="text"
                  name="answer"
                  placeholder="Answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </div>
              {/* <!-- submit --> */}
              <div className={styles.send_info}>
                <button type="submit">Send</button>
              </div>
            </div>
          </div>

          {loading && (
            <>
              <div id="overlay"></div>
              <div id="loader"></div>
            </>
          )}
        </form>
        {/* error */}

        {error && (
          <div className={styles.quote_form}>
            <p className={styles.error}>{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuoteForm;
