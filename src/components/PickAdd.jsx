import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function PickAdd({ onlineMon, onlineYr, storageMon, storageYr, profileMon, profileYr }) {


    const Marineblue = "hsl(213, 96%, 18%)";
    const coolgray = "hsl(231, 11%, 63%)";
    const Lightgray = "hsl(231.43deg 11.11% 62.94% / 10%)";
    const Purplishblue = "hsl(243, 100%, 62%)";
    const Pastelblue = 'hsl(228 100% 84% / 15%)';
    const Lightblue = 'hsl(206, 94%, 87%)';


    const [selectOns, setSelectOns] = useState({ online: false, Storage: false, profile: false })

    let navigate = useNavigate()

    useEffect(() => {

        let OnsItems = JSON.parse(sessionStorage.getItem("ons"))

        if (OnsItems) {


            if (Object.values(OnsItems).includes(true))

                setSelectOns(OnsItems)

        }

    }, []);

    const handleSubmit = (e) => {

        e.preventDefault()

        sessionStorage.setItem('ons', JSON.stringify(selectOns))

        navigate('/Finish')

    }

    let period = JSON.parse(sessionStorage.getItem("period"))

    return (

        <div className='mainCont' style={{ margin: " 8px ", width: "500px" }}>
            <h2 style={{ color: Marineblue, fontWeight: "700" }}>Pick add-ons</h2>
            <p style={{ color: coolgray, height: "30px" }}>Add-ons help enhance your gaming experience.</p>

            <form className={'d-flex flex-column justify-content-between mt-5'} style={{ height: "400px" }} onSubmit={handleSubmit}>
                <div className={"selectors "} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "start", rowGap: "20px", marginBottom: "20px", height: "300px" }}>
                    <label htmlFor="online" className='pick d-flex justify-content-between w-100 align-items-center p-3 rounded-3' style={{ border: "1px solid", borderColor: selectOns.online ? Marineblue : coolgray, backgroundColor: selectOns.online ? Pastelblue : 'transparent' }}>
                        <div className='d-flex align-items-center column-gap-3' >
                            <input checked={selectOns.online ? true : false} type="checkbox" id='online' style={{ zoom: "1.5", accentColor: Purplishblue }} value={selectOns.online} onChange={(e) => setSelectOns({ ...selectOns, online: e.target.checked })} />
                            <div className='title d-flex flex-column align-items-start justify-content-center' style={{ marginLeft: "10px" }}>
                                <span style={{ color: Marineblue, fontWeight: "600", fontSize: "1.15em" }}>Online service</span>
                                <span style={{ color: coolgray }}>Access to multiplayer games</span>
                            </div>
                        </div>
                        <span style={{ color: Purplishblue }}>{period ? onlineYr : onlineMon}</span>
                    </label>

                    <label htmlFor="storage" className='pick d-flex justify-content-between w-100 align-items-center p-3 rounded-3' style={{ border: "1px solid", borderColor: selectOns.Storage ? Marineblue : coolgray, backgroundColor: selectOns.Storage ? Pastelblue : 'transparent' }}>
                        <div className='d-flex align-items-center column-gap-3' >
                            <input checked={selectOns.Storage ? true : false} type="checkbox" id='storage' style={{ zoom: "1.5", accentColor: Purplishblue }} value={selectOns.Storage} onChange={(e) => setSelectOns({ ...selectOns, Storage: e.target.checked })} />
                            <div className='title d-flex flex-column align-items-start justify-content-center' style={{ marginLeft: "10px" }}>
                                <span style={{ color: Marineblue, fontWeight: "600", fontSize: "1.15em" }}>Larger storage</span>
                                <span style={{ color: coolgray }}>Extra 1TB of cloud save</span>
                            </div>
                        </div>
                        <span style={{ color: Purplishblue }}>{period ? storageYr : storageMon}</span>
                    </label>
                    <label htmlFor="profile" className='pick d-flex justify-content-between w-100 align-items-center p-3 rounded-3' style={{ border: "1px solid", borderColor: selectOns.profile ? Marineblue : coolgray, backgroundColor: selectOns.profile ? Pastelblue : 'transparent' }}>
                        <div className='d-flex align-items-center column-gap-3' >
                            <input checked={selectOns.profile ? true : false} type="checkbox" id='profile' style={{ zoom: "1.5", accentColor: Purplishblue }} value={selectOns.profile} onChange={(e) => setSelectOns({ ...selectOns, profile: e.target.checked })} />
                            <div className='title d-flex flex-column align-items-start justify-content-center' style={{ marginLeft: "10px" }}>
                                <span style={{ color: Marineblue, fontWeight: "600", fontSize: "1.15em" }}>Customizable Profile</span>
                                <span style={{ color: coolgray }}>Custom theme on your profile</span>
                            </div>
                        </div>
                        <span style={{ color: Purplishblue }}>{period ? profileYr : profileMon}</span>
                    </label>



                </div>



                <div className='allButton d-flex justify-content-between align-items-center mt-3'>

                    <Link to={'/selectPlan'}>
                        <button className={"btn"} style={{ backgroundColor: "transparent", color: coolgray, width: "100px" }}>Go Back</button>
                    </Link>


                    <button className={"btn "} style={{ backgroundColor: Marineblue, color: "white", width: "100px" }}>Next Step</button>

                </div>

            </form >
        </div >
    )
}
