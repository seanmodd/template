import React from 'react';

// Components
import { Heading, Box, Image, Text, Wrap, Button } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { GoogleFonts } from 'next-google-fonts';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import AppNavigation from '../components/Old/Navigation/AppNavigation';

import { seandiv } from './_app.js';
import { SeanFlex } from '../components/Styled';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-family: Poppins;
  color: palevioletred;
`;
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

const MyButton = () => (
  <div>
    <Button
      transition="0.5s"
      boxShadow="3px 3px 3px 3px rgba(0, 0, 255, 0.2)"
      bg={mode('gray.100', 'gray.700')}
      p="10px"
      m="10px"
      _hover={hoverStyle}
      _active={pressedStyle}
    />
  </div>
);

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Home = () => (
  <AppNavigation width="full" maxWidth="1280px" mx="auto">
    <Image src="./banner.png" borderRadius={20} mb={10} boxShadow="lg" />
    <Heading size="2xl">Sean Modd</Heading>
    <Heading size="lg" mt="10px">
      Follow me @persiansean
    </Heading>
    <Box mt={10}>
      <Text fontSize="xl">What's up. I'm SeanModd</Text>
    </Box>
    <MyButton />

    <Wrapper>
      <Title>Hello World!</Title>
      <Button>Here</Button>
    </Wrapper>
    <Heading className="seandiv">HERE I AM</Heading>
  </AppNavigation>
);

export default Home;
