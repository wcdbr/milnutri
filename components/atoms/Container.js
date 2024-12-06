// imports:
import styled from "styled-components/native";

// component function:
export default function Container({children, width, height, padding, margin, direction, justify, align, bgcolor}){
    return(
        <StyledContainer
            width={width}
            height={height}

            padding={padding}
            margin={margin}

            direction={direction}
            justify={justify}
            align={align}

            bgcolor={bgcolor}
        >
            {children}
        </StyledContainer>
    )
}

// component styles:
const StyledContainer = styled.View`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || 'auto'};

    padding: ${({ padding }) => padding || '0'};
    margin: ${({ margin }) => margin || '0'};

    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: ${({ justify }) => justify || 'flex-start'};
    align-items: ${({ align }) => align || 'flex-start'};

    background-color: ${({ bgcolor }) => bgcolor || 'transparent'};
`