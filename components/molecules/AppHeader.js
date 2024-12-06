// imports:
import styled from "styled-components/native";
import Container from '../atoms/Container'
import Image from '../atoms/Image'

    // assets
import NutriciaImg from '../../assets/img/header/nutricia-logo.png';
import MilnutriImg from '../../assets/img/header/milnutri-logo.png';

// component function:
export default function AppHeader(){
    return(
        <HeaderWrapper>
            {/* nutricia logo & container */}
            <Container 
                height={'90px'}
                padding={'47px 0 10px 0'} 
                margin={'0 0 6px 0'}
                justify={'center'} 
                align={'center'} 
                bgcolor={'#DDF7FF'}>

                <Image 
                    src={ NutriciaImg }
                    width={'110px'}
                    height={'45px'}
                    resizeMode="contain"/>
            </Container>

            {/* milnutri logo & container */}
            <Container
                padding={'12px 0 12px 10px'}
                bgcolor={'#C0F1FF'}>

                <Image 
                    src={ MilnutriImg }
                    width={'120px'}
                    height={'45px'}
                    resizeMode="contain"/>
            </Container>
        </HeaderWrapper>
    )
}

// component styles:
    // component wrapper
const HeaderWrapper = styled.View`
    width: 100%;
    margin-bottom: 47px;
`