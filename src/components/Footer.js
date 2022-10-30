import React from 'react'
import zuri_logo from '../images/zuri-logo.svg'
import I4G from '../images/I4G.png'

export default function Footer() {
  return (
    <div className='footer'>
        <img src={zuri_logo} alt="zuri logo" id="zuri_logo"/>
        <p id="footer_text">HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="Ingressive For Good logo" id="I4G_logo" />
    </div>
  )
}
