import React from 'react';
import Theme from '../Theme';
import NavIndicator from './NavIndicator';


//Bootstrap
import
 { Nav,Navbar,NavDropdown } 
from "react-bootstrap";

//React-router-dom
import { 
    Link,
    useLocation,
    } from 'react-router-dom';
  
//Styles
import '../App.css';

const Navigaton = () => {
  const location = useLocation();

  const shouldIndicatorShow = targetUrl => {
    if(targetUrl === "/leadership") {
      if(location.pathname.startsWith(targetUrl)) {
        return <NavIndicator/>
      }
    }
    if(targetUrl === location.pathname) {
      return <NavIndicator />
    }
  }
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
    <Nav.Item><Nav.Link eventKey="1" ><Link to="/">Home</Link></Nav.Link>
    {shouldIndicatorShow('/home')}
    </Nav.Item>
    <Nav.Item><Nav.Link  eventKey="2"><Link to="/about us">About Us</Link></Nav.Link>
    {shouldIndicatorShow('/about us')}
    </Nav.Item>
      <Nav.Item><Nav.Link eventKey="3" ><Link to="/enrollment">Enrollment</Link></Nav.Link>
      {shouldIndicatorShow('/enrollment')}
      </Nav.Item>
      <Nav.Item><Nav.Link eventKey="4"><Link to="/alumni">Alumni</Link></Nav.Link>
      {shouldIndicatorShow('/alumni')}
      </Nav.Item>
      <Nav.Item><Nav.Link eventKey="5"><Link to="/sports">Sports</Link></Nav.Link>
      {shouldIndicatorShow('/sports')}
      </Nav.Item>
      <Nav.Item>
      <NavDropdown title="Leadership" id="collasible-nav-dropdown">
        <NavDropdown.Item eventKey="6"><Link to="/leadership/school governance">School Governance</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="7"><Link to="/leadership/students leadership">Students Leadership</Link></NavDropdown.Item>
      </NavDropdown>
      {shouldIndicatorShow('/leadership')}
      </Nav.Item>
      <Nav.Item><Nav.Link eventKey="8"><Link to="/contact us">Contact Us</Link></Nav.Link>
      {shouldIndicatorShow('/contact us')}
      </Nav.Item>
    </Nav>
    <Nav>
    <Nav.Item as="li">
    <a href="https://m.facebook.com/profile.php?id=110372698991195" target="_blank" rel="noreferrer"><i className="fa fa-facebook nav-icon"/></a>
    </Nav.Item>
    <Nav.Item as="li">
    <a href="https://twitter.com/manguhighschool?lang=en" target="_blank" rel="noreferrer"><i className="fa fa-twitter nav-icon"/></a>
    </Nav.Item>
    <Nav.Item as="li" >
        <a href="https://www.instagram.com/explore/locations/24731883/mangu-high-school/" target="_blank" rel="noreferrer"><i className="fa fa-instagram nav-icon" /></a>
    </Nav.Item>

    </Nav>
  </Navbar.Collapse>
</Navbar> 
        </>
    )
}

export default Navigaton
