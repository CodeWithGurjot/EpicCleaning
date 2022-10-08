import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../../data/servicecard.json';

const ServiceCard = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={2}>
      {data.map((d) => (
        <Box
          m={8}
          key={d.id}
          alignItems='center'
          justifyContent='center'
          w='95%'
          p={4}
          bgColor='white'
          shadow='xl'
          borderRadius='2xl'
          border='2px'
          mb={12}
          ml='10px'
        >
          <Image w='100%' h='240px' borderRadius={10} mb={8} src={d.image} />
          <Text mt={5} fontFamily='h' as='b'>
            {d.title}
          </Text>
          <Text fontSize='sm' mt={2} fontFamily='p'>
            {d.content}
          </Text>
          <Button
            as={Link}
            to={`/services/${d.id}`}
            bgColor='brand.100'
            color='white'
            _hover={{ bgColor: '#8CC63E', color: 'black' }}
            mt={5}
            w='100%'
          >
            Know More!
          </Button>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ServiceCard;
