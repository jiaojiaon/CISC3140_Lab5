import React, { useEffect, useState } from "react";
import Layout from "../Layout";

import { Link } from 'react-router-dom';

function AllOwners() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [backendData, setBackendData] = useState([{}])

    const submitHandler = (e) => {

        e.preventDefault()

        fetch('http://localhost:3030/owners').then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
                console.log(backendData)
            }
        )
    }
    
    useEffect(() => {
        fetch('http://localhost:3030/owners').then(
        response => response.json()
        ).then(
        data => {
            setBackendData(data)
        }
        )
    }, [])
    
    return (
        <div className="container">
            {(typeof backendData.data === 'undefined') ? (
                <div>
                    <Layout />

                    <p>Loading...</p>
                </div>
            ) : (
                <div>
                    <Layout />

                    <div className="Display">
                    <h1>Viewing all owners data in the database:</h1>
                        <form onSubmit={submitHandler} className="Form">
                            <input type="text" value={name} placeholder="Name" onChange={e => setName(e.target.value)} className="Input"/>
                            <input type="text" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} className="Input"/>
                            <button type="submit" className='Button'>Search</button>

                            <button type="submit" className="Button"><Link to="/addowners/" className='nav-link'> Add new Owner</Link> </button>
                            <button type="submit" className="Button"><Link to="/updateowners/" className='nav-link'> Update Owner</Link> </button>

                        </form>

                        <table className="Table">
                            <tbody>
                                <tr>
                                    <th className='HeaderCell'>Car ID</th>
                                    <th className='HeaderCell'>Name</th>
                                    <th className='HeaderCell'>Email</th>
                                </tr>
                    
                                {
                                (name !== '' && email !== ''
                                ) ? (
                                    backendData.data
                                    .filter(owner => owner.Name.toLowerCase().startsWith(name.toLowerCase()))
                                    .filter(owner => owner.Email.toLowerCase().startsWith(email.toLowerCase()))
                                    .map((owner, i) => (
                                        <tr key={i}>
                                            <td className='Cell'>{ owner.Car_ID }</td>
                                            <td className='Cell'>{ owner.Name }</td>
                                            <td className='Cell'>{ owner.Email }</td>
                                        </tr>
                                    ))
                                ) : (
                                    (name !== '') 
                                ) ? (
                                    backendData.data
                                    .filter(owner => owner.Name.toLowerCase().startsWith(name.toLowerCase()))
                                    .map((owner, i) => (
                                        <tr key={i}>
                                            <td className='Cell'>{ owner.Car_ID }</td>
                                            <td className='Cell'>{ owner.Name }</td>
                                            <td className='Cell'>{ owner.Email }</td>
                                        </tr> 
                                    ))
                                ) : (
                                    (email !== '') 
                                ) ? (
                                    backendData.data
                                    .filter(owner => owner.Email.toLowerCase().startsWith(email.toLowerCase()))
                                    .map((owner, i) => (
                                        <tr key={i}>
                                            <td className='Cell'>{ owner.Car_ID }</td>
                                            <td className='Cell'>{ owner.Name }</td>
                                            <td className='Cell'>{ owner.Email }</td>
                                        </tr> 
                                    ))
                                ) : (
                                    backendData.data.map((owner, i) => (
                                    <tr key={i}>
                                        <td className='Cell'>{ owner.Car_ID }</td>
                                        <td className='Cell'>{ owner.Name }</td>
                                        <td className='Cell'>{ owner.Email }</td>
                                    </tr>
                                )))

                            
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            )}
        </div>
    );
}

export default AllOwners;