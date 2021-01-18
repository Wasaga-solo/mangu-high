import React from 'react';

//Images
import Sport1 from '../images/rugby.jpg';
import Sport2 from '../images/mangu30.jpg';
import Sport3 from '../images/mangu16.jpg';
import Sport4 from '../images/sports4.jpg';
import Sport5 from '../images/sports5.jpg';
import Sport6 from '../images/sports6.jpg';
import Sport7 from '../images/sports7.jpg';
import Sport8 from '../images/sports8.jpg';
import Sport9 from '../images/sports9.jpg';


//MDBReact
import { MDBRow,MDBCol} from "mdbreact";

const SportsGallery = () => {
    
    return (
        <>
        <style type="text/css">
    {`
    .gallery{
        width:350px;
        height:250px;
        margin-left:0px;
    }
    .gallery-wrap{
        margin:10px;
    }

    @media only screen and (max-width: 600px) {
        .gallery{
            width:280px;
            height:200px;
            position:relative;
            left:-20px;
        }
        .gallery-wrap{
            margin:0px;
        }
    };

        `}
    </style>
        <MDBRow className="gallery-wrap">
            <MDBCol   md="4" sm="12">
            <img src={Sport1} className="gallery" alt="Sports"></img>  
            </MDBCol>
            <MDBCol  md="4" sm="12">
            <img src={Sport2} className="gallery" alt="Sports"></img>  
            </MDBCol>
            <MDBCol  md="4" sm="12">
            <img src={Sport3} className="gallery" alt="Sports"></img>  
            </MDBCol>
            <MDBCol md="4" sm="12">
            <img src={Sport4} className="gallery" alt="Sports"></img>  
            </MDBCol>
            <MDBCol  md="4" sm="12">
            <img src={Sport5} className="gallery" alt="Sports"></img>  
            </MDBCol>
            <MDBCol  md="4" sm="12">
            <img src={Sport6} className="gallery" alt="Sports"></img>  
            </MDBCol>
            <MDBCol  md="4" sm="12">
            <img src={Sport7} className="gallery" alt="Sports"></img>  
            </MDBCol>
            <MDBCol  md="4" sm="12">
            <img src={Sport8} className="gallery" alt="Sports"></img>  
            </MDBCol>
            <MDBCol  md="4" sm="12">
            <img src={Sport9} className="gallery" alt="Sports"></img>  
            </MDBCol>
        </MDBRow>
        </>
    )
}

export default SportsGallery
