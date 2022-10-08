import { Box, Link, Container, SimpleGrid, Stack, Text, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
// import { Link } from 'react-router-dom';

const SocialButton = ({ icon, href }) => {
  return (
    <IconButton
      color='black'
      size='lg'
      cursor='pointer'
      rounded='full'
      as='a'
      href={href}
      icon={icon}
    />
  );
};

const date = new Date();
const year = date.getFullYear();

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box mt={{ base: 10, md: 20 }} bgColor='brand.100' color='white'>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={12}>
          <Stack spacing={6}>
            <Box>
              <Text fontSize='40px' as='b' mt='1' color='white'>
                Epic Cleaning.
              </Text>
            </Box>
            <Text fontSize='sm'>© {year} Epic CLeaning. All rights reserved</Text>
            <Stack justify={{ base: 'center', md: 'flex-start' }} direction='row' spacing={6}>
              <SocialButton icon={<FaTwitter size={28} />} href='#' />
              <SocialButton icon={<FaFacebook size={28} />} href='#' />
              <SocialButton icon={<FaYoutube size={28} />} href='#' />
              <SocialButton icon={<IoMdMail size={28} />} href='#' />
            </Stack>
          </Stack>
          <Stack align={{ base: 'center', md: 'flex-start' }}>
            <ListHeader>Company</ListHeader>
            <Link href='#'>About us</Link>
            <Link href='#'>Services</Link>
            <Link href='#'>Contact us</Link>
            <Link href='#'>Testimonials</Link>
          </Stack>
          <Stack align={{ base: 'center', md: 'flex-start' }}>
            <ListHeader>Support</ListHeader>
            <Link href='#'>Help Center</Link>
            <Link href='#'>Terms of Service</Link>
            <Link href='#'>Privacy Policy</Link>
          </Stack>
          <Stack align={{ base: 'center', md: 'flex-start' }}>
            <ListHeader>Contact Info</ListHeader>
            <Text>20 Landing Drive,</Text>
            <Text>Pyes Pa, Tauranga 3112</Text>
            <Link href='tel:080080056'>0800 0800 56</Link>
            <Link href='mailto:admin@epiccleaning.co.nz'>admin@epiccleaning.co.nz</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
