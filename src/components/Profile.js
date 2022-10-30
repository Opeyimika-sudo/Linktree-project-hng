import React from 'react'
import profile_img from '../images/profile__img.png'
import share_icon from '../images/share_button_mobile.png'
export default function Profile() {
  return (
    <div className="profile">
      <img src={share_icon} alt="share profile icon"/>
      <img src={profile_img} alt="profile" id="profile__img"/>
      <h2 id="twitter">@LifeOfOpeyimika</h2>
      <p id="slack" style={{display:"none"}}>opeyimika</p>
    </div>
  )
}
