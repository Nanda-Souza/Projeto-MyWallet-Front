import styled from "styled-components";


export default function ScreenRegister(){

    return (

    <InputRegister>

        <InputList>

            <input
                 data-test="name"
                 type="name"
                 placeholder="Nome"               
                />

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

            <input
                 data-test="conf-password"
                 type="conf"
                 placeholder="Confirme a senha"               
                />    


            <Registration >
                    <p
                    data-test="sign-up-submit"
                    id="button" 
                    className="button-log">Cadastrar</p>
            
            </Registration>


        </InputList>

    </InputRegister>
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
        