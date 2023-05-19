import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [currentGenre, setCurrentGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onGenreClick={(genre) => setCurrentGenre(genre)}
            selectedGenre={currentGenre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector />
        <GameGrid currentGenre={currentGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
