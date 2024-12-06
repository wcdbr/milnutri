// imports:
import styled from "styled-components/native"

// component function:
export default function CarrouselChangeButton( { direction, onPress } ){
    return(
        <CarrouselChangeButtonWrapper onPress={onPress}>
            <ButtonText>{direction === 'left' ? '<' : '>'}</ButtonText>
        </CarrouselChangeButtonWrapper>
    )
}

// component styles:
    // wrapper
const CarrouselChangeButtonWrapper = styled.Button`
    background-color: red;
`
    // text
const ButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #333;
`;