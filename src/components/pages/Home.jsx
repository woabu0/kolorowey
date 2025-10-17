import React from 'react'
import { Navbar } from '../sections/Navbar'
import { Hero } from '../sections/Hero'
import { Channel } from '../sections/Channel'
import { Growth } from '../sections/Growth'
import { Service } from '../sections/Service'
import { Testimonial } from '../sections/Testimonial'
import { Contact } from '../sections/Contact'
import { Footer } from '../sections/Footer'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Channel />
        <Growth />
        <Service />
        <Testimonial />
        <Contact />
        <Footer />
    </div>
  )
}
