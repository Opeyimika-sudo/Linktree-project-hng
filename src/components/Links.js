import React from "react"
import { Link } from "react-router-dom"


export default function Links() {
    return (
        <div className="links">
            <button className="btn btn-1" id="twitter_link">
                <a href="https://twitter.com/LifeOfOpeyimika">Twitter Link</a>
            </button>
            <button className="btn btn-2" id="btn-zuri">
                <a href="https://training.zuri.team/">Zuri Team</a>
                <sub>Join the Zuri team</sub>
            </button>
            <button className="btn btn-3" id="books">
                <a href="http://books.zuri.team">Zuri Books</a>
                <sub>Find books about design and coding here</sub>
            </button>
            <button className="btn btn-4" id="book_python">
                <a href="https://books.zuri.team/python-for-beginners?ref_id=opeyimika">Python Books</a>
                <sub>Learn Python as a beginner with this easy-to-understand text</sub>
            </button>
            <button className="btn btn-5" id="pitch">
                <a href="https://background.zuri.team">Background Check for Coders</a>
                <sub>Want to do background checks on coders? Click here</sub>
            </button>
            <button className="btn btn-6" id="book__design">
                <a href="https://books.zuri.team/design-rules">Design Books</a>
                <sub>Here's a free design book courtesy of your friends from Zuri</sub>
            </button>
            <button id="contact" className="btn">
                <Link to="/contact">
                    <h3>Contact Me</h3>
                </Link>
            </button>
        </div>
    )
}