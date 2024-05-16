import React, { createContext, useContext, useState } from "react";

// Create the context
const SearchContext = createContext();

// Custom hook to use the context
export const useSearchContext = () => {
  return useContext(SearchContext);
};

// Provider component to wrap your application with
export const SearchProvider = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <SearchContext.Provider value={{ searchKeyword, setSearchKeyword }}>
      {children}
    </SearchContext.Provider>
  );
};
