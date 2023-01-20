import styled from "styled-components"
import { Link } from "react-router-dom"

export default function FooterRegister(){
    
    return (
        <FooterReg>
   
        <Link to="/" style={{ color: '#FFFFFF' }}>
            <h1>Já tem uma conta? Entre agora!</h1>
        </Link>

        </FooterReg>
    )
}

const FooterReg = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0 20px 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    a {
    text-decoration: none;
    }
`