// imports
import styled from 'styled-components/native'

// component function
const StyledContainer = styled.View`
    width: 500px;
    height: 400px;
    background-color: blue;
    color: white;
`

// component styles
export default function GenericContainer({children}){
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}