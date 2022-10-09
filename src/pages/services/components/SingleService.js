import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../data/services.json';

const SingleService = () => {
  const { id } = useParams();
  const dIndex = id - 1;

  return (
    <Flex mt={10} direction='column' alignItems='center' justifyContent='center'>
      <Text textAlign='center' as='b' fontFamily='h' fontSize={{ base: '30px', md: '50px' }}>
        {data[dIndex].title}
      </Text>
      <Text mt={2} w='88%' fontFamily='p' fontSize='17px' textAlign='center'>
        {data[dIndex].content}
      </Text>
      <Text mt={5} w='95%' textAlign='center' fontFamily='h' fontSize='30px'>
        {data[dIndex]['title-2']}
      </Text>
      <Text mt={2} w='88%' fontFamily='p' fontSize='17px' textAlign='center'>
        {data[dIndex]['content-2']}
      </Text>
      <Text mt={5} w='95%' textAlign='center' fontFamily='h' fontSize='30px'>
        {data[dIndex]['title-3']}
      </Text>
      <Text mt={2} w='88%' fontFamily='p' fontSize='17px' textAlign='center'>
        {data[dIndex]['content-3']}
      </Text>
      <Flex justifyContent='space-between' mt={5} p={5} w='88%' shadow='lg' borderRadius={20}>
        {/* <Image w='48%' borderRadius={10} src={data[dIndex].image} /> */}
        <Box w='100%'>
          <Text textAlign='center' fontFamily='h' fontSize='30px'>
            {data[dIndex]['card-title']}
          </Text>
          <Text textAlign='center' mt={2} fontFamily='p' fontSize='17px'>
            {data[dIndex]['card-content']}
          </Text>
        </Box>
      </Flex>
      <Text mt={5} w='95%' textAlign='center' fontFamily='h' fontSize='30px'>
        {data[dIndex]['title-4']}
      </Text>
      <Text w='88%' fontFamily='p' fontSize='17px' textAlign='center'>
        {data[dIndex]['content-4']}
      </Text>
    </Flex>
  );
};

export default SingleService;
