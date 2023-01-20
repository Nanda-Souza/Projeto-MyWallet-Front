import styled from 'styled-components';
import ScreenRegister from '../register/ScreenRegister';
import FooterRegister from '../register/FooterRegister';
import Logo from '../shared/Logo';


function RegisterPage() {
    

    return (
      
        <ScreenContainer>
            
            <Logo />
            <ScreenRegister />
            <FooterRegister />

        </ScreenContainer>
      
    )}
  export default RegisterPage;
  
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