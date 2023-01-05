// import React from 'react'
import './Home.css';

import Header from "../../component/Header/Header";
import Posts from "../../component/Posts/Posts";
import Sidebar from "../../component/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
        <Header></Header>
       <div className="home">
        <Posts></Posts>
        <Sidebar></Sidebar>
       </div>
    </>
  )
}
