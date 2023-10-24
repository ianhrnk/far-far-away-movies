import { useRef } from "react";
import {
  Box,
  Badge,
  Image,
  Flex,
  Link,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { formatDate } from "../utils/date";
import { getRatingColor } from "../utils/rating";

const posterUrl = import.meta.env.VITE_API_POSTER_URL;

export function MovieCard({ posterPath, title, releaseDate, rating, overview }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Box borderWidth="1px" borderColor="gray.300" borderRadius={15} overflow="hidden">
        <Image src={`${posterUrl}${posterPath}`} alt="movie poster" boxSize="max-content" />
        <Box p="0.5rem">
          <Flex justifyContent="space-between" alignItems="start">
            <Link
              _hover={{ color: "blue.500", textDecoration: "none" }}
              onClick={onOpen}
            >
              <Text fontWeight="bold">
                {title}
              </Text>
            </Link>
            <Badge
              colorScheme={getRatingColor(rating)}
              variant='solid'
              ml='2'
              mt='0.5'
              fontSize='0.9em'
            >
              {rating * 10}
            </Badge>
          </Flex>
          <Text fontSize="0.9em">{formatDate(releaseDate)}</Text>
        </Box>
      </Box >
      <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Detalhes do filme</DrawerHeader>

          <DrawerBody >
            <Flex
              alignItems="center"
              justifyContent="center"
            >
              <Image src={`${posterUrl}${posterPath}`} alt="movie poster" boxSize="max-content" alignItems="center"/>
            </Flex>
            <Flex justifyContent="space-between" alignItems="start" mt="1.5rem">
              <Text fontWeight="bold" fontSize="1.2em">
                {title}
              </Text>
              <Badge
                colorScheme={getRatingColor(rating)}
                variant='solid'
                ml='1'
                mt='0.5'
                fontSize='1em'
              >
                {rating * 10}
              </Badge>
            </Flex>
            <Text>{formatDate(releaseDate)}</Text>
            { overview.length === 0 ?
              <Text mt="1.5rem">Não há sinopse.</Text>
              : <>
                <Text fontWeight="bold" mt="1.5rem">Sinopse:</Text>
                <Text>{overview}</Text>
              </>
            }
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Fechar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
