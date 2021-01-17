import React from 'react';
import Theme from '../Theme';

//Images
import HomeSlide4 from '../images/home-slide4.jpg';


//Bootstrap
import
 { Carousel, } 
from "react-bootstrap";

//MDBReact
import { MDBBtn,Link, MDBContainer} from "mdbreact";

const Alumni = () => {
    return (
        <>
        <style type="text/css">
        {`
        .carousel{
          position:relative;
          top:-100px;
          height:700px;
        }
        .carousel-indicators{
          display:none;
        }
        .carousel-wrap{
          height:400px;
        }
        .carousel-control-next-icon,.carousel-control-prev-icon{
          display:none;
          position:relative;
          top:-120px;
        }
        .page-body{
          position:relative;
          top:-150px;
        }
        .carousel-caption-pages{
          position:absolute;
          top:20%;
          font-family: 'Cantata One', serif;
        }
        .slide-title-pages{
          font-size:40px;
          font-weight:bold;
        }
        .slide-text-pages{
          font-size:20px;
        }
        
        
        
        
        
        
        
        @media only screen and (max-width: 600px) {
          .carousel{
              height:200px;
              top:0px;
          }
          .carousel-caption-pages{
            position:absolute;
            top:0px;
            font-family: 'Cantata One', serif;
          }
          .carousel-wrap{
              height:200px;
          }
          .page-body{
            position:relative;
            top:-50px;
          }
          .slide-title-pages{
            font-size:25px;
            font-weight:bold;
          }
          .slide-text-pages{
            font-size:14px;
          }
        
        };
        
          `}
        </style>
        <Carousel fluid className="carousel-wrap">
        <Carousel.Item>
        <img
        className="d-block w-100 carousel"
        src={HomeSlide4}
        alt="Fourth slide"
        height="550"
        />
        <Carousel.Caption className="carousel-caption-pages">
        <h1 className="slide-title-pages">Mang'u High School</h1>
        <p className="slide-text-pages">Form Ones Registration and Orientation during the anual January intake in 2019.</p>
        {/* <MDBBtn color="warning" className="slide-buttons">
        <Link to="/home" className="slide-button-link" >SEE MORE</Link>
        </MDBBtn> */}
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        <MDBContainer>
        </MDBContainer>
        </>
    )
}

export default Alumni;
