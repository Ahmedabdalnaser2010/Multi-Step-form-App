import React from 'react'
import logo from '../assets/images/icon-thank-you.svg'
import { Link } from 'react-router-dom';

export default function Thanks() {

    const Marineblue = "hsl(213, 96%, 18%)";
    const coolgray = "hsl(231, 11%, 63%)";
    const Lightgray = "hsl(231.43deg 11.11% 62.94% / 10%)";
    const Lightgray2 = "hsl(229, 24%, 87%)";
    const Purplishblue = "hsl(243, 100%, 62%)";
    const Pastelblue = 'hsl(228 100% 84% / 15%)';
    const Lightblue = 'hsl(206, 94%, 87%)';


    return (
        <div className={'mainCont d-flex flex-column align-items-center justify-content-around'} style={{ margin: " 8px ", width: "500px", height: "400px" }}>

            <img src={logo} alt="thankYou" width={'80px'} />
            <div style={{ fontSize: "2em", fontWeight: "700", color: Marineblue }}>  Thank you!</div>
            <div style={{ color: coolgray, textAlign: "center" }}>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </div>
            <Link to={'/'}>
                <button className={"btn"} style={{ backgroundColor: Purplishblue, color: "white", width: "120px" }}>Main Page</button>
            </Link>
        </div>

    )
}
