import '../styles/globals.css';
import '../styles/HomePage.module.css';
import '../styles/CategoryPage.module.css';
import '../styles/BlogsPage.module.css';
import '../styles/BlogPage.module.css';
import '../styles/ProductPage.module.css';
import '../styles/AboutUsPage.module.css';
import '../styles/CategoriesPage.module.css';
import '../styles/FormThankYouPage.module.css';
import '../styles/QuoteFormPage.module.css';
import '../components/NavBar/NavBar.css';
import '../components/Footer/Footer.css';
import '../components/Header/Header.css';
import '../components/Specifications/Specifications.css';
import '../components/Categories/Categories.css';
import '../components/Process/Process.css';
import '../components/PopularProducts/PopularProducts.css';
import '../components/Reviews/Reviews.css';
import '../components/CategoryBox/CategoryBox.css';
import '../components/ProductBox/ProductBox.css';
import '../components/SmallProduct/SmallProduct.css';
import '../components/QuoteForm/QuoteForm.css';
import '../components/ProductDescription/ProductDescription.css';
import '../components/ProductDetails/ProductDetails.css';
import '../components/ProductSpecifications/ProductSpecifications.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  // <!--Start of Tawk.to Script-->
  if (typeof window !== 'undefined') {
    var Tawk_API: any = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/60e874c0649e0a0a5ccb678e/1fa60g46i';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode!.insertBefore(s1, s0);
    })();
  }
  // <!--End of Tawk.to Script-->

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      <Link href="/quote-form"><a className="right-vertical-fixed-button">Get A Free Quote Now</a></Link>
      <a className="whatsapp-btn" target="_blank" rel="noreferrer" href="https://wa.me/+19165818050/?text=Packaging%20Aid">
        <img className="whatsapp-logo"
          src="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/whatsapp-logo.png?alt=media" alt="WhatsApp" />
      </a>
    </>
  );
}

export default MyApp
