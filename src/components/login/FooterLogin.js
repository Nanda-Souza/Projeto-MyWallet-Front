import styled from "styled-components"
import { Link } from "react-router-dom"

export default function FooterLogin(){
    
    return (
        <FooterLog>
   
        <Link to="/cadastro" style={{ color: '#FFFFFF' }}>
            <h1>Primeira vez? Cadastre-se!</h1>
        </Link>

        </FooterLog>
    )
}

const FooterLog = styled.div`
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