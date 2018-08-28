import React from "react"
import "./about.css"
import Picture from "../image/picofme.jpg"

const About = () => (
    <div className="container" id="about">
    <h1>De Chen</h1>
        <div className="row">
            <div className="col-md-4"> 
                <div>
                <img src={Picture} width="70%" height="70%" alt="mypic"></img>
                </div>
            </div>
            <div className="col-md-6">
                <div className="textbox">
                <h3>About me</h3>
                <p>Hello, I am a Front End developer also with knowledge on Back End.
                I have a diverse set of skills for designing front end all the way to design backend also.
                I am now looking for opportunities to be able to use my knowledge to grow in this ever changing tech world.</p>
                </div>
            </div>
        </div>
    </div>
);

export default About;