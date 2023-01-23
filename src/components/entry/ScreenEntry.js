import styled from "styled-components";
import axios from "axios";
import TokenContext from "../../contexts/TokenContext"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";


export default function ScreenEntry(){
    const { config } = useContext(TokenContext)
    const [loading, setLoading] = useState(false)
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

const sendGain = async (e) => {
    e.preventDefault()

    const URL = `${process.env.REACT_APP_API_URL}/expense`
    setLoading(true)
    const gainData = {
        value: parseFloat(price).toFixed(2),
        description,
        type: "gain"
    }
        

    try{
        await axios.post(URL, gainData, config)
        
        
    } catch (err){
        alert("Não foi possível fazer o cadastro, favor tentar novamente mais tarde!")
        setLoading(false)
    }
    
    setLoading(false)
    navigate("/home")




}

    return (

<form onSubmit={sendGain}>
    <NewEntry>

        <EntryList>
            <input
                 data-test="registry-amount-input"
                 type="number"
                 value={price}
                 onChange={e => setPrice(e.target.value)}
                 placeholder="Valor"
                 required
                 disabled={loading}
                />

            <input
                  data-test="registry-name-input"
                 type="description"
                 value={description}
                 onChange={e => setDescription(e.target.value)} 
                 placeholder="Descrição"
                 required
                 disabled={loading}
                />


            <SaveEntry isLoading={loading} >
                {loading ? (
                    <ThreeDots 
                        height="40"
                        width="40"
                        color="#ffffff"
                    />
                ):(
                    <p
                    data-test="registry-save" 
                    id="button" 
                    className="button-save">Salvar entrada</p>
                )}
            
            </SaveEntry>


        </EntryList>

    </NewEntry>
</form>
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
        