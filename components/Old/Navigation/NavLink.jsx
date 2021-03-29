import React, { cloneElement, forwardRef } from 'react';

// Components
import { Box, useColorMode } from '@chakra-ui/react';

// Utilities
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ children, ...props }) => {
  const router = useRouter();
  let isActive = false;

  if (router.pathname === props.href) {
    isActive = true;
  }

  if (
    router.pathname.startsWith('/projects') &&
    props.href.startsWith('/projects')
  ) {
    isActive = true;
  }

  return (
    <Link passHref {...props}>
      {typeof children === 'function' ? children(isActive) : children}
    </Link>
  );
};

export const stringToUrl = (str, path = '/') =>
  `${path}${str.toLowerCase().split(' ').join('-')}`;

export const SideNavLink = forwardRef(({ children, icon, ...props }, ref) => {
  const { colorMode } = useColorMode();
  const color = { light: 'gray.700', dark: 'whiteAlpha.700' };
  return (
    <Box
      ref={ref}
      as="a"
      display="flex"
      cursor="pointer"
      align="center"
      px="2"
      py="1"
      transition="all 0.2s"
      fontWeight="medium"
      outline="none"
      _focus={{ shadow: 'outline' }}
      color={color[colorMode]}
      _notFirst={{ mt: 1 }}
      {...props}
    >
      {icon && cloneElement(icon, { mr: 3 })}
      <Box>{children}</Box>
    </Box>
  );
});

export const TopNavLink = forwardRef(({ href, ...props }, ref) => (
  <NavLink href={href}>
    {(isActive) => (
      <SideNavLink
        ref={ref}
        aria-current={isActive ? 'page' : undefined}
        _hover={{ color: !isActive ? 'inherit' : null }}
        {...(isActive && { color: 'pink.500', fontWeight: 'semibold' })}
        {...props}
      />
    )}
  </NavLink>
));

export const ComponentLink = forwardRef(({ href, ...props }, ref) => {
  const { colorMode } = useColorMode();
  const hoverColor = { light: 'gray.900', dark: 'whiteAlpha.900' };
  const activeColor = { light: 'pink.800', dark: 'pink.200' };
  const activeBg = { light: 'gray.100', dark: 'gray.700' };

  return (
    <NavLink href={href}>
      {(isActive) => (
        <SideNavLink
          ref={ref}
          aria-current={isActive ? 'page' : undefined}
          _hover={{
            color: hoverColor[colorMode],
            transform: 'translateX(2px)',
          }}
          {...(isActive && {
            bg: activeBg[colorMode],
            rounded: 'sm',
            borderRadius: 4,
            color: activeColor[colorMode],
            _hover: {},
          })}
          {...props}
        />
      )}
    </NavLink>
  );
});
