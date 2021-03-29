import React from 'react';

// Components
import { Box, Flex, Text, Link, useMediaQuery } from '@chakra-ui/react';

const Footer = () => {
  const [tabletScreen] = useMediaQuery('(max-width: 1400px)');

  return (
    <Box>
      <Flex justify="space-between" wrap="wrap">
        <Text fontSize="md" mb={3}>
          Copyright &copy; {new Date().getFullYear()} Ryan Le. All Rights
          Reserved.
        </Text>
        {!tabletScreen && (
          <Text fontSize="md" mb={3}>
            Portfolio created with{' '}
            <Link href="https://chakra-ui.com/" color="pink.500">
              Chakra UI
            </Link>{' '}
            components.
          </Text>
        )}
      </Flex>
    </Box>
  );
};

export default Footer;
