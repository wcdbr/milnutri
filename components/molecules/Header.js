// imports
import styled from "styled-components/native";
import Container from "../atoms/Container";
import ImageContainer from '../atoms/ImageContainer';

// component function
export default function AppHeader(){
    return(
        <HeaderWrapper>
            {/* nutricia logo */}
            <Container width={'100%'} bgcolor={'#DDF7FF'} height={'100px'}>
                <ImageContainer 
                    src={require('../../assets/nutricia-logo.png')}
                    width={'100px'}
                    height={'100px'}
                    />
            </Container>
        </HeaderWrapper>
    )
}

// component styles
const HeaderWrapper = styled.View`
    width: 100%;
`