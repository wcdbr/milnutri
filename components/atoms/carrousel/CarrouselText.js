// imports:
import styled from "styled-components/native";

// component function:
export default function CarrouselText( { children } ){
    return(
        <CarrouselTextWrapper>
            {children}
        </CarrouselTextWrapper>
    )
}

// component styles:
    // component wrapper
const CarrouselTextWrapper = styled.Text`
    width: 288px;
    height: 113px;

    font-weight: 400;
    font-size: 32px;
    line-height: 37.18px;
    color: #1F4598;
`