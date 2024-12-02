import styled from 'styled-components/native'

const StyledContainer = styled.View`
    width: 500px;
    height: 400px;
    background-color: blue;
    color:white ;
`

export default function GenericContainer({children}){
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}