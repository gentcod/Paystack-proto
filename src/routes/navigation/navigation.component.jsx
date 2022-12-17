import { Outlet } from 'react-router-dom';
import {ReactComponent as PaystackLogo} from '../../assets/paystackLogo.svg';

import Button from '../../components/button/button.component';

import { NavigationContainer, NavigationLinksContainer, NavigationLink, NavigationLinkActive} from './navigation.styles';

const Navigation = () => {
   return (
      <>
         <NavigationContainer>
            <PaystackLogo/>
            <NavigationLinksContainer>
               <NavigationLinkActive>Features</NavigationLinkActive>
               <NavigationLink>Integration</NavigationLink>
               <NavigationLink>Testimonials</NavigationLink>
               <NavigationLink>Pricing</NavigationLink>
               <NavigationLink>FAQ</NavigationLink>
            </NavigationLinksContainer>
            <Button text={'Get your terminal'} height='4rem' width='19.5rem'/>
         </NavigationContainer>
         <Outlet/>
      </>
   )
}

export default Navigation;