import React, { useState } from "react";
import axios from "axios";

import Layout from "../Layout";

export default function UpdateCars() {

    const [carid, setCarID] = useState('')
    const [year, setYear] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
   
    const submitHandler = (e) => {

        e.preventDefault()

        const data = {
            "year": year,
            "make": make,
            "model": model
        }

        axios.patch(`http://localhost:3030/owners/:${carid}`, data)
        .then(response => {
            console.log(data)
            console.log(response)
            setCarID('')
            setYear('')
            setMake('')
            setModel('')
        })
            .catch(error => {
                console.log(error)
        })
    }

    return (
      <div className="container">

        <Layout />

        <div className="Container">

            <h1>Enter the new Car ID, year, make, and model of the car to be updated</h1>
            <form onSubmit={submitHandler}>

                <input type="number" value={carid} onChange={e => setCarID(e.target.value)} placeholder="Car ID" className="Input"/>
                <input type="text" value={year} placeholder="Year" onChange={e => setYear(e.target.value)} className="Input"/>
                <input type="text" value={make} placeholder="Make" onChange={e => setMake(e.target.value)} className="Input"/>
                <input type="text" value={model} placeholder="Model" onChange={e => setModel(e.target.value)} className="Input"/>
                <button type="submit" className="Button">Update</button>
            </form>
        </div>

      </div>
    )
}