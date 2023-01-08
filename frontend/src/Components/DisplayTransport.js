import React from 'react'
import './DisplayTransport.css'
import axios from 'axios';
import { useState ,useEffect} from 'react';

export default function DisplayTransport() {
   const [TransportList, setTransportList] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/user/getTransport").then((response) => {
      setTransportList(response.data.transport);     
    });
  },[]);



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

                  </div>
                  </div>
                </div>
                
            )
          })
          
        }
        
        </div>
        </div>
        </div>

        </>
        
             )
  }

