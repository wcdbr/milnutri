// imports
import styled from 'styled-components/native'

// component function
export default function GenericContainer({children}){
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

// component styles
const StyledContainer = styled.View`
    width: 400px;
    height: 400px;
    background-color: blue;
    color: white;
`