import { useEffect, useState } from "react";
import Link from "next/link";

const NavBar = () => {
    let [isMobileDevice, setMobileDevice] = useState(false);
    let [isMenuOpen, setMenuOpen] = useState(false);
    let [isRetailMenuOpen, setRetailMenuOpen] = useState(false);
    let [isIndustryMenuOpen, setIndustryMenuOpen] = useState(false);

    const calculateIfMobileDevice = () => (window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth) < 768;

    useEffect(() => {
        setMobileDevice(calculateIfMobileDevice());
        window.addEventListener('resize', () => setMobileDevice(calculateIfMobileDevice()));
        document.addEventListener('scroll', () => {
            if (document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20) {
                document.getElementById('navbar')!.classList.add('shadow');
            } else {
                document.getElementById('navbar')!.classList.remove('shadow');
            }
        });
    }, []);

    return (
        <nav id="navbar">
            <ul className="nav-list">
                <li><Link href="/"><a><img className="nav-logo" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/packaging-aid-logo.png?alt=media" alt="Logo" /></a></Link></li>
                <li className="nav-menu">
                    <ul className={`nav-menu-list ${isMobileDevice && !isMenuOpen ? 'menu-closed' : ''}`}>
                        <li id="menu-toggle" onClick={() => setMenuOpen(false)}><i className="fa fa-cross"></i></li>
                        <li><Link href="/"><a className="nav-menu-item" onClick={() => setMenuOpen(false)}>Home</a></Link></li>
                        <li className={`parent-menu ${!isMobileDevice ? 'desktop-show-dropdown-on-hover' : ''}`}>
                            <Link href="/categories/retail-boxes"><a className="nav-menu-item" onClick={() => setMenuOpen(false)} > Retail Boxes</a ></Link>
                            <i className={`parent-menu-arrow fa ${isRetailMenuOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} onClick={() => setRetailMenuOpen(!isRetailMenuOpen)} ></i>
                            <div className={`menu-dropdown ${!isRetailMenuOpen && isMobileDevice ? 'hidden' : ''}`}>
                                <ul id="retail-boxes-list">
                                    <li>
                                        <Link href="/products/archive-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/archive-boxes.webp?alt=media" alt="Archive Boxes" /><p>Archive Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/business-card-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/business-card-boxes.webp?alt=media" alt="Business Card Boxes" /><p>Business Card Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/candle-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/candle-boxes.webp?alt=media" alt="Candle Boxes" /><p>Candle Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/cardboard-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/cardboard-boxes.webp?alt=media" alt="Cardboard Boxes" /><p>Cardboard Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/cd-dvd-storage-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/cd-dvd-boxes.webp?alt=media" alt="CD/DVD Storage Boxes" /><p>CD/DVD Storage Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/cigarette-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/cigarette-boxes.webp?alt=media" alt="Cigarette Boxes" /><p>Cigarette Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/corrugated-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/corrugated-boxes.webp?alt=media" alt="Corrugated Boxes" /><p>Corrugated Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/cube-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/cube-boxes.webp?alt=media" alt="Cube Boxes" /><p>Cube Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/die-cut-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/die-cut-boxes.webp?alt=media" alt="Die Cut Boxes" /><p>Die Cut Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/folding-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/folding-boxes.webp?alt=media" alt="Folding Boxes" /><p>Folding Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/invitation-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/invitation-boxes.webp?alt=media" alt="Invitation Boxes" /><p>Invitation Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/medicine-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/medicine-boxes.webp?alt=media" alt="Medicine Boxes" /><p>Medicine Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/paper-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/paper-boxes.webp?alt=media" alt="Paper Boxes" /><p>Paper Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/pillow-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/pillow-boxes.webp?alt=media" alt="Pillow Boxes" /><p>Pillow Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/playing-card-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/playing-card-boxes.webp?alt=media" alt="Playing Card Boxes" /><p>Playing Card Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/postage-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/postage-boxes.webp?alt=media" alt="Postage Boxes" /><p>Postage Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/presentation-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/presentation-boxes.webp?alt=media" alt="Presentation Boxes" /><p>Presentation Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/product-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/product-boxes.webp?alt=media" alt="Product Boxes" /><p>Product Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/shirt-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/shirt-boxes.webp?alt=media" alt="Shirt Boxes" /><p>Shirt Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/sleeve-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/sleeve-boxes.webp?alt=media" alt="Sleeve Boxes" /><p>Sleeve Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/soap-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/soap-boxes.webp?alt=media" alt="Soap Boxes" /><p>Soap Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/software-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/software-boxes.webp?alt=media" alt="Software Boxes" /><p>Software Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/toy-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/toy-boxes.webp?alt=media" alt="Toy Boxes" /><p>Toy Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/wedding-card-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/wedding-card-boxes.webp?alt=media" alt="Wedding Card Boxes" /><p>Wedding Card Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/white-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/white-boxes.webp?alt=media" alt="White Boxes" /><p>White Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/products/window-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/window-boxes.webp?alt=media" alt="Window Boxes" /><p>Window Boxes</p></a></Link>
                                    </li>
                                </ul>
                            </div >
                        </li >
                        <li className={`parent-menu ${!isMobileDevice ? 'desktop-show-dropdown-on-hover' : ''}`} >
                            <Link href="/categories"><a className="nav-menu-item" onClick={() => setMenuOpen(false)} > Box By Industry</a ></Link>
                            <i className={`parent-menu-arrow fa ${isIndustryMenuOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} onClick={() => setIndustryMenuOpen(!isIndustryMenuOpen)}></i>
                            <div className={`menu-dropdown ${!isIndustryMenuOpen && isMobileDevice ? 'hidden' : ''}`}>
                                <ul>
                                    <li>
                                        <Link href="/categories/cbd-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/cbd-boxes-catagory.webp?alt=media" alt="CBD Boxes" /><p>CBD Packaging Boxes</p></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/categories/cosmetic-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/cosmetic-boxes.webp?alt=media" alt="Cosmetic Boxes" />Cosmetic Boxes</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/categories/display-packaging-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/display-packaging-catagory.webp?alt=media" alt="Display Packaging Boxes" />Display Packaging Boxes</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/categories/eco-friendly-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/eco-friendly-boxes.webp?alt=media" alt="Eco Friendly Boxes" />Eco Friendly Boxes</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/categories/gift-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/gift-boxes-catagory.webp?alt=media" alt="Gift Boxes" />Gift Boxes</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/categories/food-and-beverage-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/food-boxes-catagory.webp?alt=media" alt="Food And Beverage Boxes" />Food And Beverage Boxes</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/categories/metalized-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/metalized-boxes.webp?alt=media" alt="Metalized Boxes" />Metalized Boxes</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/categories/retail-boxes"><a onClick={() => setMenuOpen(false)}><img className="menu-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/retail-boxes.webp?alt=media" alt="Retail Boxes" />Retail Boxes</a></Link>
                                    </li>
                                </ul>
                            </div >
                        </li >
                        <li><Link href="/categories/box-by-style"><a className="nav-menu-item" onClick={() => setMenuOpen(false)}>Box By Style</a></Link></li >
                        <li><Link href="/blog"><a className="nav-menu-item" onClick={() => setMenuOpen(false)}>Blog</a></Link></li >
                    </ul >
                </li >
                <li id="menu-toggle" className={isMenuOpen ? 'hidden' : ''} onClick={() => setMenuOpen(true)} > <i className="fa fa-bars"></i></li>
                <li className="nav-contact-info">
                    <ul>
                        <li><a href="tel:19165818050">1-916-581-8050</a></li>
                        <li><a href="mailto:sales@packagingaid.com">sales@packagingaid.com</a></li>
                    </ul>
                </li>
            </ul >
        </nav >
    );
}

export default NavBar;