import React,{useEffect,useState} from 'react'
import "./Background.css"
// import axios from 'axios'
import backgroundImage from '../images/skyline.jpg'
export default function Background() {

    // const key = process.env.REACT_APP_API_KEY
    // const url = "https://api.unsplash.com/photos/random?client_id="

    // const getBackground = ()=> {
    //     axios.get(`${url}${key}`).then(res=>{
    //         setBackgroundImage(() => res.data.urls.regular)
    //     })
    // }

    // const [backgroundImage,setBackgroundImage] = useState('')



    // useEffect(()=>{
    //     getBackground();
    // },[])



    return (
        <div>
            <img className="background" src={backgroundImage} alt="background"/>
        </div>
    )
}
