import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Specifications from '../components/Specifications/Specifications';
import Categories from '../components/Categories/Categories';
import Process from '../components/Process/Process';
import PopularProducts from '../components/PopularProducts/PopularProducts';
import Reviews from '../components/Reviews/Reviews';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="name" content="Custom Packaging Boxes with Logo - PackagingAid" />
        <meta name="description" content="Get Custom Packaging Boxes at wholesale. Packaging Aid have premium quality printed boxes for your products in new designs, and styles. Free shipping in USA." />
        <meta name="twitter:title" content="Custom Packaging Boxes with Logo - PackagingAid" />
        <meta name="twitter:description" content="Get Custom Packaging Boxes at wholesale. Packaging Aid have premium quality printed boxes for your products in new designs, and styles. Free shipping in USA." />
        <meta name="og:title" content="Custom Packaging Boxes with Logo - PackagingAid" />
        <meta name="og:description" content="Get Custom Packaging Boxes at wholesale. Packaging Aid have premium quality printed boxes for your products in new designs, and styles. Free shipping in USA." />
      </Head>
      <Header />
      <Specifications />
      <Categories />
      <Process />
      <PopularProducts />
      <Reviews />
    </>
  )
}

export default Home
