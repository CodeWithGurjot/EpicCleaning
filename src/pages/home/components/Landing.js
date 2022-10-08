import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';
import animation from '../assets/animations/cleaning.json';

const Landing = ({ quoteRef }) => {
  const animationInstance = useRef(null);

  const handleScroll = () => {
    quoteRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const animationData = JSON.stringify(animation);
    const anim = lottie.loadAnimation({
      container: animationInstance.current,
      animationData: JSON.parse(animationData),
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
    return () => {
      anim.stop();
      anim.destroy();
      lottie.stop();
      lottie.destroy();
    };
  }, []);

  return (
    <Flex h={{ base: '78vh', lg: '88vh' }}>
      <Box
        w={{ base: '100%', md: '50%' }}
        flexDirection='column'
        pl={{ base: 5, md: 8 }}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Text
          color={useColorModeValue('green.800')}
          fontFamily='h'
          fontSize={{ base: '48px', md: '5xl' }}
          fontWeight='bold'
          display='flex'
          alignItems='flex-start'
        >
          Highest rated cleaning service in Tauranga
        </Text>
        <Text fontFamily='p' fontSize={{ base: 'lg', md: 'xl' }} mt={2}>
          A trusted company specialized in all types of cleaning services. Our professional cleaning
          service will take care of everything. You just come home,
          <span style={{ fontWeight: 'bold' }}> smile</span>, and
          <span style={{ fontWeight: 'bold' }}> relax.</span>
        </Text>
        <Flex mt={8} mr='auto'>
          <Button
            onClick={handleScroll}
            size={{ base: 'md', md: 'lg' }}
            bg='brand.100'
            color='white'
            _hover={{ bgColor: '#8CC63E', color: 'black' }}
          >
            Get a Free Quote
          </Button>
          <Button
            size={{ base: 'md', md: 'lg' }}
            ml={4}
            bg='brand.200'
            _hover={{ bgColor: '#006738', color: 'white' }}
          >
            View Services
          </Button>
        </Flex>
      </Box>
      <Box w='50%' display={{ base: 'none', md: 'flex' }}>
        <Box ref={animationInstance} objectFit='cover' w='100%' h='100%'></Box>
      </Box>
    </Flex>
  );
};

export default Landing;
