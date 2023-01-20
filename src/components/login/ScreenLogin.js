import styled from "styled-components";


export default function ScreenLogin(){

    return (

    <InputLogin>

        <InputLista>
            <input
                 data-test="email"
                 type="email"
                 placeholder="E-mail"               
                />

            <input
                 data-test="password"
                 type="password" 
                 placeholder="Senha"
                />


            <LogIn >
                    <p
                    data-test="sign-in-submit"
                    id="button" 
                    className="button-log">Entrar</p>
            
            </LogIn>


        </InputLista>

    </InputLogin>
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
        