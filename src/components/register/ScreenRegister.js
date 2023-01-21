import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";


export default function ScreenRegister(){
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passConf, setPassConf] = useState("")
    const navigate = useNavigate()

function sendRegister(e){
    e.preventDefault()

    const loginData = {name, email, password, confirmPassword: passConf}
    setLoading(true)
    console.log(loginData)

    const url_post = "http://localhost:5001/sign-up"
    const promise = axios.post(url_post, loginData)

    promise.then( res => {
        console.log(res)
        setLoading(false)
        navigate("/")
    })
    promise.catch ( err => {
        console.log(err.response)
        setLoading(false)
    })

}

    return (

<form onSubmit={sendRegister}>
    <InputRegister>

        <InputList>

            <input
                 data-test="name"
                 type="name"
                 value={name}
                 onChange={e => setName(e.target.value)}
                 placeholder="Nome"
                 required
                 disabled={loading}
                />

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

            <input
                 data-test="conf-password"
                 type="password"
                 value={passConf}
                 onChange={e => setPassConf(e.target.value)}
                 placeholder="Confirme a senha"               
                 required
                 disabled={loading}
                />    


            <Registration >
                    <p
                    data-test="sign-up-submit"
                    id="button" 
                    className="button-log">Cadastrar</p>
            
            </Registration>


        </InputList>

    </InputRegister>
</form>
    )
}



const InputRegister = styled.ul`
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

const InputList = styled.li`
display: flex;
flex-direction: column;
align-items: center;
`

const Registration = styled.button` 
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
        