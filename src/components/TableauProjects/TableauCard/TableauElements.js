import styled from "@emotion/styled";

export const Card = styled.div`
display: flex;
flex-direction: row;
gap:5px;
// background-color: #F7E7CE;
justify-content: center;
align-items: center;
text-align: center;
margin-bottom: 4rem;
padding: 2rem;
border-radius: 10px;
box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1),
  0 4px 6px -2px rgba(0, 0, 0, 0.05);

@media (min-width: 992px) {
  flex-direction: row; /* Adjust to row layout on larger screens */
}
`;



export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px; /* Adjust the gap as needed */

  img {
    border: 3px solid #FCFBF4;
    box-shadow: 0px 2px 5px rgba(160, 170, 180, 0.6);
    max-width: 100%; /* Ensure the image doesn't exceed its container */
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    justify-content: 
  }

  BtnGroup {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px; /* Adjust the gap as needed */
  }

  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;


export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

