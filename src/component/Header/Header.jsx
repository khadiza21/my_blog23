// import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div className="header">
     <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
     </div>
     <img 
     className="headerImg"
     src="https://www.easycontrol.io/mobile/assets/new/home/home-top-bg.png"
     alt="" />
    </div>
  )
}
