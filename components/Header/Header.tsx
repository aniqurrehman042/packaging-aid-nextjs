import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    const [currentHeaderImgNo, setCurrentHeaderImgNo] = useState(0);

    useEffect(() => {
        const bannerImgUpdateIntervalId = setInterval(() => setCurrentHeaderImgNo(oldHeaderImgNo => (oldHeaderImgNo + 1) % 3), 2500);
        return () => clearInterval(bannerImgUpdateIntervalId);
    }, []);

    return (
        <header>
            <img className={`header-bg-img ${currentHeaderImgNo === 0 ? 'header-bg-img-active' : ''}`} src={`https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/banner-1.webp?alt=media`} />
            <img className={`header-bg-img ${currentHeaderImgNo === 1 ? 'header-bg-img-active' : ''}`} src={`https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/banner-2.webp?alt=media`} />
            <img className={`header-bg-img ${currentHeaderImgNo === 2 ? 'header-bg-img-active' : ''}`} src={`https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/banner-3.webp?alt=media`} />
            <div className="header-content">
                <h1>Stylish Custom Printed Packaging Boxes for your Products</h1>
                <p>We help turn your dream boxes into reality in a fast and easy way</p>

                <div className="action-buttons">
                    <Link href="/quote-form"><a className="btn-get-free-quote">Get Free Quote</a></Link>
                    <a href="#categoriesSection">Get Started</a>
                </div>
            </div>
        </header>
    );
}

export default Header;