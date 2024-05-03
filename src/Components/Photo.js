import React from "react"
import photo from "../assets/rajesh.webp"


export default function Photo(){
    return(
        <div className="rajeshphotodiv">
        <img className="rajesh-photo" src={photo} alt="Rajesh Sharma"/>
        </div>
    )
};