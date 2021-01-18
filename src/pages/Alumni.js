import React from 'react';
import Theme from '../Theme';

//Images
import Alumni1 from '../images/mangu25.jpg';
import Elisha from '../images/elisha.png';
import Kibaki from '../images/kibaki.jpg';
import Kimathi from '../images/kimathi.jpg';
import Otunga from '../images/otunga.gif';
import Ngala from '../images/ngala.jpg';
import Mboya from '../images/mboya.jpg';

//Bootstrap
import
 { Carousel,Card,CardGroup } 
from "react-bootstrap";

//MDBReact
import { MDBBtn,Link, MDBContainer,MDBRow,} from "mdbreact";

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
        .register-advert-container{
          background-color:${Theme.secondaryColor};
          color:${Theme.primaryColor};
          min-height:150px;
          position:relative;
          padding:50px;
          font-family: 'Cantata One', serif;
          top:-100px;
      
      }
      .register-advert-p{
        color:${Theme.primaryColor};
        font-family: 'Quicksand', serif;
    }
    .register-button-link{
      font-family: 'Cantata One', serif;
      color:${Theme.tertiaryColor};
      padding:2px;
  }
  .register-button-link:hover{
      color:${Theme.tertiaryColor};
  }
  .register-button{
      background-color:${Theme.primaryColor3};
      border:none;
      border-radius:0px;
      height:40px;
  
  }
  .register-button:hover{
      background-color:${Theme.primaryColor};
  }
  .register-end{
      justify-content:flex-end;
  } 
  .card-p{
    color:${Theme.primaryColor};
    font-family: 'Quicksand', serif;
}
.card-h{
  color:${Theme.tertiaryColor};
  font-family: 'Quicksand', serif;
  background-color:${Theme.primaryColor};
}
.card-p:hover{
    color:${Theme.primaryColor};
    font-family: 'Quicksand', serif;
}
.card-wrap{
  background-color: ${Theme.secondaryColor};
  border:none;
  margin:5px;
  padding:5px;
  cursor:pointer;
}
.card-wrap2{
  margin:5px;   
}
.card-wrap:hover{
  opacity:.9;
}
.card-main-body{
background-color:${Theme.tertiaryColor};
}
.brand-cards{
  color: ${Theme.primaryColor};
  font-family: 'Abril Fatface', serif;
}
.alumni-testimonials{
  position:relative;
  top:-100px;
}   
        
        
        
        
        
        
        @media only screen and (max-width: 600px) {
          .carousel{
              height:200px;
              top:0px;
          }
          .carousel-caption-pages{
            position:absolute;
            top:10pxpx;
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
          .register-advert-container{
            top:0px;
        
        }
        
        };
        
          `}
        </style>
        <Carousel fluid className="carousel-wrap">
        <Carousel.Item>
        <img
        className="d-block w-100 carousel"
        src={Alumni1}
        alt="Fourth slide"
        height="550"
        />
        <Carousel.Caption className="carousel-caption-pages">
        <h1 className="slide-title-pages">Mang'u Alumin Association</h1>
        <p className="slide-text-pages">During a fundraiser for the school chapel</p>
        {/* <MDBBtn color="warning" className="slide-buttons">
        <Link to="/home" className="slide-button-link" >SEE MORE</Link>
        </MDBBtn> */}
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        <MDBContainer fluid className="register-advert-container enroll-container">
    <div className="container">
            <MDBRow>
                <div>
                <h4>MANG'U HIGH SCHOOL ALUMNI ASSOCIATION</h4><br/>
                <p className="register-advert-p">
                Mang’u High School is a school that has made a tremendous contribution to Kenya’s history.
                The school boasts of a high profile of many successful alumni among them politicians,
                lawyers, businessmen, clergymen, scientists, engineers, doctors, and pilots.
                <br/>
                In recent times the school has continued to produce great achievers, some of whom have
                been ranked in the top ten nationally in the KCSE exams. Past students have
                been admitted into top schools in the US, UK, and Australia including Yale and Harvard.                </p>
                </div>
            </MDBRow>
            <MDBRow md="3" className="register-end" >
                <MDBBtn className="register-end register-button"><Link className="register-button-link"  to="/contact us">REGISTER</Link></MDBBtn>
            </MDBRow>
        </div>
</MDBContainer>
<MDBContainer className="alumni-testimonials">
<CardGroup>
  <Card className="card-wrap">
    <Card.Img variant="top" src={Elisha} />
    <Card.Body>
      <Card.Title className="brand-cards">Wasaga Elisha</Card.Title>
      <Card.Text className="card-p">
      The learning process continues until the day you die
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card-wrap">
    <Card.Img variant="top" src={Kibaki} />
    <Card.Body>
      <Card.Title className="brand-cards">Mwai Kibaki</Card.Title>
      <Card.Text className="card-p">
      Education is one of the most powerful things in life. It allows us to find the meaning behind 
      everything and helps improve lives in a massive way.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card-wrap">
    <Card.Img variant="top" src={Mboya} />
    <Card.Body>
      <Card.Title className="brand-cards">Tom Mboya</Card.Title>
      <Card.Text className="card-p">
      Overall, education is the platform that makes it possible to defeat all barriers.
      In that respect, here are some powerful education quotes to help us appreciate the
      power of learning and gaining knowledge.Don’t forget to also check out of selection 
      of quotes about logic as well as these inspirational graduation quotes on success and dreams.
      </Card.Text>
    </Card.Body>
  </Card>
  <br/>
  </CardGroup>
  <CardGroup>
  <Card className="card-wrap">
    <Card.Img variant="top" src={Kimathi} />
    <Card.Body>
      <Card.Title className="brand-cards">Dedan Kimathi</Card.Title>
      <Card.Text className="card-p">
      Education without values, as useful as it is, seems rather to make man a more clever devil
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card-wrap">
    <Card.Img variant="top" src={Ngala} />
    <Card.Body>
      <Card.Title className="brand-cards">Ronald Ngala</Card.Title>
      <Card.Text className="card-p">
      The more that you read, the more things you will know, the more that you learn, the more places you’ll go
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card-wrap">
    <Card.Img variant="top" src={Otunga} />
    <Card.Body>
      <Card.Title className="brand-cards">Cardinal Otunga</Card.Title>
      <Card.Text className="card-p">
      Education is what remains after one has forgotten what one has learned in school.
      </Card.Text>
    </Card.Body>
  </Card>
  <br/>
  </CardGroup>
  </MDBContainer>
        </>
    )
}

export default Alumni;
