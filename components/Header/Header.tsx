import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <h1>Stylish Custom Printed Packaging Boxes for your Products</h1>
                <p>We help turn your dream boxes into reality in a fast and easy way</p>
            </div>
            <div className="action-buttons">
                <Link href="/quote-form"><a className="btn-get-free-quote">Get Free Quote</a></Link>
                <a href="#categoriesSection">Get Started</a>
            </div>
        </header>
    );
}

export default Header;