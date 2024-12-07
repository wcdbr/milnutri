// imports:
import styled from 'styled-components/native';

// component function:
export default function CarouselImage({ source }) {
    return (
        <CarrouselImageWrapper 
            source={source} 
            resizeMode="contain" 
        />
    );
}

// component styles:
const CarrouselImageWrapper = styled.Image`
    width: 100%;
    height: 304px;
`;
