import React, { Component } from "react";
import axios from "axios";
import Layout from "../Layout";


class AddCars extends Component {

  constructor(props) {
    super(props)

    this.state = {
      carid: '',
      year: '',
      make: '',
      model: ''
    }
  }

  // function to handle input by setting state to the value that was input
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  // add the provided data to the database when the form is submitted then clear the input fields in the form
  submitHandler = (e) => {
    e.preventDefault()

    console.log(this.state)

    axios.post('http://localhost:3030/cars/', this.state)
    .then(response => {
      console.log(response)
      this.setState({
        carid: '',
        year: '',
        make: '',
        model: ''
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    
    const { carid, year, make,model } = this.state

    return (
      <div>

        <Layout />

        <div className="Display">

          <h1>Enter the Car ID, year, make, and model to add a new car</h1>
          <form onSubmit={this.submitHandler}>

            <input type="number" name="carid" placeholder="Enter new Car ID ..." value={carid} onChange={this.changeHandler} className="Input" />
            <input type="number" name="year" placeholder="Enter year ..." value={year} onChange={this.changeHandler} className="Input" />
            <input type="text" name="make" placeholder="Enter make ..." value={make} onChange={this.changeHandler} className="Input"/>
            <input type="text" name="model" placeholder="Enter model ..." value={model} onChange={this.changeHandler} className="Input"/>
            <button type="submit" className='addButton'>Add</button>
          </form>
        </div>

      </div>
    )
  }
}

export default AddCars;