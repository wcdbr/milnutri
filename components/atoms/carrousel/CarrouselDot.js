// imports:
import styled from 'styled-components/native';

// component styles:
const CarouselDot = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${({ isActive }) => (isActive ? '#007aff' : '#ccc')};
    margin: 0 5px;
`;

// component export:
export default CarouselDot;