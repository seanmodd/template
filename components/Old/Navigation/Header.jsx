import React from 'react';

// Components
import { Box, Flex, IconButton, useColorMode, Text } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import MobileNav from './MobileNav';

// Utilities

const Header = (props) => {
  const { hideSearch, ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: 'white', dark: 'gray.800' };

  return (
    <Box
      pos="fixed"
      as="header"
      top="0"
      zIndex="4"
      bg={bg[colorMode]}
      left="0"
      right="0"
      borderBottomWidth="1px"
      width="full"
      height="4em"
      {...rest}
    >
      <Box width="full" mx="auto" px={6} pr={[1, 6]} height="100%">
        <Flex
          size="100%"
          padding={[0, 6]}
          pl={[0, 4]}
          align="center"
          justify="space-between"
          height="100%"
        >
          <Link href="/" passHref>
            <Box as="a" d="block" aria-label="Back to homepage">
              <Text fontSize="xl" fontWeight="bold">
                SEAN S. M. MODD
              </Text>
            </Box>
          </Link>

          <Flex align="center" color="gray.500">
            <IconButton
              aria-label={`Switch to ${
                colorMode === 'light' ? 'dark' : 'light'
              } mode`}
              variant="ghost"
              color="current"
              ml="2"
              fontSize="20px"
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            />

            {!hideSearch && <MobileNav />}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
