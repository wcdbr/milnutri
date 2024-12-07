// imports:
import styled from 'styled-components/native';
import AppHeader from '../molecules/AppHeader';
import CarouselContainer from '../organisms/carousel/CarouselContainer';

const images = [
  require('../../assets/img/carrousel/CarouselImage1.png'),
];

const texts = [
  "Conheça nossa família de produtos Milnutri",
  "A nutrição para o seu pequeno",
  "Cuidados especiais em cada etapa",
];

// component function:
export default function App() {
  return (
    <HomeWrapper>

      <AppHeader/>
      <CarouselContainer images={images} texts={texts}/>
      
    </HomeWrapper>
  );
}

// component styles:
const HomeWrapper = styled.View`
  box-sizing: border-box;
`