import React, { useState } from "react";
import axios from "axios";

import Layout from "../Layout";

export default function UpdateOwner() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [carid, setCarID] = useState('');

    const submitHandler = (e) => {

        e.preventDefault()

        const data = {
            "name": name,
            "email": email
        }

        axios.patch(`http://localhost:3030/cars/:${carid}`, data)
        .then(response => {
            console.log(data)
            console.log(response)
            setCarID('')
            setName('')
            setEmail('')
        })
            .catch(error => {
                console.log(error)
        })
    }

    return (
      <div className="container">

        <Layout />

        <div className="Display">

            <h1>Enter the Car ID, name, and email address of the owner to be updated.</h1>

            <form onSubmit={submitHandler}>

                <input type="number" value={carid} onChange={e => setCarID(e.target.value)} placeholder="Enter Car ID..." className="Input"/>
                <input type="text" value={name} placeholder="Enter Name..." onChange={e => setName(e.target.value)} className="Input"/>
                <input type="text" value={email} placeholder="Enter Email..." onChange={e => setEmail(e.target.value)} className="Input"/>
                <button type="submit" className="Button">Update</button>
            </form>
        </div>


      </div>
    )
}