import React, { Component } from "react";
import axios from "axios";
import Layout from "../Layout";


class AddOwners extends Component {

  constructor(props) {
    super(props)

    this.state = {
      carid: '',
      name: '',
      email: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()

    console.log(this.state)

    axios.post('http://localhost:3030/owners/', this.state)
    .then(response => {
      console.log(response)
      this.setState({
        carid: '',
        name: '',
        email: ''
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    
    const { carid, name, email } = this.state

    return (
      <div>

        <Layout />

        <div className="Display">

          <h1>Enter the Car ID, name, and email address to add a new owner</h1>
          <form onSubmit={this.submitHandler}>

            <input type="number" name="carid" placeholder="Enter new Car ID ..." value={carid} onChange={this.changeHandler} className="Input" />
            <input type="text" name="name" placeholder="Enter Name ..." value={name} onChange={this.changeHandler} className="Input"/>
            <input type="text" name="email" placeholder="Enter Email ..." value={email} onChange={this.changeHandler} className="Input"/>
            <button type="submit" className='addButton'>Add</button>
          </form>
        </div>

      </div>
    )
  }
}

export default AddOwners;