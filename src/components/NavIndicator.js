import React from 'react';
import Theme from '../Theme';

const NavIndicator = () => {
    return (
        <>  
            <style type="text/css">{`
            .nav-indicator {
                position:relative;
                left:40%;
                width: 20%;
                height:2px;
                background-color: ${Theme.tertiaryColor};
                opacity:0.8;
                border-raius:50%;
            }
            @media only screen and (max-width: 600px) {
                .nav-indicator {
                    position:relative;
                    left:2%;
                    width: 20%;
                    height:2px;
                    background-color: ${Theme.tertiaryColor};
                    opacity:0.8;
                    border-raius:50%;
                }
              
              };
            `}</style>
            <div className="nav-indicator"></div>
        </>
    )
}

export default NavIndicator;
