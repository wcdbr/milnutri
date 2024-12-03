// imports
import styled from 'styled-components/native'

// component function
export default function GenericContainer({children, width, height, bgcolor}){
    return (
        <StyledContainer style={{
            'width': width, 
            'height': height,
            'background-color': bgcolor,
            }}>

            {children}
        </StyledContainer>
    )
}

// component styles
const StyledContainer = styled.View`
    color: white;
`