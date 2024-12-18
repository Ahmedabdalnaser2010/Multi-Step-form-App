
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert'
import './SideBar.css'


export default function FirstStep() {

    // Style
    const divStyle = {
        display: "flex",
        flexDirection: "column",
        marginBottom: "2em"
    }

    const Marineblue = "hsl(213, 96%, 18%)";
    const coolgray = "hsl(231, 11%, 63%)";

    // States
    let navigate = useNavigate()

    const intialformInputs = { name: '', email: '', phone: '' }

    const [formInputs, setFormInputs] = useState(intialformInputs)

    const intialErrorState = { name: false, email: false, phone: false }

    const newErrorState = {
        name: formInputs.name === "",
        email: formInputs.email === "",
        phone: formInputs.phone === ""
    }


    const [errorState, setErrorState] = useState(intialErrorState)

    useEffect(() => {

        const CurrentUser = JSON.parse(sessionStorage.getItem('currentUser'))

        if (CurrentUser) {

            setFormInputs(CurrentUser)

        }
    }, [])

    // functions



    const handleChange = (e) => {

        setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
        if (e.target.value.length !== 0) {
            setErrorState({ ...errorState, [e.target.name]: false })
        } else {
            setErrorState({ ...errorState, [e.target.name]: true })
        }

    }




    const handleFormSubmit = (e) => {

        e.preventDefault()

        setErrorState(newErrorState)

        if (!Object.values(newErrorState).includes(true)) {

            setErrorState(intialErrorState)

            // setFormInputs(intialformInputs)



        }

        if (!Object.values(formInputs).includes('')) {

            const users = JSON.parse(localStorage.getItem("users")) || []

            console.log(formInputs)

            const existingUser = users.some((ele) => ele.email == formInputs.email || ele.phone == formInputs.phone)

            // const CurrentUser = JSON.parse(sessionStorage.getItem("currentUser"))

            if (!existingUser) {

                users.push(formInputs)

                localStorage.setItem('users', JSON.stringify(users))

                sessionStorage.setItem('currentUser', JSON.stringify(formInputs))

                navigate('/selectPlan')

                e.preventDefault()

                // sessionStorage.setItem('currentUser', JSON.stringify(users))

            } else if (existingUser && !JSON.parse(sessionStorage.getItem("currentUser"))) {
                swal(
                    {
                        title: `Hello ${formInputs.name}, your Info Exists!`,
                        text: "A user with the same email, and phone already exists.",
                        icon: "warning",
                    }
                )
            } else {
                navigate('/selectPlan')
            }

        }

    }




    ////////////////////////////////////////////////

    return (

        <div className='mainCont' style={{ margin: " 8px", width: "500px" }}>
            <h2 style={{ color: Marineblue, fontWeight: "700" }}>Personal info</h2>
            <p style={{ color: coolgray, height: "30px" }}>  Please provide your name, email address, and phone number.</p>

            <form method='post' className={'d-flex flex-column mt-5'} style={{ height: "400px" }} onSubmit={handleFormSubmit}>
                <div className='inputsCon' style={divStyle}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <label htmlFor="name" style={{ color: Marineblue, fontWeight: "600" }}>Name</label>
                        {errorState.name && <p className='text-danger  mb-0' style={{ fontSize: '0.7em', fontWeight: "600" }}>This Field is Required</p>}
                    </div>

                    <input className='form-control' type="text" name='name' id='name' value={formInputs.name} onChange={handleChange} placeholder='e.g. Stephen King' style={{ padding: "0.75em", borderRadius: "10px", marginTop: "10px", border: "1px solid hsl(229, 24%, 87%)" }} />
                </div>
                <div className='inputsCon' style={divStyle}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <label htmlFor="email" style={{ color: Marineblue, fontWeight: "600" }}>Email Address</label>
                        {errorState.email && <p className='text-danger  mb-0' style={{ fontSize: '0.7em', fontWeight: "600" }}>This Field is Required</p>}
                    </div>

                    <input className='form-control' type="email" name='email' id='email' value={formInputs.email} onChange={handleChange} placeholder='e.g. stephenking@lorem.com' style={{ padding: "0.75em", borderRadius: "10px", marginTop: "10px", border: "1px solid hsl(229, 24%, 87%)" }} />
                </div>
                <div className='inputsCon' style={divStyle}>

                    <div className='d-flex justify-content-between align-items-center'>
                        <label htmlFor="phone" style={{ color: Marineblue, fontWeight: "600" }}>Phone Number</label>
                        {errorState.phone && <p className='text-danger  mb-0' style={{ fontSize: '0.7em', fontWeight: "600" }}>This Field is Required</p>}
                    </div>

                    <input className='form-control' type="text" name='phone' minLength={"10"} id='phone' value={formInputs.phone} onChange={handleChange} placeholder='e.g. +1 234 567 890' style={{ padding: "0.75em", borderRadius: "10px", marginTop: "10px", border: "1px solid hsl(229, 24%, 87%)" }} />
                </div>
                <div className='allButton d-flex justify-content-end align-items-center mt-3'>
                    <button className={"btn "} style={{ backgroundColor: Marineblue, color: "white", width: "100px" }}   >Next Step</button>

                </div>

            </form >
        </div >
    )
}
