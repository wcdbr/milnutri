// imports:
import styled from 'styled-components/native';

// component function:
export default function CarrouselImage({ src, width, height }) {
    return (
        <CarrouselImageWrapper 
            source={src} 
            resizeMode="contain" 
            width={width}
            height={height}
        />
    );
}

// component styles:
const CarrouselImageWrapper = styled.Image`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '304px'};
`;
