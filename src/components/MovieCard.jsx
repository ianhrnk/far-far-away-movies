import {
  Box,
  Badge,
  Image,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";

import { formatDate } from "../utils/date";
import { getRatingColor } from "../utils/rating";

const posterUrl = import.meta.env.VITE_API_POSTER_URL;

export function MovieCard({ posterPath, title, releaseDate, rating }) {
  return (
    <Box borderWidth="1px" borderColor="gray.300" borderRadius={15} overflow="hidden">
      <Image src={`${posterUrl}${posterPath}`} alt="movie poster" boxSize="max-content" />
      <Box p="0.5rem">
        <Flex justifyContent="space-between" alignItems="start">
          <Link
            href="#"
            _hover={{ color: "blue.500", textDecoration: "none" }}
          >
            <Text fontWeight="bold">
              {title}
            </Text>
          </Link>
          <Badge
            colorScheme={getRatingColor(rating)}
            variant='solid'
            ml='1'
            mt='0.5'
            fontSize='0.9em'
          >
            {rating * 10}
          </Badge>
        </Flex>
        <Text fontSize="0.9em">{formatDate(releaseDate)}</Text>
      </Box>
    </Box >
  );
}
