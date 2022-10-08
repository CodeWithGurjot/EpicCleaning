import React from 'react';
import { Box, Divider, Image, Text } from '@chakra-ui/react';
import data from '../../../data/servicecard.json';
import { Carousel } from '../../../components/Carousel';

const SeviceSlider = () => {
  const handleServices = (title) => {
    console.log(title);
  };

  return (
    <Box
      mt={{ base: 10, md: 20 }}
      alignItems='center'
      w='100%'
      display='flex'
      flexDirection='column'
    >
      <Box
        bgColor='brand.100'
        alignItems='center'
        flexDirection='column'
        pt={5}
        display='flex'
        w='100%'
        justifyContent='center'
      >
        <Text mt={12} color='white' fontSize='5xl' fontFamily='h'>
          Services
        </Text>
        <Divider w='90%' />
        <Box width={{ base: '85%', md: '90%' }} mt={4} mb={5}>
          <Carousel>
            {data.map((d) => (
              <Box
                onClick={() => handleServices(d.title)}
                cursor='pointer'
                m={8}
                key={d.id}
                alignItems='center'
                justifyContent='center'
                w='100%'
                p={4}
                bgColor='white'
                shadow='xl'
                borderRadius='2xl'
                border='2px'
                mb={12}
                h={{ base: '440px', lg: '440px', xl: '460px' }}
                ml='10px'
              >
                <Image w='100%' h='240px' borderRadius={10} mb={8} src={d.image} />
                <Text mt={5} fontFamily='h' as='b'>
                  {d.title}
                </Text>
                <Text fontSize='sm' mt={2} fontFamily='p'>
                  {d.content}
                </Text>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default SeviceSlider;
