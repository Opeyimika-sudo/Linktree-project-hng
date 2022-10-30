import React from 'react'
import slack_icon from '../images/slack-icon.png'
import github_icon from '../images/github-icon.png'

export default function Socials() {
  return (
    <div className="socials">
      <div className="socials-icons">
        
        <img src={slack_icon} alt="slack icon" id="slack_icon"/>
        <a href="https://github.com/Opeyimika-sudo">
          <img src={github_icon} alt="github icon" id="github_icon"/>
        </a>
      </div>
      <hr></hr>
    </div>
  )
}
