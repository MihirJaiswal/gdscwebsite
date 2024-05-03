
import { Event2 } from '@/components/Events'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/Gototop'
import Header from '@/components/Header'
import PastEvent from '@/components/PastEvents'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
        <Event2/>
        <PastEvent/>
        <Footer/>
        <ScrollToTopButton/>
    </div>
  )
}

export default page