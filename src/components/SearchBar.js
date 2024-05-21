import React from "react";
import { SearchInput, SearchContainer } from "./NavbarElements";
import { useSearchContext } from "./SearchContext";

const Search = () => {
  const { searchKeyword, setSearchKeyword } = useSearchContext();

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchKeyword}
        onChange={handleInputChange}
      />
      {/* You can add other search-related elements here */}
    </SearchContainer>
  );
};

export default Search;
