import {ReactComponent as Icon} from '../../assets/right-arrow-svgrepo-com.svg';
import styled from "styled-components";

export const ButtonOuterContainer = styled.div`
   padding-bottom: .1rem;
   background-image: linear-gradient(to right, rgb(255, 133, 205), #a855ff, #222);
   cursor: pointer;
   transition: .7s ease;
   backface-visibility: hidden;

   &:hover {
      transform: scale(108%);
   }

   &:active {
      transform: translateY(.6rem);
   }
`;
   
export const ButtonContainer = styled.div`
   display: flex;
   padding: 1rem 2rem;
   height: 100%;
   width: 100%;
   background-color: #000;
   text-align: center;
   margin: auto 0;

   & span {
      font-size: 1.4rem;
      font-weight: 500;
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