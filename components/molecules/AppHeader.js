// imports:
import styled from "styled-components/native";
import Container from '../atoms/Container'

// assets:
const NutriciaImg = '../../assets/img/nutricia-logo.png'
const MilnutriImg = '../../assets/img/milnutri-logo.png'

// component function:
export default function AppHeader(){
    return(
        <HeaderWrapper>
            {/* nutricia logo & container */}
            <Container 
                height={'90px'}
                padding={'47px 0 10px 0'} 
                justify={'center'} 
                align={'center'} 
                bgcolor={'#ddf7ff'}
            >
                <NutriciaLogoImage source={require( NutriciaImg )}/>
            </Container>

            {/* milnutri logo & container */}
            <Container
                padding={'12px 0 12px 10px'}
                bgcolor={'#c0f1ff'}
            >
                <MilnutriLogoImage source={require( MilnutriImg )}/>
            </Container>
        </HeaderWrapper>
    )
}

// component styles:
    // wrapper
const HeaderWrapper = styled.View`
    width: 100%;
    gap: 5px;
`

    // images
const NutriciaLogoImage = styled.Image`
    width: 110px;
    height: 45px;
`
const MilnutriLogoImage = styled.Image`
    width: 120px;
    height: 54px;
`