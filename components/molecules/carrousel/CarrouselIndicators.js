// imports:
import styled from "styled-components/native";

// component function:
export default function CarrouselIndicators( { total, activeIndex } ){
    return(
        <CarrouselIndicatorsWrapper>
            {Array.from({ length: total }).map((_, index) => (
                <CarouselDot key={index} isActive={index === activeIndex} />
            ))}
        </CarrouselIndicatorsWrapper>
    )
}

// component styles:
const CarrouselIndicatorsWrapper = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
`