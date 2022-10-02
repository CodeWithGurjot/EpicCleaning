import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FaMoneyCheckAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { BiHappyAlt } from 'react-icons/bi';

const HowItWorks = () => {
  const DetailCards = ({ title, content, icon }) => {
    return (
      <Box
        alignItems='center'
        justifyContent='center'
        h={{ base: '30vh', lg: '40vh' }}
        w='80%'
        p={5}
        bgColor='white'
        borderRadius='2xl'
        shadow='2xl'
        display='flex'
        flexDirection='column'
        mb={6}
      >
        <Icon as={icon} w='80px' h='80px' />
        <Text mt={5} fontFamily='h' as='b'>
          {title}
        </Text>
        <Text fontFamily='p'>{content}</Text>
      </Box>
    );
  };

  return (
    <Flex alignItems='center' direction='column' justifyContent='center'>
      <Flex
        bgColor='brand.200'
        w={{ base: '90%', lg: '85%' }}
        borderRadius='2xl'
        alignItems='center'
        direction='column'
        minH='30vh'
        m={5}
      >
        <Flex p={5} direction='column' mt={4}>
          <Text alignSelf='center' fontSize={{ base: '4xl', md: '5xl' }} fontFamily='h'>
            How it works
          </Text>
          <Text fontFamily='p' ml={{ base: '5%', md: '0' }}>
            We'll clean your home/office on reccuring basis or one time clean. Customer satisfaction
            is our priority.
          </Text>
        </Flex>
        <Flex
          alignItems='center'
          w='90%'
          direction={{ base: 'column', md: 'row' }}
          justifyContent='space-between'
          mt={5}
          gap={{ base: 4, md: 8 }}
        >
          <DetailCards
            icon={FaMoneyCheckAlt}
            title='Get a price.'
            content='Tell us about your home/office, and your cleaning needs.'
          />
          <DetailCards
            icon={FaRegCalendarAlt}
            title='Book it.'
            content="We'll make your home/office shine."
          />
          <DetailCards
            icon={BiHappyAlt}
            title='Breathe, smile, relax.'
            content='Work is Done! time to sit back and relax'
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HowItWorks;
