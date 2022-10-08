import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const AboutCard = () => {
  return (
    <Flex alignItems='center' justifyContent='center' mt={{ base: 10, md: 20 }}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        h={{ base: 'auto', lg: '60vh' }}
        p={{ base: 2, md: 5 }}
        py={5}
        borderRadius={20}
        w='90%'
        shadow='lg'
        justifyContent={{ base: 'center', lg: 'space-between' }}
        alignItems='center'
        bgColor='brand.200'
      >
        <Image
          h={{ base: '40vh', md: 'full' }}
          borderRadius={10}
          src='images/house.png'
          w={{ base: '95%', lg: '40%' }}
        />
        <Box mt={{ base: 5, lg: 0 }} w={{ base: '95%', lg: '55%' }}>
          <Text fontFamily='h' fontSize={{ base: '25px', md: '28px' }}>
            Guaranteed customer satisfaction through innovative cleaning approach and well-suited
            equipment marks our success in the industry.
          </Text>
          <Text mt={5} fontFamily='p' fontSize={{ base: '16px', md: '16px' }}>
            We have a strong affinity for excellence which drives us to accomplish the challenging
            aspects of our job and raise the standards of quality in our industry. Not just
            residential and office properties, but Epic Cleaning Services has had the chance to work
            for government officials as well, where we exhibited our best traits, making us a
            reliable, professional choice for all sectors. We are trained to deliver quality second
            to none, and we focus on achieving the same despite all odds.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AboutCard;
