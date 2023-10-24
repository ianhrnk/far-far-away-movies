import {
  Box,
  Link,
  Text
} from "@chakra-ui/react";

export function NavLink({ href, text }) {
  return (
    <Box>
      <Link fontWeight="bold" color="white" href={href}>
        <Text>{text}</Text>
      </Link>
    </Box>
  );
}
