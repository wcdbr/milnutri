// imports:
import styled from "styled-components/native";

// component function:
export default function CarrouselChangeButton({ direction, onPress }) {
    return (
        <CarrouselChangeButtonWrapper onPress={onPress}>
            <ButtonText>{direction === 'left' ? '<' : '>'}</ButtonText>
        </CarrouselChangeButtonWrapper>
    );
}

// component styles:
const CarrouselChangeButtonWrapper = styled.TouchableOpacity`
    background-color: red;
    padding: 10px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

const ButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: white;
`;
