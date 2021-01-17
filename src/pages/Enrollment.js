import React from 'react';
import Theme from '../Theme';

//Images
import HomeSlide4 from '../images/home-slide4.jpg';
import Enrollment1 from '../images/mangu15.jpg';


//Bootstrap
import
 { Carousel,Form,Button} 
from "react-bootstrap";

//MDBReact
import { MDBBtn,Link,MDBContainer,MDBRow, MDBCol} from "mdbreact";

const Enrollment = () => {
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
    top:50px;
    padding:50px;
    font-family: 'Cantata One', serif;
    position:relative;
    top:-10px;

}
.register-advert-p{
    color:${Theme.primaryColor};
    font-family: 'Quicksand', serif;
}
.card-p{
    color:${Theme.primaryColor};
    font-family: 'Quicksand', serif;
}
.card-p:hover{
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
.enroll-container{
  position:relative;
  top:-100px;
}
.prospective-container{
  background-color:${Theme.tertiaryColor};
  color:${Theme.primaryColor};
  min-height:150px;
  position:relative;
  top:50px;
  padding:50px;
  font-family: 'Cantata One', serif;
  position:relative;
  top:-100px;
}
.enroll-submit{
    background-color:${Theme.primaryColor3};
    border:none;
    border-radius:0px;
    height:40px;
    font-family: 'Cantata One', serif;
    color:${Theme.tertiaryColor};
}
.enroll-submit:hover{
  background-color:${Theme.primaryColor};
  color:${Theme.tertiaryColor};
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
    .enroll-image{
      display:none;

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
  <MDBContainer fluid className="register-advert-container enroll-container">
    <div className="container">
            <MDBRow>
                <div>
                <h3>ENROLLMENT GUIDE</h3><br/>
                <p className="register-advert-p">
                The school is highly selective, with only the top performing students in the Kenya Certificate of Primary Education offered admission.
                Once offered admission, students must submit a letter of introduction from either the chief of their area,
                the pastor or father in charge of their parish/mission and a letter from their primary school headmaster.
                This is to ensure only disciplined students are admitted to maintain the standards of the school.
                <br/>
                There has been controversy in the past where powerful politicians secure a place for their children though they did not perform well.
                In 2001, the students went on strike to protest the forced transfer of Principal Paul Agali Otula after he refused to admit the son of
                a government official.[8] The school admits students from both public and private schools in a quota system to ensure that top students
                from every county are admitted. The school applies an 
                affirmative action policy to ensure marginalized students from hardship semi-arid areas are given a chance.
                </p>
                </div>
            </MDBRow>
            <MDBRow md="3" className="register-end" >
                <MDBBtn className="register-end register-button"><Link className="register-button-link"  to="/join our team">REGISTER</Link></MDBBtn>
            </MDBRow>
        </div>
</MDBContainer>
<MDBContainer fluid className="prospective-container">
    <div className="container">
            <MDBRow>
              <MDBCol>
                <MDBRow>
              <div>
                <h3>PROSPECTIVE STUDENTS</h3><br/>
                <p className="register-advert-p">
                There’s no better way to understand the Mang'u High experience than by meeting our faculty and students firsthand.
                At this time, we are not currently hosting tours due to COVID-19. We will reopen this link when tours are avaliable
                again. Please use the form below to get a notification for when tours return
                </p>
                </div>
                </MDBRow>
                <MDBRow>
                <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Save your details for this site?" />
                </Form.Group>
                <Button variant="primary" type="submit" className="enroll-submit">
                  SUBMIT
                </Button>
              </Form>
                </MDBRow>
              </MDBCol>
              <MDBCol className="enroll-image">
              <img
              className="d-block w-100 enroll-image"
              src={Enrollment1}
              alt="Enrollment1"
              height="500"
              />
              </MDBCol>

            </MDBRow>
        </div>
</MDBContainer>
  </>
    )
}

export default Enrollment;
