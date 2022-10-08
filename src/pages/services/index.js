import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import ServiceCard from './components/ServiceCard';

const Services = () => {
  return (
    <Flex mt={10} direction='column' alignItems='center' justifyContent='center'>
      <Text as='b' fontFamily='h' fontSize='50px'>
        Epic Cleaning Services.
      </Text>
      <ServiceCard />
    </Flex>
  );
};

export default Services;
