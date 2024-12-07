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
        <>
        <Container>
            <CarouselImage source={images[currentIndex]} />
            <CarouselText>{texts[currentIndex]}</CarouselText>
        </Container>
            <CarouselControls
                total={images.length}
                activeIndex={currentIndex}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        </>
    );
}

// Container
const Container = styled.View`
    margin: 0 auto;
    border-radius: 15px;
    padding: 30px 10px;
    width: 95%;
    height: 320px;
    align-items: center;
    justify-content: center;

    /* Sombra para iOS */
    shadowColor: #000;
    shadowOffset: 0px 1px;
    shadowOpacity: 0.25;
    shadowRadius: 1px;
    /* Sombra para Android */
    elevation: 15;
`;


    // text
const CarouselText = styled.Text`
    width: 100%;
    font-size: 16px;
    color: #333;

    position: absolute;
    z-index: 3;
    top: 200px;
    padding: 10px 20px;
`;
