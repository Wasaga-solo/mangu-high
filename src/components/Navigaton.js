import React from 'react';
import Theme from '../Theme'


//Bootstrap
import
 { Nav,Navbar,NavDropdown } 
from "react-bootstrap";

//React-router-dom
import { 
    Link,
    } from 'react-router-dom';
  
//Styles
import '../App.css';

const Navigaton = () => {
    return (
        <>
 <style type="text/css">
    {`
    .nav-link{
      color: ${Theme.tertiaryColor};
      font-family: 'Quicksand', serif;
      font-weight:bold;
      opacity:1;
    }
    .nav-link:hover{
        color: ${Theme.tertiaryColor};
        opacity:0.8 ;
      }
    .dropdown-item{
        background-color:${Theme.secondaryColor};
        color:${Theme.primaryColor2};
        font-family: 'Quicksand', serif;
    }
    .dropdown-item:hover{
        background-color:${Theme.primaryColor2};
        opacity:0.9;
        color:${Theme.tertiaryColor};
    }
    .dropdown-menu{
        background-color:${Theme.secondaryColor};
    }
    .nav-icon{
        margin:15px;
        cursor:pointer;
        color:${Theme.tertiaryColor};
        font-size:25px;
    }
    .nav-icon:hover{
        opacity:0.7;
    }
    .navbar{
        background-color:${Theme.primaryColor};
      }
    .brand-header{
        color: ${Theme.tertiaryColor};
        margin-right: 80px;
        font-family: 'Abril Fatface', serif;;
    }
    .brand-name{
        margin-bottom:0px;
        padding:0px;
        position:relative;
        top:20px;
    }
    .brand-jishinde{
        font-family: 'Caveat', serif;
        font-size:18px;
        margin-left:15px;
    }
    .socialicon{
        color: ${Theme.tertiaryColor};
        margin:10px;
        max-width: 30px;
    }




    @media only screen and (max-width: 600px) {
        .brand-header{
            margin-right: auto;

        }
  
    };
    `}
  </style>
<Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" >
  <Navbar.Brand>
      <Link to="/about us">
      <img
        src="mangu-logo.png"
        alt=" "
        width="80"
        height="80"
        className="d-inline-block align-top"
      />
      </Link>
    </Navbar.Brand>
    <Nav className="brand-header">
        <div >
            <h4  className="brand-name">MANG'U HIGH</h4>
            <br/>
            <p className="brand-jishinde">Jishinde Ushinde</p>
            </div>
    </Nav>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link  ><Link to="/home">Home</Link></Nav.Link>
    <Nav.Link  ><Link to="/about us">About Us</Link></Nav.Link>
      <Nav.Link  ><Link to="/enrollment">Enrollment</Link></Nav.Link>
      <Nav.Link ><Link to="/alumni">Alumni</Link></Nav.Link>
      <NavDropdown title="Community" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link to="/school governance">School Governance</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/staff directory">Staff Directory</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/students leadership">Students Leadership</Link></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link ><Link to="/contact us">Contact Us</Link></Nav.Link>
    </Nav>
    <Nav>
    <Nav.Item as="li">
    <a href="https://www.instagram.com/" target="_blank"><i className="fa fa-facebook nav-icon"/></a>
    </Nav.Item>
    <Nav.Item as="li">
    <a href="https://www.instagram.com/" target="_blank"><i className="fa fa-twitter nav-icon"/></a>
    </Nav.Item>
    <Nav.Item as="li" >
        <a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram nav-icon" /></a>
    </Nav.Item>

    </Nav>
  </Navbar.Collapse>
</Navbar> 
        </>
    )
}

export default Navigaton
