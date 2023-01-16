import React from 'react'
import './DisplayTransport.css'
import axios from 'axios';
import Popup from './Popup'
import { useState ,useEffect} from 'react';

export default function DisplayTransport() {
   const [TransportList, setTransportList] = useState([]);
   const [id,setId] = useState("");
   const [namee,setNamee]= useState("");
   const [type,setType]= useState("");
   const [seats,setSeats]= useState("");
   const [price,setPrice]= useState("");
   const [image,setImage]= useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    axios.get("http://localhost:3001/user/getTransport").then((response) => {
      setTransportList(response.data.transport);     
    });
  },[]);

   const togglePopup = () => {
    setIsOpen(!isOpen);
  }



    return (
        <>
        <div className='header'>

        <div className='page'>
        <h1>Transports</h1>
        <div class="subMenuu" data-testid="DisplaySubMenu">
  <div class="submenutitle">Back to Main Menu</div>
          <div >
        <a href='/'><button class="menubtnn">Menu</button></a>
        
          </div>
    </div>
        </div>
        
      <div>
        <div className="transports" data-testid="Display">
        {
          TransportList.map((transport) => {

            return (

              
              <div className="card">
                <div>
                  <div className='text'>
                  <h3>Name: {transport.name}</h3>
                  <h4>Vehicle Type: {transport.type}</h4>
                  <h4>Seating Capacity: {transport.seats}</h4>
                  </div>
                  <h4 className='image'> <img src= {transport.image} width="260px" height="150px" alt=''></img></h4>
                  <h4 className='price'>Price: {transport.price}</h4>
                  <div className='flex'>
                  <button className='cardbtn' onClick={ async() => {

                        (await axios.delete(`http://localhost:3001/user/deleteTransport/${transport._id}`))
                          .then(window.location.reload(false))
                          .catch((error)=> console.log(error));
                          
                  }}>Delete</button>
                  <button className='cardbtn' onClick={() =>
                    {
                      

                     axios.get(`http://localhost:3001/user/findTransport/${transport._id}`).then((response) => {
                     setId(response.data.transport._id);
                     setNamee(response.data.transport.name);  
                     setType(response.data.transport.type); 
                     setSeats(response.data.transport.seats); 
                     setPrice(response.data.transport.price); 
                     setImage(response.data.transport.image); }).catch((err) => 
                     {
                     alert("No Data Found!");
                     });
                     console.log(namee);

                     togglePopup();
                  }
                  }>Update</button>

                  </div>
                  </div>
                </div>
                
            )
          })
          
        }
        
        </div>
        </div>
        </div>
        {isOpen && <Popup content={
                  <>
                  <div class="form" data-testid = "UpdateForm">
      <div class="title">Update Transport</div>
      <div class="input-container ic1">
        <input id="name" class="input" type="text" placeholder=" " value={namee} onChange={(event) => {
        setNamee(event.target.value);}} />
        <div class="cut"></div>
        <label for="name" class="placeholder">Vehicle Name</label>
      </div>

      <div class="input-container ic2">
        <input id="type" class="input" type="text" placeholder=" " value={type} onChange={(event) => {
        setType(event.target.value);}} />
        <div class="cut"></div>
        <label for="type" class="placeholder">Vehicle Type</label>
      </div>

      <div class="input-container ic2">
        <input id="seats" class="input" type="text" placeholder=" " value={seats} onChange={(event) => {
        setSeats(event.target.value);}} />
        <div class="cut cut-short"></div>
        <label for="seats" class="placeholder">Seating Capacity</label>
      </div>

      <div class="input-container ic2">
        <input id="price" class="input" type="text" placeholder=" " value={price} onChange={(event) => {
        setPrice(event.target.value);}} />
        <div class="cut cut-short"></div>
        <label for="price" class="placeholder">Price</label>
      </div>

      <div class="input-container ic2">
        <input id="image" class="input" type="text" placeholder=" " value={image} onChange={(event) => {
        setImage(event.target.value);}} />
        <div class="cut cut-short"></div>
        <label for="image" class="placeholder" >Images</label>
      </div>

          <div data-testid="Updatebtn">
      <button type="text" class="submit" onClick = {() =>

        {
          console.log(namee);
          const data = {namee,type,seats,price,image};
          axios.put(`http://localhost:3001/user/updateTransport/${id}`, data).then((response) => 
          {
            window.location.reload(false);
          }).catch((err) => 
          {
          console.error(err);
          });

        }

      }>Update</button>
      </div>
    </div>
                  </>
                  } handleClose = { togglePopup }
                  />}
        </>
        
             )
  }

