import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Contactme() {
  return (
    <>
        <button className="btn btn-7" id="contact_me">
                <Link to="../Contact">Contact Me</Link>
        </button>
    </>
  )
} 


