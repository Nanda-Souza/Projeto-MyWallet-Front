import styled from 'styled-components';
import ScreenHome from '../home/ScreenHome';
import FooterHome from '../home/FooterHome';
import HeaderHome from '../home/HeaderHome';



function HomePage() {
    

    return (
      
        <ScreenContainer>
        
            <HeaderHome />
            <ScreenHome />
            <FooterHome />
            
        </ScreenContainer>
      
    );
  }
  
  export default HomePage;
  
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