import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/Gototop'
import Header from '@/components/Header'
import TeamMember from '@/components/Team'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
        <TeamMember/>
        <Footer/>
        <ScrollToTopButton/>
    </div>
  )
}

export default page