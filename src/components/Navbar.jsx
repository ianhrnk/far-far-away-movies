import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';

import { NavLink } from './Navlink';

export function Navbar() {
  return (
    <Box
      bg="gray.700"
      p="3"
    >
      <Flex gap="2.5rem" alignItems="center">
        <Text color="white" fontSize="xl" fontFamily={'heading'} fontWeight="bold">FFAM</Text>
        <NavLink href="#" text="Movies" />
        <NavLink href="#" text="TV Shows" />
        <NavLink href="#" text="People" />
      </Flex>
    </Box>
  );
}


