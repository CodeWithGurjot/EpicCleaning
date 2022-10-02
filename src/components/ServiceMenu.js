import { Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

const ServiceMenu = () => {
  return (
    <Menu>
      <MenuButton className='hover-underline-animation'>
        <Text display='flex' alignItems='center' color='white' fontSize='17px'>
          SERVICES
          <FiChevronDown style={{ marginLeft: '5px' }} />
        </Text>
      </MenuButton>
      <MenuList mt={2}>
        <MenuItem>FLOOD RESTORATION</MenuItem>
        <MenuItem>WINDOW CLEANING</MenuItem>
        <MenuItem>BUILDER CLEANING</MenuItem>
        <MenuItem>COMMERCIAL CLEANING</MenuItem>
        <MenuItem>OFFICE CLEANING</MenuItem>
        <MenuItem>HOUSE CLEANING</MenuItem>
        <MenuItem>CARPET CLEANING</MenuItem>
        <MenuItem>SPRING CLEANING</MenuItem>
        <MenuItem>OVEN CLEANING</MenuItem>
        <MenuItem>VINYL FLOOR STRIPING</MenuItem>
        <MenuItem>END OF TENANCY CLEANING</MenuItem>
        <MenuItem>INDUSTRIAL CLEANING</MenuItem>
        <MenuItem>FLOOR TILES CLEANING</MenuItem>
        <MenuItem>UPHOLSTERY CLEANER</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ServiceMenu;
