// certi.js

import React from 'react';
import styled from 'styled-components';
import { CertWrapper } from './CertifCss';

// import ScrollAnimation from "react-animate-on-scroll";

import a from "../../data/Certificates/image1.jpg"
import b from "../../data/Certificates/image5.jpg"
import c from "../../data/Certificates/image8.jpg"

import d from "../../data/Certificates/image6.jpg"
import e from "../../data/Certificates/image9.jpg"
import f from "../../data/Certificates/image7.jpg"

import g from "../../data/Certificates/image4.jpg"
import h from "../../data/Certificates/image2.jpg"
import i from "../../data/Certificates/image3.jpg"
import j from "../../data/Certificates/image10.jpg"




const certificates = [
  a,b,c,d,e,f,g,h,i,j

];



const CertificateGrid = () => {
  return (
    <CertWrapper id="about">
    {/* <ScrollAnimation animateIn="zoomIn"> */}
   <div className='Container'>
    <div className="SectionTitle">Certificates</div>
    <div className="BigCard">
    <GridContainer >
      
      {certificates.map((certificate, index) => (
        <CertificateItem key={index}>
          
         <CertificateImage src={certificate}/>
          
        </CertificateItem>
        
      ))}
      
    </GridContainer>
    </div>
    </div>
{/* </ScrollAnimation> */}
</CertWrapper>
  
  );
};

// const GridContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 4fr);
//   gap: 16px;
// `;


const CertificateItem = styled.div`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CertificateImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

// Additional styles can be included here if needed


export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  gap: 16px;
  max-width: 992px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  background-color: white;
  padding: 10px;
  margin: 10px;
  margin-left: auto; /* Center horizontally within the parent */
  margin-right: auto; /* Center horizontally within the parent */

  @media screen and (max-width: 992px) {
    max-width: 100%;
    /* You can add additional styles for smaller screens here */
  }
`;




export default CertificateGrid;
