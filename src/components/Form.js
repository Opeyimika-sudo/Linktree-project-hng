import React from 'react'
import '../App.css'

export default function Form() {
  return (
    <>
      <form>
        <h2 id="form_header">Contact Me</h2>
        <p id="form_text">Hi there, contact me to ask me about anything you have in mind.</p>

        <div className="names">
            <div className="first-name">
                <label htmlFor="first_name" id="first">First name</label><br />
                <input type="text" name="" value="" id="first_name" placeholder="Enter your first name"/>
            </div>
            <div className="last-name">
                <label htmlFor="last_name" id="second">Last name</label><br />
                <input type="text" name="" value="" id="last_name" placeholder="Enter your last name"/>
            </div>
        </div>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value="" id="email" placeholder="yourname@email.com"/>
        <label htmlFor="message">Message</label>
        <textarea name="" value="" id="message" placeholder="Send me a message and I'll reply you as soon as possible..."/>
        
        <div className="checkbox">
            <input type="checkbox" name="checked" value="" id="checked"/>
            <label htmlFor="checked" id="checked-text">You agree to providing your data to @LifeOfOpeyimika who may contact you.</label>
        </div>
        
        <button id='btn__submit'>Send message</button>
      </form>
    </>
  )
}

