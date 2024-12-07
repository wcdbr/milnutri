// imports
import CarouselContainer from '../../molecules/carrousel/CarouselContainer'

// assets & texts
// assets & texts
const images = [
    require('../../../assets/img/carousel/CarouselImage1.png'),
    require('../../../assets/img/carousel/CarouselImage2.png')
];

const texts = [
    "Conheça nossa família de produtos Milnutri",
    'Yo'
];


// component function
export default function ProductsCarousel(){
    return <CarouselContainer images={images} texts={texts}/>
}