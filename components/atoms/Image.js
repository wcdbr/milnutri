// imports:
import styled from "styled-components/native";

// component function:
export default function Image({src, width, height}){
    return(
        <ImageWrapper 
            source={src}  
            width={width} 
            height={height}
        />
    )
}

// component styles:
    // component wrapper
const ImageWrapper = styled.Image`
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || 'auto'};
`