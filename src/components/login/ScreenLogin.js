import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function ScreenLogin(){
    const [loading, setLoading] = useState(false)    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")    
    const navigate = useNavigate()

const sendLogin = async (e) => {
        e.preventDefault()
    
        const loginData = {email, password}
        setLoading(true)
    
        try{    
    
        const logingPost = await axios.post("http://localhost:5001/sign-in", loginData)
        console.log(logingPost)
        } catch (err){
            if (err.response?.status === 400){
                alert("Email ou senha incorretos!")
            } else {
                alert("Não foi possível fazer o cadastro, favor tentar novamente mais tarde!")
            }        
            setLoading(false)
            return;
        }    
        setLoading(false)        
        navigate("/")
        
        
    
    }

    return (

<form onSubmit={sendLogin}>
    <InputLogin>

        <InputLista>
            <input
                 data-test="email"
                 type="email"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                 placeholder="E-mail"
                 required
                 disabled={loading}
                />

            <input
                 data-test="password"
                 type="password" 
                 value={password}
                 onChange={e => setPassword(e.target.value)}
                 placeholder="Senha"
                 required
                 disabled={loading}
                />


            <LogIn isLoading={loading} >
            {loading ? (
                    <ThreeDots 
                        height="40"
                        width="40"
                        color="#ffffff"
                    />
                ):(
                    <p
                    data-test="sign-in-submit"
                    id="button" 
                    className="button-log">Entrar</p>
                )}
            
            </LogIn>


        </InputLista>

    </InputLogin>
</form>
    )
}



const InputLogin = styled.ul`
    input {
        width: 326px;
        height: 58px;
        border: 1px solid #DBDBDB;
        border-radius: 5px;  
        margin-bottom: 13px;
        outline: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;  
        font-size: 20px;
        color: #000000;  
        ::placeholder {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            padding-left:15px;
            margin-left: 12px;
            color: #000000;
            font-size: 20px;
        }
        `

const InputLista = styled.li`
display: flex;
flex-direction: column;
align-items: center;
`

const LogIn = styled.button` 
        width: 336px;
        height: 46px;
        background-color: #A328D6;
        border: 10px solid #A328D6;
        border-radius: 5px;  
        margin-bottom: 6px;  
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
             
        `
        