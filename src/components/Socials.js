import React from 'react'
import slack_icon from '../images/slack-icon.png'
import github_icon from '../images/github-icon.png'

export default function Socials() {
  return (
    <div className="socials">
      <img src={slack_icon} alt="slack icon"/>
      <img src={github_icon} alt="github icon"/>
    </div>
  )
}
