import React from 'react';
import './TransportMenu.css';

export default function TransportMenu() {
    return (
            <>
        
<div data-testid="MenuT">
<div className='hed'>
    <button className='logout'>Logout</button>

<div >
<h1  className='titlee'>πππ°π½ππΏπΎπππ΄π</h1>
</div>
</div>
<body>
    <nav className="navMenu">
      <a data-testid="Add" href="/AddTransport">Add <br/>Transport</a>
      <a data-testid="View"  href="/DisplayTransport">View <br/>Transport</a>
      <a data-testid="Update"  href="/UpdateTransport">Update <br/>Transport</a>
      <a data-testid="Delete"  href="/DisplayTransport">Delete <br/>Transport</a>
      <div className="dot"></div>
    </nav>
  </body>
</div>
        </>
    )
    }
  