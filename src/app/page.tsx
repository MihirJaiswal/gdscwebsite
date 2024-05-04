'use client';
import AboutCommunity from "@/components/AboutCommunity";
import Collab from "@/components/Collab";
import Event from "@/components/Events";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/Gototop";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Boxes from "@/components/InfoBoxes";
import Partners from "@/components/Partners";
import Faq from "@/components/faq/Faq";
import Loader from "@/components/loader/Loader";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5500);

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
      <Boxes/>
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
