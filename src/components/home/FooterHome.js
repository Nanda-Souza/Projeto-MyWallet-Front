import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function FotterHome(){
    const navigate = useNavigate()

    function newIncome(){        
        navigate("/nova-entrada")
    }

    function newExpense(){        
        navigate("/nova-saida")
    }
    

    return (
        
        <FooterHm>

            <div className="new-entry">
                <button data-test="new-income" onClick={newIncome}>
                    <img src="assets/iconPlus.png" alt=""/>
                    <p>Nova Entrada</p>
                </button>
            </div>
       

            <div className="new-exit">
                <button data-test="new-expense" onClick={newExpense}>
                    <img src="assets/iconLess.png" alt=""/>
                    <p>Nova Saída</p>
                </button>
            </div>
       
            
        </FooterHm>
    )
}

const FooterHm = styled.footer`
    width: 100%;
    height: 140px;
    background-color: #8C11BE;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    div{
        width:95%;
        height: 114px;
        background-color: #A328D6;
        border-radius: 5px;
    }
    .new-entry{
        margin-left:25px;
        margin-right:15px;

    }
    .new-exit{
        margin-right:25px;
    }
    button{
        display:flex;
        flex-direction:column;
        flex-wrap: wrap;
        width:100%;
        background-color: #A328D6;
        border:none;
        margin-top:2px;
    }
    img {
        width: 22px;
        height: 22px;
        margin-right: auto;
        margin-bottom:30px;
        margin-top: 10px;
    }
    p{
        width:64px;
        height: 40px;
        margin-right: auto;
        margin-bottom: 5px;
        color: #FFFFFF;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 18px;
        text-align: left;
    }
    
  `
