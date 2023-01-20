import styled from 'styled-components';
import ScreenExit from '../exit/ScreenExit';
import HeaderExit from '../exit/HeaderExit';



function NewExitPage() {
    

    return (
      
        <ScreenContainer>
            
            <HeaderExit />
            <ScreenExit />
            
        </ScreenContainer>
      
    );
  }
  
  export default NewExitPage;
  
  const ScreenContainer = styled.div`
  background-color: #8C11BE;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  padding: 0px;
  `