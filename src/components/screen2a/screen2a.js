import React from "react";
import "./screen2a.css";
import { NavLink } from "react-bootstrap";
import Hamburger from 'hamburger-react'
import {useState} from 'react';
import Swal from "sweetalert2";

const Navbar = () => {
    const [click, setClick] = React.useState(false);
    const handle = event => {
      Swal.fire({
        title: 'Choose a file...',
        html: `<input type="file" id="file" class="swal2-input">`,
        preConfirm: () => {
          const file = Swal.getPopup().querySelector('#file').value
          if (!file) {
            Swal.showValidationMessage(`Please be sure to choose a file !`)
          }
          return { file : file }
        },
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Select',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'File added!',
            'Your file was successfully added',
            'success'
          )
        }
      })
    };
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    const [dropdown,setDropdown] = useState(false)
    const clickDrop = () => setDropdown(!dropdown)

    return (
      <>
     
      <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Website Name
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" onClick={clickDrop} href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Upload
        </a>
        <div class={dropdown ? "dropdown-menu " : "dropMenu"} aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Optum</a>
          <a class="dropdown-item" href="#" onClick={handle}>EMR</a>
        </div>
      </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Welcome Muhammad !
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i><Hamburger/></i>
          </div>
        </div>
      </nav>
    </ div>
    </>
    );
  }

export default Navbar;