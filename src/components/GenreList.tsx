import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";

interface GenreListProps {
  onGenreClick: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onGenreClick, selectedGenre }: GenreListProps) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="30px"
              borderRadius={8}
            />
            <Button
              fontSize="lg"
              variant="link"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              onClick={() => onGenreClick(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
