import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Home } from '../Home/Home'
import { Stacks } from '../Stack/Stacks'
import { Channels } from '../Channels/Channels'
import { Growths } from '../Growth/Growths'
import { Services } from '../Service/Services'
import { Testimonials } from '../Testimonial/Testimonials'
import { Contact } from '../Contact/Contact'
import { Footer } from '../Footer/Footer'

export const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Stacks />
        <Channels />
        <Growths />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}
