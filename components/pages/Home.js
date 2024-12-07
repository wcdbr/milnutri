// imports:
import styled from 'styled-components/native';
import AppHeader from '../molecules/AppHeader';
import ProductsCarousel from '../organisms/carousel/ProductsCarousel';

// component function:
export default function App() {
  return (
    <HomeWrapper>

      <AppHeader/>
      <ProductsCarousel/>
      
    </HomeWrapper>
  );
}

// component styles:
const HomeWrapper = styled.View`
  box-sizing: border-box;
`