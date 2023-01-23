import styled from "styled-components"
import axios from "axios";
import TokenContext from "../../contexts/TokenContext"
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header(){
    const { config, setToken } = useContext(TokenContext)
    const [ name, setName ] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const URL = "http://localhost:5001/name"

        const getUsername = async () => {
            const userName = await axios.get(URL, config)
            setName(userName.data)
            
        }
        
        getUsername().catch(console.error)
    }, [])

    function logout(){
        setToken("")
        navigate("/")

    }
    
    return (
        <HeaderHm>
            <p data-test="user-name" className= "textHeader">Olá, {name}</p>
            <button data-test="logout" onClick={logout}><img src="assets/iconTop.png" alt=""/></button>

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