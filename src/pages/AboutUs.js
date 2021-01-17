import React from 'react';
import Theme from '../Theme';

//Images
import AboutUs1 from '../images/mangu19.jpg';
import History1 from '../images/mangu13.jpg';

//Bootstrap
import
 { Carousel,Card,Nav } 
from "react-bootstrap";

//MDBReact
import {MDBRow,MDBCol,MDBContainer,} from "mdbreact";

const MissionAndHistory = () => {

  const [currentCardDisplay, setCurrentCardDisplay] = React.useState("mission");

  const showCurrentCardDisplay = () => {
      switch(currentCardDisplay){
          case "mission":
              return (
                  <>
                  <Card.Title className="brand-cards">Our Mission</Card.Title>
                  <Card.Text className="card-p">
                  Mang'u High as a Centre for academically talented and needy boys aims at offering homely 
                  support and a holistic education founded on strong principles
                  such as discipline, multi-religious character formation and leadership development
                  </Card.Text>
                  </>
              );
          case "vision":
              return (
                  <>
                  <Card.Title className="brand-cards">Our Vision</Card.Title>
                  <Card.Text className="card-p">
                  To be a global Centre of excellence in youth development, effectively providing quality academic and leadership 
                  skills geared for the promotion of a just society founded on high moral principles
                  </Card.Text>
                  </>
              );
          case "motto":
              return (
                  <>
                  <Card.Title className="brand-cards">School motto</Card.Title>
                  <Card.Text className="card-p">
                  Jishinde Ushinde is a Kiswahili phrase meaning conquer yourself so that you may conquer the world around you. 
                  The motto reminds the students that the greatest competition that should be
                  waged is against one's own self (laziness, greed and selfishness) and not against other persons.
                  </Card.Text>
                  </>
              );
          case "core-values":
              return (
                  <>
                  <Card.Title className="brand-cards">Core-values</Card.Title>
                  <Card.Text className="card-p">
                  Our Focus is developing wholesome individuals whose lives revolve around our core values of:<br/>
                  1.Integrity<br/>
                  2.Leadership<br/>
                  3.Service
                  </Card.Text>
                  </>
              );
          default:
              return 0;
      }
  }

  const changeCurrentCardDisplay = newDisplay => {
      if(currentCardDisplay !== newDisplay) {
          setCurrentCardDisplay(newDisplay);
      }
  }
    return (
        <>
        <style type="text/css">
        {`
        .carousel{
          position:relative;
          top:-80px;
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
          top:0px;
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
  .card-p{
    color:${Theme.primaryColor};
    font-family: 'Quicksand', serif;
}
.card-p:hover{
    color:${Theme.primaryColor};
    font-family: 'Quicksand', serif;
}
.card-h{
  color:${Theme.tertiaryColor};
  font-family: 'Quicksand', serif;
  background-color:${Theme.primaryColor};
}
.card-wrap{
  background-color: ${Theme.secondaryColor};
  border:none;
  margin:5px;
  padding:5px;
  cursor:pointer;
}
.card-wrap2{
  position:relative;
  top:-96px;  
}
.card-wrap:hover{
  opacity:.9;
}
.brand-cards{
  color: ${Theme.primaryColor};
  font-family: 'Abril Fatface', serif;
}
.card-main-body{
  background-color:${Theme.tertiaryColor};
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
        
        };
        
          `}
        </style>
        <Carousel fluid className="carousel-wrap">
        <Carousel.Item>
        <img
        className="d-block w-100 carousel"
        src={AboutUs1}
        alt="About us"
        height="550"
        />
        </Carousel.Item>
        </Carousel>
        <MDBContainer fluid>
    <div className="container page-body">
            <MDBRow className="history-end" >
            <MDBCol md="8" className="history-container about-container">
                <h3>HISTORY</h3>
                <p className="history-p">
                Mang'u High School is a Kenyan Roman Catholic National High School established in 1925, 
                located in Kiambu County along the Nairobi-Thika Highway six kilometres from Thika, Kenya.
                Mang'u High School is ranked among the top schools nationwide in Kenya Certificate of Secondary
                Education and has many eminent alumni including one Kenyan president, several vice presidents,
                Central Bank of Kenya governor and a former Cardinal.
                <br/>
                In June 2011, the school was hit by a storm that damaged the kitchen and dining hall,
                knocking out the power supply for some time.
                Kenya Airways offered to pay the full amount for 40 computers to set up two computer labs:
                one for all students and one specifically for the Aviation Technology program..
                <br/>
                On 16 May 2011, The French ambassador to Kenya, Etienne de Poncins and the Ministry of Education, 
                launched a French Language Resource Centre at Mang’u High School.
                The School is also leading in the effort to go green by using Biogas energy. Effluent 
                from the institutions are collected in three different digester tanks and then piped over 3km
                to the gas chamber where the gas is collected. It is then used to power a generator that is used in the school.
                </p>
              </MDBCol>
              <MDBCol md="4">
              <img
              className="d-block w-100"
              src={History1}
              alt="History"
              height="300"
              />
              </MDBCol>
            </MDBRow>
            <MDBContainer>
<Card  className="card-wrap2">
  <Card.Header className="card-h" >
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link className="card-h" onClick={() => changeCurrentCardDisplay("mission")}>Mission</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="card-h" onClick={() => changeCurrentCardDisplay("vision")}>Vision</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="card-h" onClick={() => changeCurrentCardDisplay("motto")}>Motto</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="card-h" onClick={() => changeCurrentCardDisplay("core-values")}>Core-values</Nav.Link>
      </Nav.Item>

    </Nav>
  </Card.Header>
  <Card.Body className="card-main-body">
    {showCurrentCardDisplay()}
  </Card.Body>
</Card>
</MDBContainer>
        </div>
</MDBContainer>
        </>
    )
}

export default MissionAndHistory;
