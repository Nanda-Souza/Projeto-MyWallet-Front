import styled from "styled-components"

export default function HeaderEntry(){
    
    return (
        <EntryContainer>
            
            <p>Nova entrada</p>

        </EntryContainer>
    )
}

const EntryContainer = styled.div`
    margin: 25px 0 40px 25px;
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        color:#FFFFFF;
    }
`