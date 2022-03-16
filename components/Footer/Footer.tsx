import Link from "next/link";

const Footer = () => {
    return (
        <footer id="footerSection">
            <div className="row">
                <div id="logoDesc" className="column-3">
                    <img className="footer-logo"
                        src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/packaging-aid-logo.png?alt=media"
                        alt="Logo" />
                    <p>Packaging Aid is your one stop place for any kind of custom boxes. Whatever you dream, we will make it
                        for
                        you! The world
                        is your canvas and we are the ones who make it possible... </p>
                    <Link href="/about-us"><a className="desc-read-more">Read More</a></Link>
                </div>
                <div className="column-3">
                    <h3 className="column-heading">Box By Industry</h3>
                    <Link href="/categories/cbd-boxes"><a className="page-link">CBD Boxes</a></Link>
                    <Link href="/categories/retail-boxes"><a className="page-link">Retail Boxes</a></Link>
                    <Link href="/categories/cosmetic-boxes"><a className="page-link">Cosmetic Boxes</a></Link>
                    <Link href="/categories/display-packaging"><a className="page-link">Display Packaging</a></Link>
                    <Link href="/categories/eco-friendly-boxes"><a className="page-link">Eco Friendly Boxes</a></Link>
                    <Link href="/categories/food-and-beverages"><a className="page-link">Food &amp; Beverage</a></Link>
                    <Link href="/categories/gift-boxes"><a className="page-link">Gift Boxes</a></Link>
                </div>
                <div className="column-3">
                    <h3 className="column-heading">Box By Style</h3>
                    <Link href="/products/custom-pillow-boxes"><a className="page-link">Custom Pillow Boxes</a></Link>
                    <Link href="/products/double-wall-lid"><a className="page-link">Double Wall Lid</a></Link>
                    <Link href="/products/five-panel-hangar"><a className="page-link">Five Panel Hangar Boxes</a></Link>
                    <Link href="/products/four-corner-cake-boxes"><a className="page-link">Four Corner Cake Boxes</a></Link>
                    <Link href="/products/four-corner-lid-display"><a className="page-link">Four Corner Lid Display</a></Link>
                    <Link href="/products/bookend"><a className="page-link">Bookend</a></Link>
                    <Link href="/products/auto-bottom-tray"><a className="page-link">Auto Bottom Tray</a></Link>
                </div>
                <div className="column-3">
                    <h3 className="column-heading">Information</h3>
                    <Link href="/privacy-policy"><a className="page-link" >Privacy And Security</a></Link>
                    <Link href="/terms-and-conditions"><a className="page-link" >Terms And Conditions</a></Link>
                    <Link href="/about-us"><a className="page-link" >About Us</a></Link>
                    <Link href="/contact-us"><a className="page-link" >Contact Us</a></Link>
                    <Link href="/sitemap"><a className="page-link">Sitemap</a></Link>
                </div>
                <div className="column-3 contact-area">
                    <h3 className="column-heading">Contact Us</h3>
                    <div className="icon-link">
                        <i className="contact-icon fa fa-phone"></i>
                        <a className="page-link" href="tel:9165818050">916-581-8050</a>
                    </div>
                    <div className="icon-link">
                        <i className="contact-icon fa fa-email"></i>
                        <a className="page-link" href="mailto:sales@packagingaid.com">sales@packagingaid.com</a>
                    </div>
                    <div className="icon-link">
                        <i className="contact-icon fa fa-address"></i>
                        <p className="footer-address">2790 Sexton Pl, The Bronx, NY 10469, USA</p>
                    </div>
                    <div className="icon-link">
                        <a href="https://instagram.com/packagingaid" target="_blank">
                            <img className="social-icon"
                                src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/instagram.png?alt=media" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-8"></div>
                <img className="payment-icons col-4" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/payment-icons.png?alt=media" alt="Payment Icons" />
            </div>
        </footer>
    );
}

export default Footer;