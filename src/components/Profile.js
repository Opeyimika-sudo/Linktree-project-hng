import React from 'react'
import profile_img from '../images/opeyimika_selfie.jpg'
import share_icon_desktop from '../images/share_button_desktop.png'
import share_icon_mobile from '../images/share_button_mobile.png'
export default function Profile() {
  const browserWidth = window.innerWidth;
  console.log(browserWidth)
  console.log({share_icon_desktop})

  return (
    <div className="profile">
      <div className="profile_images">
        <img src={browserWidth >= 800 ? share_icon_desktop : share_icon_mobile} alt="share profile icon" id="share-icon"/>
        <img src={profile_img} alt="profile" id="profile__img"/>
      </div>
      <h2 id="twitter">@LifeOfOpeyimika</h2>
      <p id="slack" style={{display:"none"}}>opeyimika</p>
    </div>
  )
}
