import styled from "styled-components"

export default function Header(){
    
    return (
        <HeaderHm>
            <p data-test="user-name" className= "textHeader">Olá, Fulano</p>
            <button data-test="logout"><img src="assets/iconTop.png" alt=""/></button>

        </HeaderHm>
    )
}

const HeaderHm = styled.div`
    width: 100%;
    height: 70px;
    background-color: #8C11BE;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    color: #FFFFFF;
    padding: 10px;
    p{
        display: flex;
        justify-content: center;
        align-items:center;
        margin-left: 20px;
    }
    button{
        background-color: #8C11BE;
        border: none;
    }
    img {
        width: 24px;
        height: 24px;
        margin-right: 16px;
    }
  `