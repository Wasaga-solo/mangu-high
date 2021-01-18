import React from 'react';
import Theme from '../Theme';

//Images
import Photo1 from '../images/mangu21.jpg';
import Photo2 from '../images/principle.png';


//Bootstrap
import
 { Carousel, } 
from "react-bootstrap";

//MDBReact
import {MDBRow,MDBCol} from "mdbreact";

const SchoolGovernance = () => {
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
        .history-container{
          background-color:${Theme.tertiaryColor};
          color:${Theme.primaryColor};
          position:relative;
          top:0px;
          padding:50px;
          font-family: 'Cantata One', serif;
      
      }
      .history-p{
          color:${Theme.primaryColor};
          font-family: 'Quicksand', serif;
      } 
    .about-container{
      position:relative;
      top:-80px;
    }
    .history-end{
      justify-content:center;
  } 
  .page-body{
    position:relative;
    top:0px;
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
            top:0px;
          }
          .slide-title-pages{
            font-size:25px;
            font-weight:bold;
          }
          .slide-text-pages{
            font-size:14px;
          }
          .leader{
            height:auto;
            position:relative;
            top:-100px;
          }
        
        };
        
          `}
        </style>
        <Carousel fluid className="carousel-wrap">
        <Carousel.Item>
        <img
        className="d-block w-100 carousel"
        src={Photo1}
        alt="Fourth slide"
        height="550"
        />
        </Carousel.Item>
        </Carousel>
        <div className="container page-body">
            <MDBRow className="history-end" >
            <MDBCol md="8" className="history-container about-container">
                <h3>Mr. Githuka John,School principle</h3>
                <p className="history-p">
                I am certainly delighted to be in Mang'u High School. Thank you so much for your warm reception.
                It is definitely exciting working with young boys and helping them realize their potential.
                Young people have a deep well of incredible potential. Teaching is therefore a relational occupation.
                We establish relations with these young boys as they go  through life .Let us not be asleep in a time
                of great revolution. Let us stay awake and make a difference in life. Let us aspire to be great. 
                Let us identify our uttermost purpose.Finally remember that hope is essential in life so let us maintain
                and develop our hopes for what matters most in life is not how we begin but rather how we finish
                <br/>
                Overall, education is the platform that makes it possible to defeat all barriers.
                In that respect, here are some powerful education quotes to help us appreciate the
                power of learning and gaining knowledge.Don’t forget to also check out of selection 
                of quotes about logic as well as these inspirational graduation quotes on success and dreams.
                </p>
              </MDBCol>
              <MDBCol md="4">
              <img
              className="d-block w-100 leader"
              src={Photo2}
              alt="History"
              height="300"
              />
              </MDBCol>
            </MDBRow>
            </div>
        </>
    )
}

export default SchoolGovernance;
