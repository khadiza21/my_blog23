// import React from 'react'
import "./TopBar.css";
export default function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">
      <i className=" topIcon fa-brands fa-square-facebook"></i>
      <i className=" topIcon fa-brands fa-square-twitter"></i>
      <i className=" topIcon fa-brands fa-linkedin"></i>
      <i className=" topIcon fa-brands fa-square-github"></i>

      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
