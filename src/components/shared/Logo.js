import styled from "styled-components"

export default function Logo(){
    
    return (
        <LogoContainer>
            
            <img src="assets/MyWallet.png" />

        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 159px 0 20px 0;
    img {
        width: 147px;
    }
`