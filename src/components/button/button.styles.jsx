import {ReactComponent as Icon} from '../../assets/right-arrow.svg';
import styled from "styled-components";

export const ButtonOuterContainer = styled.div`
   padding: .1rem;
   background-image: linear-gradient(to right, rgb(255, 133, 205), #a855ff);
   border-radius: 1rem;
`;
   
export const ButtonContainer = styled.div`
   display: flex;
   padding: 1rem 2rem;
   height: 100%;
   background-color: #000;
   border-radius: 1rem;
   text-align: center;
   margin: auto 0;

   & span {
      font-size: 1.4rem;
      margin: auto 0;
   } 
`;

export const ArrowIcon = styled(Icon)`
   fill: #fff;
   width: 1.4rem;
   height: auto;
   margin: auto 0;
   margin-left: 1rem;
   font-weight: 700;
`;