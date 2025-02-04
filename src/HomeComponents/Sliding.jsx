import React from 'react';
import { Box } from '@chakra-ui/react';
import Slider from 'react-slick';


// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Sliding() {
  
  const [slider, setSlider] = React.useState (null);

  //  images used in the slide
  const cards = [
    // CHANGED BACKGROUND HERE
    //'https://wallpapers.com/images/featured/doctor-kwucobzhm0etbcwy.jpg'
    'https://static.vecteezy.com/system/resources/previews/010/502/837/non_2x/light-and-dark-background-bitcoin-crypto-currency-illustration-for-page-logo-card-banner-web-and-printing-free-vector.jpg'
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Box
             position="absolute"
           />
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
            
          />

        ))}
      </Slider>
    </Box>
  );
}