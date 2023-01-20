import styled from 'styled-components';
import ScreenLogin from '../login/ScreenLogin';
import FooterLogin from '../login/FooterLogin';
import Logo from '../shared/Logo';


function LandingPage() {
    

    return (
      
        <ScreenContainer>
            
            <Logo />
            <ScreenLogin />
            <FooterLogin />
            
        </ScreenContainer>
      
    );
  }
  
  export default LandingPage;
  
  const ScreenContainer = styled.div`
  background-color: #8C11BE;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0px;
  padding: 0px;
  `