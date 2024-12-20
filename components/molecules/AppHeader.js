// imports:
import styled from "styled-components/native";
import Container from '../atoms/generic/Container'
import Image from '../atoms/generic/Image'

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
                padding={'52px 0 13px 0'} 
                margin={'0 0 6px 0'}
                justify={'center'} 
                align={'center'} 
                bgcolor={'#DDF7FF'}>

                <Image 
                    src={ NutriciaImg }
                    width={'140px'}
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
                    height={'50px'}
                    resizeMode="contain"/>
            </Container>
        </HeaderWrapper>
    )
}

// component styles:
    // component wrapper
const HeaderWrapper = styled.View`
    width: 100%;
    margin-bottom: 30px;
`