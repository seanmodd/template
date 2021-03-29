import React from 'react';
import {
  Button,
  ChakraProvider,
  ColorModeProvider,
  Flex,
  useColorMode,
} from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import { GoogleFonts } from 'next-google-fonts';
import styled from 'styled-components';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import customTheme from '../styles/theme';
import seo from '../seo.config';
import theme from '../theme';
import '../styles/globals.css';
import { prismLightTheme, prismDarkTheme } from '../styles/prism';
import mytheme from '../styles/mytheme';

// const SeanFlex = styled(Flex)`
//   align: 'center';
//   justify-content: 'center';
//   border-radius: 10px;
//   padding: 20px;
//   font-family: Poppins;
//   margin: 15px;
//   transition-duration: 0.1s;
//   box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.2);
//   :hover {
//     box-shadow: 12px 12px 12px 1px rgba(223, 3, 172, 0.2);
//     transition: all 0.2s ease-out;
//     padding: 25px;
//     margin: 15px;
//   }
// `;

// const GlobalStyle = ({ children }) => {
//   const { colorMode } = useColorMode();

//   return (
//     <>
//       <Global
//         styles={css`
//           ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
//           ::selection {
//             background-color: #90cdf4;
//             color: #fefefe;
//           }
//           ::-moz-selection {
//             background: #ffb7b7;
//             color: #fefefe;
//           }
//           html {
//             min-width: 356px;
//             scroll-behavior: smooth;
//           }
//           #__next {
//             display: flex;
//             flex-direction: column;
//             min-height: 100vh;
//             background: ${colorMode === 'light' ? 'white' : '#171717'};
//           }
//         `}
//       />
//       {children}
//     </>
//   );
// };

// function MyApp({ Component, pageProps }) {
//   return (
//     <ChakraProvider resetCSS theme={customTheme}>
//       <ColorModeProvider
//         options={{
//           initialColorMode: 'light',
//           useSystemColorMode: true,
//         }}
//       >
//         <Global
//           styles={css`
//             #__next {
//               height: 100%;
//             }
//           `}
//         />
//         <GlobalStyle>
//           <Component {...pageProps} />
//         </GlobalStyle>
//       </ColorModeProvider>
//       <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
//     </ChakraProvider>
//   );
// }

// export default MyApp;

const Portfolio = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS theme={mytheme}>
    <Global
      styles={css`
        #__next {
          height: 100%;
        }
      `}
    />
    {/* <DefaultSeo {...seo} /> */}
    {/* <SeanFlex /> */}
    <Component {...pageProps} />

    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
  </ChakraProvider>
);

export default Portfolio;
