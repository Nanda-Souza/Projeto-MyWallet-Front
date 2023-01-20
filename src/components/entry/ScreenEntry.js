import styled from "styled-components";


export default function ScreenEntry(){

    return (

    <NewEntry>

        <EntryList>
            <input
                 data-test="registry-amount-input"
                 type="value"
                 placeholder="Valor"               
                />

            <input
                  data-test="registry-name-input"
                 type="description" 
                 placeholder="Descrição"
                />


            <SaveEntry >
                    <p
                    data-test="registry-save" 
                    id="button" 
                    className="button-save">Salvar entrada</p>
            
            </SaveEntry>


        </EntryList>

    </NewEntry>
    )
}



const NewEntry = styled.ul`
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

const EntryList = styled.li`
display: flex;
flex-direction: column;
align-items: center;
`

const SaveEntry = styled.button` 
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
        