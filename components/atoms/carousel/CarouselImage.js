// imports:
import styled from 'styled-components/native'

// component function:
export default function CarrouselImage(src){
    return(
        <CarrouselImageWrapper source={src} resizeMode='contain'/>
    )
}

// component styles:
    // component wrapper
const CarrouselImageWrapper = styled.Image`
    width: 100%;
    height: 304px;
`