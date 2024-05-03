import React from "react"
export default function Buttons(){
    return(
        <div className="buttonsdiv">
                    <a href="mailto:sangamrajsh@gmail.com">
                    <button className="button emailbutton">
                    <i className="fa fa-solid fa-envelope"></i>
                    Email
                    </button>
                    </a>
                
                
                    <a href="https://www.linkedin.com/in/sangamrajsh">
                    <button className="button linkedin-button">
                    <i className="fa fa-linkedin-square" style={{color: "white"}}></i>
                    Linkedin</button>
                    </a>
                
        </div>
    )
}