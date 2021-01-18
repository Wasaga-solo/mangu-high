import React from 'react';
import Theme from '../Theme';
import SportsGallery from '../components/SportsGallery';

//Images
import Pool from '../images/pool.png';


//Bootstrap
import
 { Carousel, } 
from "react-bootstrap";

//MDBReact
import { MDBRow,MDBContainer} from "mdbreact";

const Sports = () => {
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
        .register-advert-container{
          background-color:${Theme.tertiaryColor};
          color:${Theme.primaryColor};
          min-height:150px;
          position:relative;
          top:50px;
          padding:50px;
          font-family: 'Cantata One', serif;
          position:relative;
          top:-10px;
      
      }
      .enroll-container{
        position:relative;
        top:-100px;
      }
      .register-advert-p{
        color:${Theme.primaryColor};
        font-family: 'Quicksand', serif;
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
          .enroll-container{
            position:relative;
            top:0px;
          }
        
        };
        
          `}
        </style>
        <Carousel fluid className="carousel-wrap">
        <Carousel.Item>
        <img
        className="d-block w-100 carousel"
        src={Pool}
        alt="Fourth slide"
        height="550"
        />
        <Carousel.Caption className="carousel-caption-pages">
        <h1 className="slide-title-pages">School Swimming Pool</h1>
        <p className="slide-text-pages">The swimming pool where the swimming team trains.
        Every student has free access to the our modern swimming pool</p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        <MDBContainer fluid className="register-advert-container enroll-container">
    <div className="container">
            <MDBRow>
                <div>
                <h4>MANG'U OPENS</h4>
                <p className="register-advert-p">
                Annual Sports Day is an important event in the life of every school. Sports themselves have a vital role in making a child sound physically as well as mentally.

Mang'u open was held on 5th of November 2013. It was held in the playground of our school. Our Principal, Ms Githuka John was the chief guest.

The whole playground had been decorated with flags, buntings and balloons a day earlier.

The sports day began with a welcome speech by the Incharge of the Junior Wings, Ms Yousra followed by the March past by class V students.

The chief guest took the salute and then the oath ceremony was held. The event was followed by the hoisting of the flag by our esteemed chairman, Mr Vijay Dhar who declared the sports meet open.

Later a melodious song was sung by a group of students and then an entertaining umbrella dance by form IV students was performed. After that the form III students participated in 100 mtr race, filling the bucket and three legged race. The children who stood first were given medals.

Yoga and Formation of pyramids by form III students. Drill of dumb bells was done by form IV students followed by 100, 200, relay race and tug of war by the same class. The students were given the medals accordingly.

After that form II 100 meter, relay race and hurdles were done, followed by the medal ceremony of the events.

Popular House was declared the best house. An eye soothing ketchup dance was performed by the form II students. Lastly students presented the vote of thanks and declared the sports meet closed and it was over.
                </p>
                <br/>
                <h3>SPORTS GALLERY</h3>
                </div>
            </MDBRow>
            <MDBRow>
                <SportsGallery/>
            </MDBRow>
        </div>
</MDBContainer>
        </>
    )
}

export default Sports;
