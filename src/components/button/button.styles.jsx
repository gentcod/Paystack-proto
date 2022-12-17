import {ReactComponent as Icon} from '../../assets/right-arrow-svgrepo-com.svg';
import styled from "styled-components";

export const ButtonContainer = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #000;
   border-radius: .9rem;
   transform: translateX(0);

   transition: .8s ease-in-out;
   backface-visibility: hidden;

   & span {
      font-size: 1.4rem;
      font-weight: 500;
      margin: auto 0;
   }
`;

export const ButtonOuterContainer = styled.div`
   height: ${({height}) => height};
   width: ${({width}) => width};
   text-align: center;
   padding: .1rem;
   background-image: linear-gradient(to right, rgb(255, 133, 205), #a855ff, #222);
   border-radius: 1rem;
   overflow: hidden;
   position: relative;

   cursor: pointer;
   transition: .7s ease;

   &:hover {
      transform: scale(108%);
   }

   &:hover > ${ButtonContainer} {
      background-color: transparent;
      // transform: translateX(100rem);
   }

   &:active {
      transform: translateY(.6rem);
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