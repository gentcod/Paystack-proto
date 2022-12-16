import {ButtonOuterContainer, ButtonContainer } from "./button-2.styles";

const Button2 = ({text}) => {
   return (
      <ButtonOuterContainer>
         <ButtonContainer>
            <span>{text}</span>
         </ButtonContainer>
      </ButtonOuterContainer>
   )
};

export default Button2;