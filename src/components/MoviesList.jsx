import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  Container,
  SimpleGrid,
  Text
} from "@chakra-ui/react";

import { MovieCard } from "./MovieCard";

const moviesUrl = import.meta.env.VITE_API_MOVIES_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export function MoviesList() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  async function getPopularMovies() {
    const response = await axios.get(`${moviesUrl}?api_key=${apiKey}&language=pt&page=${page}`);
    const data = response.data;

    setPopularMovies((prevItems) => [...prevItems, ...data.results]);
    setPage(page + 1);

    if (data.results.length === 0) {
      setHasMore(false);
    }
  }

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <Container maxW="6xl" marginTop="2rem">
        <InfiniteScroll
          dataLength={popularMovies.length}
          next={getPopularMovies}
          hasMore={hasMore}
          loader={<Text>Carregando...</Text>}
        >
          <SimpleGrid minChildWidth='160px' spacing={7}>
          {
            popularMovies.map((movie) =>
              <MovieCard
                posterPath={movie.poster_path}
                title={movie.title}
                releaseDate={movie.release_date}
                rating={movie.vote_average}
              />
            )
          }
          </SimpleGrid>
        </InfiniteScroll>
    </Container>
  );
}
