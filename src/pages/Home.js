import React from 'react';
import Theme from '../Theme';

//Images
import HomeSlide1 from '../images/home-slide1.jpg';
import HomeSlide2 from '../images/home-slide2.jpg';
import HomeSlide3 from '../images/home-slide3.jpg';
import HomeSlide4 from '../images/home-slide4.jpg';
import HomeSlide5 from '../images/home-slide5.jpg';
import HomeSlide6 from '../images/home-slide6.jpg';

//Bootstrap
import
 { Carousel,Card,CardGroup,Nav,} 
from "react-bootstrap";

//MDBReact
import { MDBContainer, MDBRow,MDBBtn,Link,} from "mdbreact";

const Home = () => {

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
        .carousel-caption{
            position:absolute;
            top:20%;
            font-family: 'Cantata One', serif;
        }
        .slide-title{
            font-size:60px;
            font-weight:bold;
        }
        .slide-text{
            font-size:30px;
        }
        .slide-buttons{
            background-color:${Theme.secondaryColor};
            border:none;
            border-radius:0px;
            opacity:1;
            height:40px;

        }
        .slide-buttons:hover{
            background-color:${Theme.primaryColor};
            opacity:0.9;
            color:${Theme.primaryColor};
        }
        .slide-button-link{
            font-family: 'Cantata One', serif;
            color:${Theme.primaryColor};
            padding:2px;
        }
        .carousel-captionlg{
            color:${Theme.tertiaryColor};
        }
        .register-advert-container{
            background-color:${Theme.secondaryColor};
            color:${Theme.primaryColor};
            min-height:150px;
            position:relative;
            top:50px;
            padding:50px;
            font-family: 'Cantata One', serif;
            position:relative;
            top:-10px;

        }
        .register-advert-p{
            background-color:${Theme.secondaryColor};
            color:${Theme.primaryColor};
            font-family: 'Quicksand', serif;
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
        .brand-cards{
            color: ${Theme.primaryColor};
            font-family: 'Abril Fatface', serif;
        }




        @media only screen and (max-width: 600px) {
            .carousel-caption{
                position:absolute;
                top:200px;
                left:0px;
                font-family: 'Cantata One', serif;
                background-color:${Theme.primaryColor};
                width:100%;
                height:265px;
            }
            .slide-title{
                font-size:30px;
                font-weight:bold;
            }
            .slide-text{
                font-size:18px;
            }
            .slide-buttons{
                background-color:${Theme.secondaryColor};
            }
            .slide-button-link{
                font-family: 'Cantata One', serif;
                color:${Theme.primaryColor};
                padding:2px;
            }
            .carousel{
                height:200px;
            }
            .carousel-wrap{
                height:465px;
            }
            .carousel-control-next-icon,.carousel-control-prev-icon{
                position:relative;
                top:-120px;
            }
            .register-advert{
                margin:auto;
    
            }
            .register-end{
                justify-content:center;
            } 
      
        };

            `}
        </style>
<Carousel fluid className="carousel-wrap">
  <Carousel.Item>
    <img
      className="d-block w-100 carousel"
      src={HomeSlide1}
      alt="First slide"
      height="550"
    />
    <Carousel.Caption className="carousel-captionlg">
      <h1 className="slide-title">Mang'u High School</h1>
      <p className="slide-text">President Uhuru Kenyatta greeting student leaders during his last visit to the school</p>
      <MDBBtn color="warning" className="slide-buttons">
          <Link to="/" className="slide-button-link" >SEE MORE</Link>
          </MDBBtn>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel"
      src={HomeSlide2}
      alt="Second slide"
      height="550"
    />
    

    <Carousel.Caption className="carousel-captionlg">
      <h1 className="slide-title">President Uhuru Kenyatta</h1>
      <p className="slide-text">Alongside other leaders greeting the top student.</p>
      <MDBBtn color="warning" className="slide-buttons">
          <Link to="/" className="slide-button-link" >SEE MORE</Link>
        </MDBBtn>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel"
      src={HomeSlide3}
      alt="Third slide"
      height="550"
    />

    <Carousel.Caption  className="carousel-captionlg">
      <h1 className="slide-title">Administration Block</h1>
      <p className="slide-text">This was launched in 2015 by the BOG team</p>
      <MDBBtn color="warning" className="slide-buttons">
          <Link to="/" className="slide-button-link" >SEE MORE</Link>
      </MDBBtn>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel"
      src={HomeSlide4}
      alt="Fourth slide"
      height="550"
    />
    <Carousel.Caption className="carousel-captionlg">
      <h1 className="slide-title">Mang'u High School</h1>
      <p className="slide-text">Form Ones and Twos on our anual career day.</p>
      <MDBBtn color="warning" className="slide-buttons">
          <Link to="/" className="slide-button-link" >SEE MORE</Link>
      </MDBBtn>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel"
      src={HomeSlide5}
      alt="Fifth slide"
      height="550"
    />

    <Carousel.Caption className="carousel-captionlg">
      <h1 className="slide-title">The School President</h1>
      <p className="slide-text">Giving a special speech during the prize giving ceremony in 2018.</p>
      <MDBBtn color="warning" className="slide-buttons">
          <Link to="/" className="slide-button-link" >SEE MORE</Link>
      </MDBBtn>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel"
      src={HomeSlide6}
      alt="Sixth slide"
      height="550"
    />

    <Carousel.Caption className="carousel-captionlg">
      <h1 className="slide-title">Mang'u High School Amphitheatre</h1>
      <p className="slide-text">That has a capacity of more than 3000 people..</p>
      <MDBBtn color="warning" className="slide-buttons">
          <Link to="/"className="slide-button-link" >SEE MORE</Link>
      </MDBBtn>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<MDBContainer fluid className="register-advert-container">
    <div className="container">
            <MDBRow>
                <div>
                <h4>VIRTUAL OPEN HOUSE FOR PROSPECTIVE STUDENTS</h4><br/>
                <h6>REGISTRATION & VIRTUAL VISIT</h6>
                <p className="register-advert-p">
                Families interested in attending a virtual open house for prospective students must register to gain
                access. Complete the registration form to gain access for your family to learn more about our community.
                The virtual open house for prospective students will allow prospective families and students an opportunity
                to explore education as a Chambered Nautilus at Mang'u High School.
                </p>
                </div>
            </MDBRow>
            <MDBRow md="3" className="register-end" >
                <MDBBtn color="warning" className="register-end register-button"><Link className="register-button-link"  to="/join our team">REGISTER</Link></MDBBtn>
            </MDBRow>
        </div>
</MDBContainer>
<MDBContainer>
<CardGroup>
  <Card className="card-wrap">
    <Card.Img variant="top" src={HomeSlide5} />
    <Card.Body>
      <Card.Title className="brand-cards">Our History</Card.Title>
      <Card.Text className="card-p">
      Mang'u High School is a Kenyan Roman Catholic National High School established in 1925,
      located in Kiambu County along the Nairobi-Thika Highway six kilometres from Thika,
      Kenya. Mang'u High School is ranked among the top schools nationwide in Kenya Certificate
       of Secondary Education[1] and has many eminent alumni including one Kenyan president, 
       several vice presidents, Central Bank of Kenya governor and a former Cardinal..
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card-wrap">
    <Card.Img variant="top" src={HomeSlide1} />
    <Card.Body>
      <Card.Title className="brand-cards">Admission</Card.Title>
      <Card.Text className="card-p">
      The school is highly selective, with only the top performing students in the Kenya Certificate of 
      Primary Education offered admission. Once offered admission, students must submit a letter of introduction
      from either the chief of their area, the pastor or father in charge of their parish/mission and a letter from
      their primary school headmaster. This is to ensure only disciplined students are admitted to maintain the 
      standards of the school.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card-wrap">
    <Card.Img variant="top" src={HomeSlide4} />
    <Card.Body>
      <Card.Title className="brand-cards">Academics</Card.Title>
      <Card.Text className="card-p">
      Mang'u has constantly produced top scholars across Kenya and the world at large.
      The School, for a long time, has been ranked among the best and top performing schools in Kenya.
      We have stand out not only in Academia but also in co-curricular activities.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card-wrap">
      <Card>
      <iframe title="youtube" width="auto" height="200"
       src="https://www.youtube.com/embed/_wAQI_lgcIk">
     </iframe>
      </Card>
    <Card.Body>
      <Card.Title className="brand-cards">School Documentary</Card.Title>
      <Card.Text className="card-p">
      Check out the simple documentary of Mang'u High School here. This gives a brief overview of who we are.
      Whilst we aim to ensure every child reaches their full potential academically,
      they are also taught that they can be successful in many different ways.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
</MDBContainer>
<MDBContainer>
<Card  className="card-wrap2">
  <Card.Header className="card-h">
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

        </>
    )
}

export default Home;