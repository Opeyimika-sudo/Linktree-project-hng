import React from 'react'
import Profile from '../components/Profile'
import Links from '../components/Links'
import Socials from '../components/Socials'
import Footer from '../components/Footer'
import '../App.css';

export default function Home() {
  return (
    <div className="App">
      <Profile />
      <Links />
      <Socials />
      <Footer />
    </div>
  )
}
