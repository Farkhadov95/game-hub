import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./searchInput";

interface searchInputProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: searchInputProps) => {
  return (
    <HStack padding="10px">
      <Image src={logo} alt="logo" boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
