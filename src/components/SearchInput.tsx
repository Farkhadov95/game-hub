import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface searchInputProps {
  onSearch: (searchText: string) => void;
}

const searchInput = ({ onSearch }: searchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default searchInput;
