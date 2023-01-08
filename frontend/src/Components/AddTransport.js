import React from 'react'
import './AddTransport.css'
import axios from 'axios'
import { useState } from 'react'

export default function AddTransport() {

const [name,setName]= useState("");
const [type,setType]= useState("");
const [seats,setSeats]= useState("");
const [price,setPrice]= useState("");
const [image,setImage]= useState("");
const submit = () => {
  
  axios.post('http://localhost:3001/user/addTransport', {
    name,type,seats,price,image
  })
  .then(function (response) {

  alert("Name: " + name +
  "\nType: " + type +
  "\nSeats: " + seats +
  "\nPrice: " + price +
  "\nImages: " + image+
  "\nAdded to Database!"
  );
    return response;

  })
  .catch(function (error) {
    alert('Something went wrong!');
    return error;
  });

  

  setName(() => "");
  setType(() => "");
  setSeats(() => "");
  setPrice(() => "");
  setImage(() => "");

}

  return (
          <>
<div>
<div className="subMenu" data-testid="SubMenu">
  <div className="submenutitle">Back to Main Menu</div>
          <div >
        <a href='/'><button className="menubtn">Menu</button></a>
          </div>
    </div>

	    <div className="form" data-testid = "AddForm">
      <div className="title">Welcome</div>
      <div className="subtitle">Let's add new Transport!</div>
      <div className="input-container ic1">
        <input id="name" className="input" type="text" placeholder=" " value={name} onChange={(event) => {
        setName(event.target.value);}} />
        <div className="cut"></div>
        <label for="name" className="placeholder">Vehicle Name</label>
      </div>

      <div className="input-container ic2">
        <input id="type" className="input" type="text" placeholder=" " 
        value={type} onChange={(event) => {
          setType(event.target.value);}}/>
        <div className="cut"></div>
        <label for="type" className="placeholder">Vehicle Type</label>
      </div>

      <div className="input-container ic2">
        <input id="seats" className="input" type="text" placeholder=" "
        value={seats} onChange={(event) => {
          setSeats(event.target.value);}}
           />
        <div className="cut cut-short"></div>
        <label for="seats" className="placeholder">Seating Capacity</label>
      </div>

      <div className="input-container ic2">
        <input id="price" className="input" type="text" placeholder=" "
        value={price} onChange={(event) => {
          setPrice(event.target.value);}} />
        <div className="cut cut-short"></div>
        <label for="price" className="placeholder">Price</label>
      </div>

      <div className="input-container ic2">
        <input id="image" className="input" type="text" placeholder=" " 
        value={image} onChange={(event) => {
          setImage(event.target.value);}}/>
        <div className="cut cut-short"></div>
        <label for="image" className="placeholder" >Images</label>
      </div>
      <div data-testid="SubmitToAdd">
      <button type="text" className="submit" onClick={function(event){ submit()}}>Add to Transports</button>
      </div>
    </div>

    

    </div>
      
      </>
  )
  }
