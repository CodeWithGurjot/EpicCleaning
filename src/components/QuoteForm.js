import React, { useEffect, useRef } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import lottie from 'lottie-web/build/player/lottie_light';
import animation from '../animations/contact.json';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const QuoteForm = ({ quoteRef }) => {
  const animationInstance = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationInstance.current,
      animationData: animation,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });

    return () => (animationInstance.current = null);
  }, []);

  const phoneRegEx =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup
    .object({
      name: yup.string().required('This feild is Required'),
      email: yup.string().email('Invalid Email').required('This feild is Required'),
      phone: yup
        .string()
        .matches(phoneRegEx, 'Invalid Phone Number')
        .required('This feild is Required')
        .min(10, 'Invalid Phone Number')
        .max(10, 'Invalid Phone Number'),
      address: yup.string().required('This feild is Required'),
      zip: yup
        .number()
        .typeError('Invalid Zip Code')
        .integer('Invalid Zip Code')
        .positive('Invalid Zip Code'),
      userMessage: yup.string().required('This feild is Required'),
    })
    .required();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(values) {
    alert(JSON.stringify(values));
  }

  const onError = (error) => {
    console.log(error);
  };

  return (
    <Flex
      ref={quoteRef}
      alignItems='center'
      justifyContent='center'
      pb={20}
      mt={{ base: 5, md: 20 }}
      w='100%'
    >
      <Box w='50%' display={{ base: 'none', md: 'flex' }}>
        <Box ref={animationInstance} objectFit='cover' w='100%' h='100%'></Box>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        w={{ base: '95%', md: '50%' }}
      >
        <Box
          borderRadius={20}
          bgColor='brand.100'
          shadow='dark-lg'
          color='white'
          w={{ base: '95%', lg: '80%' }}
          p={{ base: 5, md: 10 }}
        >
          <Text fontFamily='h' fontSize='50px' mb={5}>
            Get a Quote
          </Text>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormControl variant='floating' isInvalid={errors.name}>
              <FormLabel htmlFor='name'>Full Name *</FormLabel>
              <Input id='name' placeholder='Enter Name...' {...register('name')} />
              <FormErrorMessage>{errors.name && errors.name?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt={2} isInvalid={errors.email}>
              <FormLabel htmlFor='email'>Email *</FormLabel>
              <Input id='email' placeholder='Enter Email...' {...register('email')} />
              <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt={2} isInvalid={errors.phone}>
              <FormLabel htmlFor='phone'>Phone Number *</FormLabel>
              <Input id='phone' placeholder='Enter Phone Number...' {...register('phone')} />
              <FormErrorMessage>{errors.phone && errors.phone.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt={2} isInvalid={errors.address}>
              <FormLabel htmlFor='address'>Address *</FormLabel>
              <Input id='address' placeholder='Eneter Address...' {...register('address')} />
              <FormErrorMessage>{errors.address && errors.address.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt={2} isInvalid={errors.zip}>
              <FormLabel htmlFor='zip'>Zip Code *</FormLabel>
              <Input id='zip' placeholder='Enter Zip...' {...register('zip')} />
              <FormErrorMessage>{errors.zip && errors.zip.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt={2} isInvalid={errors.userMessage}>
              <FormLabel htmlFor='userMessage'>Message *</FormLabel>
              <Input id='userMessage' placeholder='Enter Message...' {...register('userMessage')} />
              <FormErrorMessage>
                {errors.userMessage && errors.userMessage.message}
              </FormErrorMessage>
            </FormControl>

            <Button mt={4} bgColor='white' color='black' isLoading={isSubmitting} type='submit'>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default QuoteForm;
