// imports
import styled from 'styled-components/native'

// component function
export default function Image({src, width, height}) {
    return (
        <StyledImage 
            source={src}
            width={width}
            height={height}
        />
    )
}

// component styles
const StyledImage = styled.Image`
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || '100%'};
`
