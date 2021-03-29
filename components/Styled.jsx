import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import styled, { css } from 'styled-components';
import { IconButton } from '@chakra-ui/button';

const hoverStyle = {
  boxShadow: '7px 7px 7px 7px  rgba(223, 3, 172, 0.2)',
  textShadow: '1px 1px #ff0000',
  transition: 'all .2s ease-out',
  background: '#62ff00',
  color: 'black',
  fontWeight: '400',
};
const pressedStyle = {
  background: '#0d00ff',
  color: '#ffff00',
  transition: 'all 0.6s ease-out',
  textShadow: '6px 6px #ff00ae',
  fontWeight: '400',
};

const MyButton = () => (
  <div>
    <Button
      transition="0.1s"
      boxShadow="3px 3px 3px 3px rgba(0, 0, 255, 0.2)"
      color="white"
      p="10px"
      m="10px"
      _hover={hoverStyle}
      _active={pressedStyle}
    />
  </div>
);

const SeanFlex = styled(Flex)`
  align: 'center';
  justify-content: 'center';
  border-radius: 10px;
  padding: 20px;
  margin: 15px;
  transition-duration: 0.1s;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.2);
  :hover {
    box-shadow: 12px 12px 12px 1px rgba(223, 3, 172, 0.2);
    transition: all 0.2s ease-out;
    padding: 25px;
    margin: 15px;
  }
`;

const MyFlex = styled(Flex)`
  align-items: 'center';
`;
const NewFlex = ({ children }) => (
  <>
    <SeanFlex
      d="flex"
      w={['250px', '300px', '350px', '400px']}
      bg={mode('gray.100', 'gray.700')}
    >
      {children}
    </SeanFlex>
  </>
);
const NewStack = ({ children }) => (
  <>
    <VStack alignItems={['left', 'right']} justifyContent={['left', 'right']}>
      {children}
    </VStack>
  </>
);

export { SeanFlex, MyFlex, MyButton, NewFlex, NewStack };
