import React,{useEffect,useState} from 'react'
import "./Background.css"
// import axios from 'axios'
import backgroundImage from '../images/skyline.jpg'
export default function Background() {

    return (
        <div>
            <img className="background" src={backgroundImage} alt="background"/>
        </div>
    )
}
