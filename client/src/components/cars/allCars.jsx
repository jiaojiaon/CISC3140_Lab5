import React, { useEffect, useState } from 'react';
import Layout from "../Layout";
import { Link } from 'react-router-dom';


function AllCars() {
    const [year, setYear] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')

    const [backendData, setBackendData] = useState([{}])

    const submitHandler = (e) => {
        e.preventDefault()

        fetch('http://localhost:3030/cars').then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
                console.log(backendData)
            }
        )
    }

    useEffect(() => {
        fetch('http://localhost:3030/cars').then(
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
                <div className = "Display">
            <h1>Viewing all cars data in the database:</h1>
            <form onSubmit = {submitHandler} className="Form">
                <input
                    className="Input"
                    placeholder="Enter Year..."
                    value={year}
                    onChange={e => setYear(e.target.value)}
                />
                <input
                    className="Input"
                    placeholder="Enter Make..."
                    value={make}
                    onChange={e => setMake(e.target.value)}
                />
                <input
                    className="Input"
                    placeholder="Enter Model..."
                    value={model}
                    onChange={e => setModel(e.target.value)}
                />
                 <button type="submit" className="Button">
                Search
            </button>
            <button type="submit" className="Button"><Link to="/addcars/" className='nav-link'> Add new Car</Link> </button>
            <button type="submit" className="Button"><Link to="/updatecars/" className='nav-link'> Update Car</Link> </button>


            </form>
           

            <table className="Table">
                <tbody>
                    <tr>
                        <th className='HeaderCell'> Car ID</th>
                        <th className='HeaderCell'> Year</th>
                        <th className='HeaderCell'> Make</th>
                        <th className='HeaderCell'> Model</th>
                    </tr>
                    {
                        (make !== '' && model !== '' && year !== ''
                        ) ? (
                            backendData.data
                                .filter(car => car.Year = year)
                                .filter(car => car.Make.toLowerCase().startsWith(make.toLowerCase()))
                                .filter(car => car.Model.toLowerCase().startsWith(model.toLowerCase()))
                                .map((car, i) => (
                                    <tr key={i}>
                                        <td className='Cell'>{car.Car_ID}</td>
                                        <td className='Cell'>{car.Year}</td>
                                        <td className='Cell'>{car.Make}</td>
                                        <td className='Cell'>{car.Model}</td>
                                    </tr>
                                ))
                        ) : (
                            (make !== '')
                        ) ? (
                            backendData.data
                                .filter(car => car.Make.toLowerCase().startsWith(make.toLowerCase()))
                                .map((car, i) => (
                                    <tr key={i}>
                                        <td className='Cell'>{car.Car_ID}</td>
                                        <td className='Cell'>{car.Year}</td>
                                        <td className='Cell'>{car.Make}</td>
                                        <td className='Cell'>{car.Model}</td>
                                    </tr>
                                ))
                        ) : (

                            (model !== '')
                        ) ? (
                            backendData.data
                                .filter(car => car.Model.toLowerCase().startsWith(model.toLowerCase()))
                                .map((car, i) => (
                                        <tr key={i}>
                                        <td className='Cell'>{car.Car_ID}</td>
                                        <td className='Cell'>{car.Year}</td>
                                        <td className='Cell'>{car.Make}</td>
                                        <td className='Cell'>{car.Model}</td>
                                    </tr>
                                ))
                        ) : (
                            (year !== '')
                        ) ? (
                            backendData.data
                                .filter(car => car.Year = year)
                                .map((car, i) => (
                                        <tr key={i}>
                                        <td className='Cell'>{car.Car_ID}</td>
                                        <td className='Cell'>{car.Year}</td>
                                        <td className='Cell'>{car.Make}</td>
                                        <td className='Cell'>{car.Model}</td>
                                    </tr>
                                ))
                        ) : (
                            backendData.data.map((car, i) => (
                                   <tr key={i}>
                                        <td className='Cell'>{car.Car_ID}</td>
                                        <td className='Cell'>{car.Year}</td>
                                        <td className='Cell'>{car.Make}</td>
                                        <td className='Cell'>{car.Model}</td>
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

export default AllCars;