import React from 'react'
import './SideBar.css'
import { useLocation } from 'react-router-dom'


export default function SideBar() {
    const Marineblue = "hsl(213, 96%, 18%)";
    const coolgray = "hsl(231, 11%, 63%)";
    const Lightgray = "hsl(229, 24%, 87%)";
    const Pastelblue = 'rgb(208 218 255)';
    const Lightblue = 'hsl(206, 94 %, 87 %)';
    const Magnolia = 'hsl(217, 100%, 97%)';

    const location = useLocation()

    console.log(location.pathname)


    return (
        <div className={'sideBar'} style={{ height: "97%", minWidth: '260px' }}>
            <ul className={"d-flex flex-column p-4 text-uppercase"} style={{ listStyle: "none" }} >
                <li className={"d-flex align-items-center justify-content-start"}><span className='num  ' style={{
                    border: '1px solid ', borderRadius: "50%", borderColor: location.pathname == '/' ? Pastelblue : 'white', backgroundColor: location.pathname == '/' ? Pastelblue : "transparent", color: location.pathname == '/' ? Marineblue : "hsl(0, 0%, 100%)", height: "35px", width: "35px", textAlign: "center", padding: "5px"
                }}>1</span > <span className='title fs-6 steps  d-flex flex-column align-items-start justify-content-start m-3 ' style={{ color: "hsl(231, 11%, 63%)" }}>Step 1 <span className={'fs-6'} style={{ color: "hsl(0, 0%, 100%)" }}>Your info</span></span></li>
                <li className={"d-flex align-items-center justify-content-start"}><span className='num  ' style={{
                    border: '1px solid ', borderRadius: "50%", borderColor: location.pathname == '/selectPlan' ? Pastelblue : 'white', backgroundColor: location.pathname == '/selectPlan' ? Pastelblue : "transparent", color: location.pathname == '/selectPlan' ? Marineblue : "hsl(0, 0%, 100%)", height: "35px", width: "35px", textAlign: "center", padding: "5px"
                }}>2</span> <span className='title fs-6 steps  d-flex flex-column align-items-start justify-content-start m-3 ' style={{ color: "hsl(231, 11%, 63%)" }}>Step 2 <span className={'fs-6'} style={{ color: "hsl(0, 0%, 100%)" }}>Select plan</span></span></li>
                <li className={"d-flex align-items-center justify-content-start"}><span className='num  ' style={{
                    border: '1px solid ', borderRadius: "50%", borderColor: location.pathname == '/PickAdd' ? Pastelblue : 'white', backgroundColor: location.pathname == '/PickAdd' ? Pastelblue : "transparent", color: location.pathname == '/PickAdd' ? Marineblue : "hsl(0, 0%, 100%)", height: "35px", width: "35px", textAlign: "center", padding: "5px"
                }}>3</span> <span className='title fs-6 steps  d-flex flex-column align-items-start justify-content-start m-3 ' style={{ color: "hsl(231, 11%, 63%)" }}>Step 3 <span className={'fs-6'} style={{ color: "hsl(0, 0%, 100%)" }}>Add-ons</span></span></li>
                <li className={"d-flex align-items-center justify-content-start"}><span className='num  ' style={{
                    border: '1px solid ', borderRadius: "50%", borderColor: location.pathname == '/Finish' ? Pastelblue : 'white', backgroundColor: location.pathname == '/Finish' ? Pastelblue : "transparent", color: location.pathname == '/Finish' ? Marineblue : "hsl(0, 0%, 100%)", height: "35px", width: "35px", textAlign: "center", padding: "5px"
                }}>4</span> <span className='title fs-6 steps  d-flex flex-column align-items-start justify-content-start m-3 ' style={{ color: "hsl(231, 11%, 63%)" }}>Step 4 <span className={'fs-6'} style={{ color: "hsl(0, 0%, 100%)" }}>Summary</span></span></li>
            </ul>

        </div >
    )
}

