// imports
import styled from 'styled-components/native'

// component function
export default function Container({children, width, height, bgcolor, color}) {
    return (
        <StyledContainer 
            width={width} 
            height={height} 
            bgcolor={bgcolor} 
            color={color}
        >
            {children}
        </StyledContainer>
    )
}

// component styles
const StyledContainer = styled.View`
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || '100%'};
    background-color: ${({bgcolor}) => bgcolor || 'transparent'};
    color: ${({color}) => color || 'white'};
`