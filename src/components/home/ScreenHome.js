import styled from "styled-components"



export default function ScreenHome(){
 
    return (
        <HomeContainer>
             
        <div className="container">

            <div className="list">
                <ul  data-test="registry-name">
                    <li> <span className="gray">30/11</span> Almoço mãe</li>
                    <li> <span className="gray">27/11</span> Mercado</li>
                    <li> <span className="gray">26/11</span> Compras churrasco</li>
                    <li> <span className="gray">20/11</span> Empréstimo Maria</li>
                    <li> <span className="gray">15/11</span> Salário</li>
                </ul>

                <ul className="value" data-test="registry-amount">
                    <li><span className="red">39,90</span></li>
                    <li><span className="red">542,54</span></li>
                    <li><span className="red">67,60</span></li>
                    <li><span className="green">500,00</span></li>
                    <li><span className="green">3000,00</span></li>
                </ul>

            </div>

          
            <div className="total-balance">
                <p className="balance">SALDO</p>
                <p className="total" data-test="total-amount"><span className="green">2849,96</span></p>
            </div>

        </div>


        </HomeContainer>
    )
}


const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    aligh-itens: center;
    width: 100%;
    min-height: 80vh;
    background-color: #8C11BE;
    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-radius: 5px;
        margin-top:90px;
        margin-bottom:20px;
        margin-left: 25px;
        margin-right: 25px;
        background-color: #FFFFFF;
        width:100%;
        line-height: 25px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
      }
    .gray{
        color:#C6C6C6;

    }
    .red{
        color:#C70000;
    } 
    .green{
        color:#03AC00; 
    }       
    .list{
        width: 100%;
        min-height: 55vh;
        display: flex;
        margin-left:10px;
        margin-right: 10px;
        margin-top:23px;
        flex-direction: collunm;
        justify-content: space-between;

    }
    .value{
        text-align: right;
    }
    .total-balance{
        width: 100%; 
        margin-left:10px;
        margin-right: 10px;
        display: flex;
        justify-content: space-between;
    }
    .balance{
        font-weight: 700;
    }
    
     `
     //<h2>Não há registros de entrada ou saída</h2>

     //div{
        //display: flex;
        //flex-direction: center;
        //aligh-itens: center;
        //justify-content: center;
        //border-radius: 5px;
        //margin-top:90px;
        //margin-bottom:20px;
        //margin-left:15px;
        //margin-right: 15px;
        //background-color: #FFFFFF;
        //width:100%;
      //}
     //h2{
        //width:180px;
        //height: 46px;
        //color: #868686;
        //font-size: 20px;
        //display: flex;
        //margin: auto;
        //padding: auto;
        //text-align: center;
