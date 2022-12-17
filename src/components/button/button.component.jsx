import {ButtonOuterContainer, ButtonContainer, ArrowIcon } from "./button.styles";

const Button = ({text, height, width}) => {
   return (
      <ButtonOuterContainer height={height} width={width}>
         <ButtonContainer>
            <span>{text}</span>
            <ArrowIcon/>
         </ButtonContainer>
      </ButtonOuterContainer>
   )
};

export default Button;