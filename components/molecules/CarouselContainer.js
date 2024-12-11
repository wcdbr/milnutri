// imports
import React from 'react';
import { Dimensions, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import styled from 'styled-components/native';
// images:
import CarouselImage1 from '../../assets/img/carousel/CarouselImage1.png';

// component function
export default function ProductsCarousel() {
  // carousel width
  const width = Dimensions.get('window').width
  const adjustedWidth = width * 0.96;

  // carousel items:
  const CarouselItems = [
    { image: CarouselImage1, text: 'Conheça nossa família de produtos Milnutri'},
    { image: CarouselImage1, text: 'Teste 2' },
  ];

  return (
    <CarouselContainer>
      <Carousel
        width={adjustedWidth}
        height={320}
        data={CarouselItems}
        renderItem={({ item }) => (
          <CarouselItemWrapper>
            <CarouselItemImage source={item.image} resizeMode="cover" />
            <CarouselItemText>{item.text}</CarouselItemText>
          </CarouselItemWrapper>
        )}
      />
    </CarouselContainer>
  );
}

// component styles:
// container
const CarouselContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

// carousel item wrapper:
const CarouselItemWrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

// image
const CarouselItemImage = styled.Image`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

// text overlay
const CarouselItemText = styled.Text`
  position: absolute;
  bottom: 45px;
  left: 25px;

  color: #000;
  font-size: 16px;
`;
