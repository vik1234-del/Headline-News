import React from "react";
import {
  AnimatedNavbar,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  WorldIcon,
  Flag,
  Home,
  Politics,
  Business,
  Lifestyle,
  SearchContainer,
} from "./NavbarElements";

import Search from "./SearchBar";
import { SearchProvider } from "./SearchContext"; // Import the SearchProvider

const Navbar = () => {
  return (
    <>
      <AnimatedNavbar>
        <NavMenu>
          <NavLink to="/" activestyle>
            <Home />
            Home
          </NavLink>
          <NavLink to="/Nigerian" activestyle>
            <Flag />
            Nigerian
          </NavLink>
          <NavLink to="/Environment" activestyle>
            <WorldIcon />
            Environment
          </NavLink>
          <NavLink to="/Politics" activestyle>
            <Politics />
            Politics
          </NavLink>
          <NavLink to="/Business" activestyle>
            <Business />
            Business
          </NavLink>
          <NavLink to="/Entertainment" activeStyle>
            <Lifestyle />
            Entertainment
          </NavLink>
          <SearchContainer>
            {/* Wrap the Search component with SearchProvider */}
            <SearchProvider>
              <Search />
            </SearchProvider>
          </SearchContainer>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink>Sign In</NavBtnLink>
          <NavBtnLink>Sign Up</NavBtnLink>
        </NavBtn> */}
      </AnimatedNavbar>
    </>
  );
};

export default Navbar;
