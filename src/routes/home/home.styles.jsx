import styled from "styled-components";

export const HomeContainer = styled.div`
   width: 100%;
   height: 100%;
   padding: 2rem 8rem;
   display: flex;
   backface-visibility: hidden;
`;

export const HomeLeftSide = styled.div`
   width: 100%;
`;

export const HomeRightSide = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   padding: 8rem;
   gap: 5rem;
   backface-visibility: hidden;
`;

export const HomeHeading = styled.h1`
   font-family: 'Inter', sans-serif;
   font-size: 4.8rem;
   font-weight: 1000;
   text-align: left;
   margin-top: 5rem;
`;

export const HomeDesc = styled.p`
   font-family: 'Inter', sans-serif;
   font-size: 1.6rem;
   text-align: left;
   width: 90%;
`;

export const HomeButtonsContainer = styled.div`
   display: flex;
   justify-content: flex-begin;
   gap: 10rem;
   backface-visibility: hidden;
`;

export const HomeSponsorsContainer = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 5rem;
`;

export const SponsorLogo = styled.img`

`;