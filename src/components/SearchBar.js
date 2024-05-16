// Search.js
import React from "react";
import { SearchInput, SearchContainer } from "./NavbarElements";
import { Icon } from "./NavbarElements";
import { useSearchContext } from "./SearchContext"; // Import the useSearchContext hook

const Search = () => {
  const { searchKeyword, setSearchKeyword } = useSearchContext(); // Access search keyword state and setter function

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <Icon />
    </SearchContainer>
  );
};

export default Search;
