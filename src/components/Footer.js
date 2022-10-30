import React from 'react'
import zuri_icon from '../images/zuri-icon.png'
import red_dot from '../images/red-dot-zuri.png'
import I4G from '../images/I4G.png'

export default function Footer() {
  return (
    <div className='footer'>
        <img src={zuri_icon} alt="zuri icon" />
        <img src={red_dot} alt="red dot" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="Ingressive For Good logo" />
    </div>
  )
}
