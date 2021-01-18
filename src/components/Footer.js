import React from "react";
import Theme from '../Theme'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

//React-router-dom
import { 
    Link,
    } from 'react-router-dom';
  

const Footer = () => {
  return (
      <>
    <style type="text/css">
    {`
    .brand-footer{
            color: ${Theme.primaryColor};
            font-family: 'Abril Fatface', serif;
            margin:30px;
        }
    .main-footer{
        background-color:${Theme.secondaryColor};
        font-family: 'Quicksand', serif;
        color: ${Theme.primaryColor};
    }
    .last-footer{
        background-color:${Theme.primaryColor}; 
        font-family: 'Domine', serif;
        color: ${Theme.tertiaryColor};

    }
    .foot-icon{
        margin:15px;
        cursor:pointer;
        color:${Theme.tertiaryColor};
        font-size:15px;
    }
    .foot-icon:hover{
        opacity:0.6;
    }
    .icon-span-fb{
        background-color:${Theme.primaryColor};
        border-radius:50%;
        margin:5px;
        padding-top:8px;
        padding-bottom:8px;
    }
    .icon-span-tw{
        background-color:${Theme.primaryColor};
        border-radius:50%;
        margin:5px;
        padding:0px;
        padding-top:8px;
        padding-bottom:8px;
    }
    .icon-span-ig{
        background-color:${Theme.primaryColor};
        border-radius:50%;
        margin:5px;
        padding:0px;
        padding-top:8px;
        padding-bottom:8px;
    }
    .foot-social-icons{
        margin:30px;
    }
    .contacts-list{
        margin:auto;
        position:relative;
        top:20px;
        left:-20px;
    }
    .links-list{
        margin:auto;
        position:relative;
        left:-20px;
    }
    .brand-contacts{
        font-family: 'Domine', serif;
        font-size:17px;
        margin-left:15px;
    }
    .brand-links{
        font-family: 'Domine', serif;
        font-size:17px;
        margin-left:15px;
        text-decoration:underline;
    }
    .brand-links:hover{
        padding-left:2px;
    }
    .my-name:hover{
        text-decoration:underline;
        opacity:0.8;
    }
    .foot-logo{
      background-color:${Theme.primaryColor};
      border-radius:4px 4px 10% 10%;
    }

    @media only screen and (max-width: 600px) {
        .brand-footer{
            margin: auto;

        }
        .contacts-list{
            margin:auto;
            top:40px;
            margin-bottom:40px;
        }
        .links-list{
            margin:auto;
            top:40px;
            margin-bottom:40px;
        }
  
    };

    `}
    </style>
    <MDBFooter className="font-small pt-4 mt-4 ">
      <MDBContainer fluid className="text-center text-md-left main-footer">
        <MDBRow>
          <MDBCol md="4">
          <div className="brand-footer">
            <h4  className="title brand-name">MANG'U HIGH</h4>
            <br/>
            <p className="brand-jishinde">Jishinde Ushinde</p>
            <img
            src="mangu-logo.png"
            alt=" "
            width="160"
            height="160"
            className="d-inline-block align-top foot-logo"
        />
            </div>

        <div className="foot-social-icons">
        <span className="icon-span-fb"><a href="https://m.facebook.com/profile.php?id=110372698991195" target="_blank"><i className="fa fa-facebook foot-icon" /></a></span>
        <span className="icon-span-tw"><a href="https://twitter.com/manguhighschool?lang=en" target="_blank"><i className="fa fa-twitter foot-icon" /></a></span>
        <span className="icon-span-ig"><a href="https://www.instagram.com/explore/locations/24731883/mangu-high-school/" target="_blank"><i className="fa fa-instagram foot-icon" /></a></span>
        </div>
          </MDBCol>
          <MDBCol md="4">
            <h4 className="title brand-name brand-footer">Contact Us</h4>
            <ul className="contacts-list">
              <li className="list-unstyled brand-contacts">
                <p>2021 Thika Road</p>
              </li>
              <li className="list-unstyled brand-contacts">
                <p>Mang'u High,LA 8113</p>
              </li>
              <li className="list-unstyled brand-contacts">
                <p>Phone:(+254)705971336</p>
              </li>
              <li className="list-unstyled brand-contacts">
                <p>Fax:(+254)705971336</p>
              </li>
            </ul>
          </MDBCol>
          <hr/>
          <MDBCol md="4">
            <h4 className="title brand-name brand-footer">Quick Links</h4>
            <ul className="links-list">
              <li className="list-unstyled brand-links">
                <Link to="/about us">About Us</Link>
              </li>
              <li className="list-unstyled brand-links">
                <Link to="/leadership/school governance">School Governance</Link>
              </li>
              <li className="list-unstyled brand-links">
                <Link to="/enrollment">Enrollment</Link>
              </li>
              <li className="list-unstyled brand-links">
                <Link to="/leadership/students leadership">Students Leadership</Link>
              </li>
              <li className="list-unstyled brand-links">
                <Link to="/sports">Sports</Link>
              </li>
              <li className="list-unstyled brand-links">
                <Link to="/alumni">Alumni</Link>
              </li>
              <li className="list-unstyled brand-links">
                <Link to="/contact us">Contact Us</Link>
              </li>
              <li className="list-unstyled brand-links">
                <Link to="/home">Home</Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 last-footer">
        <MDBContainer fluid>
          Mang'u High School | Jishinde Ushinde | 
          &copy; {new Date().getFullYear()} Copyright: Website by  <a href="https://github.com/Wasaga-solo?tab=repositories" target="_blank" className="my-name">WASAGA ELISHA COM/33/17</a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </>
  );
}

export default Footer;