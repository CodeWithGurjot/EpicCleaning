import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import ServiceMenu from './ServiceMenu';

const Navbar = ({ quoteRef }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavItem = ({ children, to, onClick }) => {
    return (
      <Link to={to} onClick={onClick}>
        <Text className='hover-underline-animation' color='white' fontSize='17px'>
          {children}
        </Text>
      </Link>
    );
  };

  const handleScroll = () => {
    quoteRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavClick = () => {
    onClose();
  };

  return (
    <>
      {/* Desktop Navbar */}
      <Box
        justifyContent='space-between'
        p={5}
        bgColor='brand.100'
        display={{ base: 'none', md: 'flex' }}
        position='sticky'
        top='0'
        w='100%'
        zIndex={5}
        shadow='2xl'
      >
        <Text fontSize='20px' as='b' mt='1' color='white'>
          Epic Cleaning.
        </Text>
        <HStack spacing={8}>
          <NavItem to='/'>HOME</NavItem>
          <NavItem to='/about'>ABOUT US</NavItem>
          <ServiceMenu />
          <IconButton as='a' href='tel:080080056' rounded='full' icon={<FaPhoneAlt />} />
          <Button onClick={handleScroll}>Get Quote</Button>
        </HStack>
      </Box>

      {/* Mobile Navbar */}
      <Box
        justifyContent='space-between'
        p={5}
        bgColor='brand.100'
        display={{ base: 'flex', md: 'none' }}
        position='sticky'
        top='0'
        w='100%'
        zIndex={5}
        shadow='2xl'
      >
        <Text fontSize='22px' as='b' mt='1' color='white'>
          Epic Cleaning.
        </Text>
        <Box>
          <a href='tel:080080056'>
            <IconButton rounded='full' mr='7' icon={<FaPhoneAlt />} />
          </a>
          <IconButton onClick={onOpen} icon={<FiMenu />} />
        </Box>
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent borderRight='2px' borderColor='white' bgColor='brand.100'>
            <DrawerCloseButton color='white' m={4} size={5} />
            <DrawerHeader my={2}>
              <Text fontSize='22px' as='b' color='white'>
                Epic Cleaning
              </Text>
            </DrawerHeader>
            <Divider />
            <DrawerBody mt='4'>
              <VStack spacing='7' alignItems='flex-start'>
                <NavItem onClick={handleNavClick} to='/'>
                  HOME
                </NavItem>
                <Divider />
                <NavItem onClick={handleNavClick} to='/about'>
                  ABOUT US
                </NavItem>
                <Divider />
                <NavItem>SERVICES</NavItem>
                <Divider />
                <Button
                  onClick={() => {
                    handleScroll();
                    onClose();
                  }}
                >
                  Get Quote
                </Button>
                <Divider />
                <Button as='a' href='tel:080080056' leftIcon={<FaPhoneAlt />}>
                  Call Now!
                </Button>
                <Divider />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
