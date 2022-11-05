import React from 'react'
import '../App.css'

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        isChecked: false
    })

    function handleChange(event){
        setFormData((prevState) => {
            const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
            const name = event.target.name;
            return {
                ...prevState,
            [name] : value
            }
        })
        console.log(formData)
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(formData)
        setFormData({ firstName: "", lastName: "", message: "", email: "", isChecked: false})
    }

    return (
        <>
            <form>
                <h2 id="form_header">Contact Me</h2>
                <p id="form_text">Hi there, contact me to ask me about anything you have in mind.</p>

                <div className="names">
                    <div className="first-name">
                        <label htmlFor="first_name" id="first">First name</label><br />
                        <input type="text" name="firstName" onChange= {handleChange} value={formData.firstName} id="first_name" placeholder="Enter your first name" required />
                    </div>
                    <div className="last-name">
                        <label htmlFor="last_name" id="second">Last name</label><br />
                        <input  type="text" name="lastName" onChange= {handleChange} value={formData.lastName} id="last_name" placeholder="Enter your last name" required />
                    </div>
                </div>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} value={formData.email} id="email" placeholder="yourname@email.com" required />
                <label htmlFor="message">Message</label>
                <textarea name="message" onChange={handleChange} value={formData.message} id="message" placeholder="Send me a message and I'll reply you as soon as possible..." required />
                
                <div className="checkbox">
                    <input type="checkbox" name="isChecked" onChange={handleChange} checked={formData.isChecked} id="isChecked"/>
                    <label htmlFor="isChecked" id="checked-text">You agree to providing your data to @LifeOfOpeyimika who may contact you.</label>
                </div>
                
                <button id='btn__submit' onClick={handleSubmit}>Send message</button>
            </form>
        </>
    )
}

