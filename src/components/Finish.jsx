import React, { createElement, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Finish({ arcadeMon, arcadeyr, advMon, advYr, proMon, proYr, onlineMon, onlineYr, storageMon, storageYr, profileMon, profileYr }) {


    const Marineblue = "hsl(213, 96%, 18%)";
    const coolgray = "hsl(231, 11%, 63%)";
    const Lightgray = "hsl(231.43deg 11.11% 62.94% / 10%)";
    const Lightgray2 = "hsl(229, 24%, 87%)";
    const Purplishblue = "hsl(243, 100%, 62%)";
    const Pastelblue = 'hsl(228 100% 84% / 15%)';
    const Lightblue = 'hsl(206, 94%, 87%)';


    let cost = 0

    let period = JSON.parse(sessionStorage.getItem('period'))
    let bundle = JSON.parse(sessionStorage.getItem('bundle'))
    let ons = JSON.parse(sessionStorage.getItem('ons'))

    if (bundle == 'advanced' && period !== true) {
        cost = advMon
    } else if (bundle == 'pro' && period !== true) {
        cost = proMon
    } else if (bundle == 'arcade' && period == true) {
        cost = arcadeyr
    } else if (bundle == 'advanced' && period == true) {
        cost = advYr
    } else if (bundle == 'pro' && period == true) {
        cost = proYr
    } else {
        cost = arcadeMon
    }

    let navigate = useNavigate()

    const handleClick = () => {

        sessionStorage.clear()

        navigate('/Thanks')

    }

    let online = period ? onlineYr : onlineMon
    let storage = period ? storageYr : storageMon
    let profile = period ? profileYr : profileMon



    return (

        <div className={'totalCost'} style={{ margin: " 8px ", width: "500px" }}>
            <h2 style={{ color: Marineblue, fontWeight: "700" }}>Finishing up</h2>
            <p style={{ color: coolgray, height: "30px" }}>Double-check everything looks OK before confirming.</p>

            <div className={'d-flex flex-column justify-content-between mt-5'} style={{ height: "" }}>
                <div className={"selectors d-flex flex-column justify-content-start align-items-start rounded-3 "} style={{ rowGap: "20px", marginBottom: "20px", height: "300px" }}>
                    <div className="items rounded-3 w-100 p-3" style={{ backgroundColor: Lightgray }}>
                        <div className={'plan d-flex align-items-center justify-content-between'} style={{ height: "60px", borderBottom: "1px solid ", borderColor: Lightgray2 }}>
                            <div className="left d-flex flex-column">
                                <span style={{ fontSize: "1.1em", fontWeight: "600", color: Marineblue, textTransform: "capitalize" }}>{bundle} ({period ? 'Yearly' : 'Monthly'})</span>
                                <Link to={'/selectPlan'} style={{ fontSize: "0.7em", color: coolgray }}>Change</Link>
                            </div>
                            <span className="right" style={{ fontSize: "0.95em", fontWeight: "700", color: Marineblue }}>
                                {cost}
                            </span>
                        </div>
                        <div className="ons ">
                            <div className={'first pt-3 justify-content-between align-items-center '} style={{ color: coolgray, fontSize: "0.9em", display: ons.online ? "flex" : "none" }}>
                                <span >Online Service</span>
                                <span style={{ color: Marineblue }}> {online} </span>
                            </div>
                            <div className={'first  pt-3 justify-content-between align-items-center '} style={{ color: coolgray, fontSize: "0.9em", display: ons.Storage ? "flex" : "none" }}>
                                <span >Larger Storage</span>
                                <span style={{ color: Marineblue }}>{storage} </span>
                            </div>
                            <div className={'first pt-3 justify-content-between align-items-center '} style={{ color: coolgray, fontSize: "0.9em", display: ons.profile ? "flex" : "none" }}>
                                <span >Customizable Profile</span>
                                <span style={{ color: Marineblue }}>{profile} </span>
                            </div>
                        </div>
                    </div>


                    <div className={'total pt-3 d-flex justify-content-between align-items-center w-100 p-3'} style={{ color: coolgray, fontSize: "0.9em" }}>
                        <span >  Total (per {period ? 'year' : 'month'})</span>
                        <span style={{ fontSize: "1.4em", fontWeight: "700", color: Purplishblue }}> ${parseInt(cost.match(/\d+/)[0]) + (ons.online ? parseInt(online.match(/\d+/)[0]) : 0) + (ons.Storage ? parseInt(storage.match(/\d+/)[0]) : 0) + (ons.profile ? parseInt(profile.match(/\d+/)[0]) : 0)}/{period ? 'yr' : 'mo'}</span>
                    </div>


                </div >



                <div className='allButton d-flex justify-content-between align-items-center mt-3'>

                    <Link to={'/PickAdd'}>
                        <button className={"btn"} style={{ backgroundColor: "transparent", color: coolgray, width: "100px" }}>Go Back</button>
                    </Link>


                    <button onClick={handleClick} className={"btn "} style={{ backgroundColor: Purplishblue, color: "white", width: "100px" }}>Confirm</button>

                </div>

            </div >
        </div >
    )
}
