import React from 'react'
import logo from "../img/HK logo white.png"
import { useState,useEffect } from 'react';
import { Avatar, Badge } from 'antd';
import "antd/dist/reset.css";
import { Button, Drawer } from 'antd';
export default function Navbar() {
  // DRAWER START
  const [drawerdata,setdrawerdata]=useState(() => {
    const data = JSON.parse(localStorage.getItem("order"));
    console.log(data);
    return data || []; 
  });
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);


    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  // DRAWER END
  return (
<>
{/* DRAWER START */}
<Drawer
        closable
        destroyOnClose
        title={<p>My Bag</p>}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        
<div className="d-flex flex-column ">
{drawerdata.length > 0 ? (
  drawerdata.map((element, index) => (
    <div key={index} className='d-flex flex-row align-items-center shadow-lg my-2'>
      <img src={element.image} alt={element.name}  className='col-2'/>
      <h5 className='col-5 text-center'>{element.name}</h5>
      <p className='col-5 text-end'>{element.price}</p>
    </div>
  ))
) : (
  <p>No items in the cart</p>
)}
</div>
      </Drawer>
{/* DRAWRER END */}
<div className="container-fluid d-flex flex-row justify-content-between py-2">

 <img src={logo} className='img-fluid col-1' alt="" />

  <div className="col-6 d-flex flex-row justify-content-end align-items-center">

  <Button  onClick={showLoading} className='border-0'>
  <Badge count={drawerdata.length} size='small'>
        <i className="fa-solid fa-bag-shopping fs-5"></i>
      </Badge>
      </Button>

  </div>
</div>
{/* NAV START */}
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item px-2 ">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item px-2 ">
          <a className="nav-link" href="#">
 Hijab
          </a>
        </li>
        <li className="nav-item px-2 ">
          <a className="nav-link" href="#">
Accessories
          </a>
        </li>
        <li className="nav-item px-2 ">
          <a className="nav-link" href="#">
Contact-Us
          </a>
        </li>
        {/* <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li> */}
  
      </ul>
     
    </div>
  </div>
</nav>

{/* NAV END */}

</>
  )
}
