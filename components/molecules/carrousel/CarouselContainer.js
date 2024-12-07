// imports:
import { useState } from 'react';
import styled from 'styled-components/native';
import CarouselImage from '../../atoms/carousel/CarouselImage';
import CarouselControls from './CarouselControls';


// component function:
export default function CarouselContainer({ images, texts }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <Container>
            <CarouselImage source={images[currentIndex]} />
            <CarouselText>{texts[currentIndex]}</CarouselText>
            <CarouselControls
                total={images.length}
                activeIndex={currentIndex}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        </Container>
    );
}


// component styles:
    // wrapper
const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

    // text
const CarouselText = styled.Text`
    font-size: 16px;
    color: #333;
    text-align: center;
    margin: 10px 0;
`;
