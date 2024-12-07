// imports:
import styled from 'styled-components/native';
import CarouselChangeButton from '../../atoms/carousel/CarouselChangeButton';
import CarouselDot from '../../atoms/carousel/CarouselDot';

// component function:
export default function CarouselControls({ total, activeIndex, onNext, onPrev }) {
    return (
        <CarouselControlsWrapper>
            <CarouselChangeButton direction="left" onPress={onPrev} />
            <CarouselDot total={total} activeIndex={activeIndex} />
            <CarouselChangeButton direction="right" onPress={onNext} />
        </CarouselControlsWrapper>
    );
}

// component styles:
const CarouselControlsWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
`;