import {ButtonOuterContainer, ButtonContainer, ArrowIcon } from "./button.styles";

const Button = ({text}) => {
   return (
      <ButtonOuterContainer>
         <ButtonContainer>
            <span>{text}</span>
            <ArrowIcon/>
         </ButtonContainer>
      </ButtonOuterContainer>
   )
};

export default Button;