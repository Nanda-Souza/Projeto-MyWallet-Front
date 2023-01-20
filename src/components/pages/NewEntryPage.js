import styled from 'styled-components';
import ScreenEntry from '../entry/ScreenEntry';
import HeaderEntry from '../entry/HeaderEntry';



function NewEntryPage() {
    

    return (
      
        <ScreenContainer>
            
            <HeaderEntry />
            <ScreenEntry />
            
        </ScreenContainer>
      
    );
  }
  
  export default NewEntryPage;
  
  const ScreenContainer = styled.div`
  background-color: #8C11BE;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  padding: 0px;
  `