import Slider from 'react-slick';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const Carousel = ({ children, base, md, lg, xl, color }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <Box
        right={{ base: '-7', md: '-8' }}
        top='45%'
        color={color}
        position='absolute'
        cursor='pointer'
        onClick={onClick}
      >
        <FaChevronRight size={30} />
      </Box>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <Box
        left={{ base: '-7', md: '-8' }}
        top='45%'
        color={color}
        position='absolute'
        cursor='pointer'
        onClick={onClick}
      >
        <FaChevronLeft size={30} />
      </Box>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: xl,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: lg,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: md,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: base,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
};

Carousel.propTypes = {
  base: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  color: PropTypes.string,
};

Carousel.defaultProps = {
  base: 1,
  md: 2,
  lg: 3,
  xl: 5,
  color: 'white',
};
