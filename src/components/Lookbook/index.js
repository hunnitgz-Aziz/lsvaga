import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../styles/styles.css'
import Image1 from '../../images/lookbook/image1.jpg'
import Image2 from '../../images/lookbook/image2.jpeg'
import Image3 from '../../images/lookbook/image3.jpeg'
import Image4 from '../../images/lookbook/image4.jpeg'
import Image5 from '../../images/lookbook/image5.jpeg'
import Image6 from '../../images/lookbook/image6.jpeg'
import Image7 from '../../images/lookbook/image7.jpeg'
import Image8 from '../../images/lookbook/image8.jpeg'
import Image9 from '../../images/lookbook/image9.jpeg'
import Image10 from '../../images/lookbook/image10.jpeg'
import Image11 from '../../images/lookbook/image11.jpeg'
import Image12 from '../../images/lookbook/image12.jpeg'
import Image13 from '../../images/lookbook/image13.jpeg'

import { Container, SliderImage, SliderItem } from './styles'

const PhotoBook = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
  }
  return (
    <Container>
      <Slider {...settings}>
        <SliderItem>
          <SliderImage src={Image1} style={{ maxWidth: '400px' }}></SliderImage>
        </SliderItem>
        <SliderItem>
          <SliderImage src={Image2}></SliderImage>
        </SliderItem>
        <SliderItem>
          <SliderImage src={Image3}></SliderImage>
        </SliderItem>
        <SliderItem>
          <SliderImage src={Image4}></SliderImage>
        </SliderItem>
        <SliderItem>
          <SliderImage src={Image5}></SliderImage>
        </SliderItem>
        <SliderItem>
          <SliderImage src={Image6}></SliderImage>
        </SliderItem>
        <SliderItem>
          <SliderImage src={Image7}></SliderImage>
        </SliderItem>
        <SliderItem>
          <SliderImage src={Image8}></SliderImage>
        </SliderItem>
        <SliderItem>
          <SliderImage src={Image9}></SliderImage>
        </SliderItem>
        <SliderItem>
          <SliderImage src={Image10}></SliderImage>
        </SliderItem>
        <SliderItem>
          <SliderImage src={Image11}></SliderImage>
        </SliderItem>
        <SliderItem>
          <SliderImage src={Image12}></SliderImage>
        </SliderItem>
        <SliderItem>
          <SliderImage
            style={{ maxWidth: '400px' }}
            src={Image13}
          ></SliderImage>
        </SliderItem>
      </Slider>
    </Container>
  )
}

export default PhotoBook
