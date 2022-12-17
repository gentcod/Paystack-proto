import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PaystackLogo = styled.img`

`;

export const NavigationContainer = styled.div`
   display: flex;
   width: 100%;
   padding: 1.5rem 3rem;
   justify-content: space-between;

`;

export const NavigationLinksContainer = styled.div`
   display: flex;
`;

export const NavigationLink = styled(Link)`
   width: 100%;
   height: 5rem;
   padding: 1rem 1.5rem;
   text-transform: uppercase;
   font-size: 1.2rem;
   font-weight: 700;
   color: #797979;
   transition: .3s;

   &:hover {
      color: #fff;
   }
`;

export const NavigationLinkActive = styled(NavigationLink)`
   color: #fff;
`