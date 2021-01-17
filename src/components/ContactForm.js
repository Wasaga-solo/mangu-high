import React from "react";
import Theme from '../Theme';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput,Link } from "mdbreact";

const ContactForm = () => {
  return (
    <>
    <style type="text/css">
    {`
      .contact-container{
        position:relative;
        color:${Theme.primaryColor};
      }
      .contact-head{
        color:${Theme.primaryColor};
        font-family: 'Cantata One', serif;
      }
      .contact-button{
        background-color:${Theme.primaryColor3};
        border:none;
        border-radius:0px;
        height:40px;
        font-family: 'Cantata One', serif;
        color:${Theme.tertiaryColor};
    
    }
    .contact-button:hover{
        background-color:${Theme.primaryColor};
        color:${Theme.tertiaryColor};
    }
    .contact-button-link{
      font-family: 'Cantata One', serif;
      color:${Theme.tertiaryColor};
      padding:2px;
  }
  .contact-button-link:hover{
    color:${Theme.tertiaryColor};
}
    
    
    
    
    
    
    @media only screen and (max-width: 600px) {
    
    };
    
      `}
    </style>
    <div className="container contact-container">
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5 contact-head">
        Contact Us
      </h2>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <div className="md-form">
                <MDBInput
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="text-center">
                <MDBBtn className="contact-button"><Link className="contact-button-link">SUBMIT</Link></MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15956.48653058328!2d37.047278!3d-1.070746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x849bc00dffb03c40!2sMangu%20high%20school!5e0!3m2!1sen!2ske!4v1610617189826!5m2!1sen!2ske"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border:0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker" />
              </MDBBtn>
              <p>Thika-Mang'u Road,</p>
              <p className="mb-md-0">Kenya</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+254 7059 71336</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>Mang'uhigh@gmail.com</p>
              <p className="mb-md-0">wasagaelisha8@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
    </div>
    </>
  );
}

export default ContactForm;