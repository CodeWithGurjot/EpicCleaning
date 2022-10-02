import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ModeSwitch = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size='md'
      fontSize='lg'
      aria-label={`Switch to ${text} mode`}
      rounded='full'
      marginLeft='2'
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
