'use client';
import AboutCommunity from "@/components/AboutCommunity";
import Collab from "@/components/Collab";
import Event from "@/components/Events";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/Gototop";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Faq from "@/components/faq/Faq";
import Loader from "@/components/loader/Loader";
import Search from "@/components/Search";
import React, { useState, useEffect } from 'react';
import Whatwedo from "@/components/Whatwedo";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="block bg-App-bg bg-no-repeat bg-fixed overflow-auto bg-cover">
    {loading ? (
      <Loader/>
    ) : (
      <div className="overflow-x-hidden">
      <Header/>
      <Hero/>
      <Partners/>
      <Search/>
      <AboutCommunity/>
      <Event/>
      <Collab/>
      <Faq/> 
      <Footer/>
      <ScrollToTopButton/>
    </div>
    )}
    </div>
  );
}
