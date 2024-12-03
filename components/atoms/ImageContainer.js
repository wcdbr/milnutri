// imports
import styled from 'styled-components/native'

// component function
export default function GenericImage({src, width, height}){
    return (
        <StyledImage 
            source={src}
            style={{
                'width': width, 
                'height': height
            }}/>
    )
}

// component styles
const StyledImage = styled.Image `
    width: 10px;
    height: 10px;
`