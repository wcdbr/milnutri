// imports
import CarouselContainer from '../../molecules/carrousel/CarouselContainer'

// assets & texts
const images = [
    require('../../../assets/img/carousel/CarouselImage1.png'),
];
  
const texts = [
    "Conheça nossa família de produtos Milnutri"
];

// component function
export default function ProductsCarousel(){
    return <CarouselContainer images={images} texts={texts}/>
}