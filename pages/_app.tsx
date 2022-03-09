import '../styles/globals.css';
import '../components/NavBar/NavBar.css';
import '../components/Footer/Footer.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
