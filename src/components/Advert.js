import React from 'react'
import Theme from '../Theme'
import { MDBCol, MDBContainer, MDBRow,MDBBtn} from "mdbreact";

const Advert = () => {
    return (
        <>
        <style type="text/css">
        {`
        .covid-advert-container{
            background-color:${Theme.primaryColor};
            color:${Theme.tertiaryColor};
            min-height:150px;
            position:relative;
            padding:50px;
            font-family: 'Cantata One', serif;
                }
        .covid-advert{
            margin:100px;
            margin-top:0px;
            margin-bottom:0px;

        }
        .covid-button{
            background-color:${Theme.primaryColor3};
            color:${Theme.tertiaryColor};
            border:none;
            border-radius:0px;
        }
        .covid-button:hover{
            background-color:${Theme.secondaryColor};
            color:${Theme.primaryColor};
        }



        @media only screen and (max-width: 600px) {
            .covid-advert{
                margin:auto;
    
            }
      
        };

            `}
        </style>
        <MDBContainer fluid className="covid-advert-container">
            <MDBRow className="covid-advert">
                <MDBCol md="9">
                <h5>SEE IMPORTANT CHANGES AND DETAILS FOR THIS SCHOOL YEAR IN THE  COVID-19 REAOPENING PLAN.</h5>
                </MDBCol>
                <MDBCol md="3">
                <MDBBtn color="warning" className="covid-button"><a href="https://education.go.ke/images/COVID-19_GUIDELINES.pdf" target="_blank" rel="noreferrer">COVID-19 PLAN</a></MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </>
    )
}
export default Advert;
