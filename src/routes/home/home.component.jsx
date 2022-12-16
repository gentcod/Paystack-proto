import { ReactComponent as POSImage} from '../../assets/posImage.svg';

import Button from '../../components/button/button.component';
import Button2 from '../../components/button-2/button-2.component';

import KudaLogo from '../../assets/kudaLogo.svg'
import BurgerKingLogo from '../../assets/burgerKing.svg';
import TixAfricaLogo from '../../assets/tixAfrica.svg';
import IPNXLogo from '../../assets/ipnx.svg';

import { HomeContainer, HomeLeftSide, HomeRightSide, HomeHeading, HomeDesc, HomeButtonsContainer, HomeSponsorsContainer, SponsorLogo } from './home.styles';

const data = {
   heading: 'Create delightful, in-person payment experiences',
   description: 'Paystack terminal helps modern teams in Africa build custom, delightful in-person payment experiences that keeps customers coming back'
}

const Home = () => {
   return (
      <HomeContainer>
         <HomeLeftSide>
            <POSImage/>
         </HomeLeftSide>
         <HomeRightSide>
            <HomeHeading>{data.heading}</HomeHeading>
            <HomeDesc>{data.description}</HomeDesc>
            <HomeButtonsContainer>
               <Button text={'Get your terminal'}/>
               <Button2 text={'Contact sales'}/>
            </HomeButtonsContainer>
            <HomeSponsorsContainer>
               {/* <KudaLogo/> */}
               <SponsorLogo src={KudaLogo}/>
               <SponsorLogo src={BurgerKingLogo}/>
               <SponsorLogo src={TixAfricaLogo}/>
               <SponsorLogo src={IPNXLogo}/>
            </HomeSponsorsContainer>
         </HomeRightSide>
      </HomeContainer>
   )
};

export default Home;