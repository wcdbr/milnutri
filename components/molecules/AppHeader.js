// imports
import styled from "styled-components/native";

// assets:
const ImgNutricia = '../../assets/nutricia-logo.png'

// component function
export default function AppHeader(){
    return(
        <HeaderWrapper>
            {/* nutricia logo */}
            <NutriciaLogoContainer>
                <NutriciaLogoImage source={require(ImgNutricia)}/>
            </NutriciaLogoContainer>
        </HeaderWrapper>
    )
}

// component styles
const HeaderWrapper = styled.View`
    width: 100%;
    gap: 5px;
`

const NutriciaLogoContainer = styled.View`
    width: 100%;
    height: 45px;
    background-color: #ddf7ff;
    justify-content: center;
    align-items: center;
`
const NutriciaLogoImage = styled.Image`
    width: 110px;
    height: 45px;
`