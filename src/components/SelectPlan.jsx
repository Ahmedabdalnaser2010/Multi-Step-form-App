import React, { useEffect, useState } from 'react'
import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import { Link, useNavigate } from 'react-router-dom';
import './SideBar.css'

export default function SelectPlan({ arcadeMon, arcadeyr, advMon, advYr, proMon, proYr }) {

    let navigate = useNavigate()

    const Marineblue = "hsl(213, 96%, 18%)";
    const coolgray = "hsl(231, 11%, 63%)";
    const Lightgray = "hsl(231.43deg 11.11% 62.94% / 10%)";
    const Pastelblue = 'hsl(228 100% 84% / 15%)';


    const [offer, setOffer] = useState(false)
    const [selectBundle, setSelectBundle] = useState("arcade")

    const offerPeriod = JSON.parse(sessionStorage.getItem("period"))
    const bundles = JSON.parse(sessionStorage.getItem("bundle"))

    console.log(selectBundle)

    useEffect(() => {

        if (selectBundle == 'arcade') {
            setSelectBundle(bundles)
        }

        if (offer == false) {
            setOffer(offerPeriod)
        }

    }, [])

    const handleSubmit = (e) => {

        e.preventDefault();

        sessionStorage.setItem("bundle", JSON.stringify(selectBundle))

        sessionStorage.setItem("period", JSON.stringify(offer))

        navigate('/PickAdd')
    }





    return (

        <div className={'mainCont'} style={{ margin: " 8px ", width: "500px" }}>
            <h2 style={{ color: Marineblue, fontWeight: "700" }}> Select your plan</h2>
            <p style={{ color: coolgray, height: "30px" }}>  You have the option of monthly or yearly billing.</p>

            <form className={'planForm d-flex flex-column mt-5'} style={{ height: "400px" }} onSubmit={handleSubmit}>
                <div className={"selectors "} style={{ display: "flex", justifyContent: "space-between", alignItems: "start", columnGap: "20px", height: "260px" }}>
                    <label htmlFor="arcade" className={'d-flex flex-column justify-content-between  p-3 rounded-3'} style={{ width: "160px", minHeight: "200px", border: "1.5px solid ", minWidth: "120px", borderColor: selectBundle == "arcade" ? Marineblue : coolgray, backgroundColor: selectBundle == "arcade" ? Pastelblue : "transparent" }}>
                        <input type="radio" id='arcade' name='bundle' value={"arcade"} style={{ display: "none" }} onChange={(e) => setSelectBundle(e.target.value)} />
                        <img src={arcade} alt="arcade" width={'40px'} style={{ marginBottom: "60px" }} />
                        <div className={"title d-flex flex-column justify-content-between"}>
                            <span style={{ color: Marineblue, fontWeight: "700" }}>Arcade</span>
                            <span style={{ color: coolgray, display: offer ? "none" : "flex" }}>{arcadeMon}</span>
                            <span style={{ color: coolgray, display: offer ? "flex" : "none" }}>{arcadeyr}</span>
                            <span style={{ color: Marineblue, display: offer ? "flex" : "none" }}>2 months free</span>
                        </div>
                    </label>
                    <label htmlFor="advanced" className={'d-flex flex-column justify-content-between  p-3 rounded-3'} style={{ width: "160px", minHeight: "200px", border: "1.5px solid ", minWidth: "120px", borderColor: selectBundle == "advanced" ? Marineblue : coolgray, backgroundColor: selectBundle == "advanced" ? Pastelblue : "transparent" }}>
                        <input type="radio" id='advanced' name='bundle' value={"advanced"} style={{ display: "none" }} onChange={(e) => setSelectBundle(e.target.value)} />
                        <img src={advanced} alt="arcade" width={'40px'} style={{ marginBottom: "60px" }} />
                        <div className={"title d-flex flex-column justify-content-between"}>
                            <span style={{ color: Marineblue, fontWeight: "700" }}>Advanced</span>
                            <span style={{ color: coolgray, display: offer ? "none" : "flex" }}>{advMon}</span>
                            <span style={{ color: coolgray, display: offer ? "flex" : "none" }}>{advYr}</span>
                            <span style={{ color: Marineblue, display: offer ? "flex" : "none" }}>2 months free</span>
                        </div>
                    </label>
                    <label htmlFor="pro" className={'d-flex flex-column justify-content-between   p-3 rounded-3'} style={{ width: "160px", minHeight: "200px", border: "1.5px solid", minWidth: "120px", borderColor: selectBundle == "pro" ? Marineblue : coolgray, backgroundColor: selectBundle == "pro" ? Pastelblue : "transparent" }}>
                        <input type="radio" id='pro' name='bundle' value={"pro"} style={{ display: "none" }} onChange={(e) => setSelectBundle(e.target.value)} />
                        <img src={pro} alt="arcade" width={'40px'} style={{ marginBottom: "60px" }} />
                        <div className={"title d-flex flex-column justify-content-between"}>
                            <span style={{ color: Marineblue, fontWeight: "700" }}>Pro</span>
                            <span style={{ color: coolgray, display: offer ? "none" : "flex" }}>{proMon}</span>
                            <span style={{ color: coolgray, display: offer ? "flex" : "none" }}>{proYr}</span>
                            <span style={{ color: Marineblue, display: offer ? "flex" : "none" }}>2 months free</span>
                        </div>
                    </label>
                </div>

                <div className="toggle form-switch mb-5 rounded-3 p-2 d-flex align-items-center justify-content-center gap-3" style={{ backgroundColor: Lightgray, height: '50px' }}>
                    <label htmlFor='offer' style={{ color: offer ? coolgray : Marineblue, fontWeight: !offer ? "700" : "300" }}>Monthly</label>
                    <input checked={offer ? true : ""} className={'form-check-input ms-0'} style={{ backgroundColor: offer ? Marineblue : '' }} id='offer' type="checkbox" onChange={(el) => setOffer(el.target.checked)} />
                    <label htmlFor='offer' style={{ color: offer ? Marineblue : coolgray, fontWeight: offer ? "700" : "300" }}>Yearly</label>
                </div>

                <div className='allButton d-flex justify-content-between align-items-center mt-3'>
                    <Link to={'/'}>
                        <button className={"btn"} type='submit' style={{ backgroundColor: "transparent", color: coolgray, width: "100px" }}>Go Back</button>
                    </Link>

                    <button className={"btn "} style={{ backgroundColor: Marineblue, color: "white", width: "100px" }}>Next Step</button>

                </div>

            </form >
        </div >
    )
}
