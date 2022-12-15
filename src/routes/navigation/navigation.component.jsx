import { Outlet } from 'react-router-dom';
import {ReactComponent as PaystackLogo} from '../../assets/paystackLogo.svg';

import Button from '../../components/button/button.component';

import { NavigationContainer, NavigationLinksContainer, NavigationLink} from './navigation.styles';

const Navigation = () => {
   return (
      <>
         <NavigationContainer>
            <PaystackLogo/>
            <NavigationLinksContainer>
               <NavigationLink>Features</NavigationLink>
               <NavigationLink>Integration</NavigationLink>
               <NavigationLink>Testimonials</NavigationLink>
               <NavigationLink>Pricing</NavigationLink>
               <NavigationLink>FAQ</NavigationLink>
            </NavigationLinksContainer>
            <Button text={'Get your terminal'}/>
         </NavigationContainer>
         <Outlet/>
      </>
   )
}

export default Navigation;