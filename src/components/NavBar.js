import React from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  WorldIcon,
  Flag,
  Home,
  Politics,
  Business,
  Health,
} from "./NavbarElements";

import Search from "./SearchBar";
import { SearchProvider } from "./SearchContext"; // Import the SearchProvider

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activestyle>
            <Home />
            Home
          </NavLink>
          <NavLink to="/National" activestyle>
            <Flag />
            Nigerian
          </NavLink>
          <NavLink activestyle>
            <WorldIcon />
            Environment
          </NavLink>
          <NavLink activestyle>
            <Politics />
            Politics
          </NavLink>
          <NavLink activestyle>
            <Business />
            Business
          </NavLink>
          <NavLink activeStyle>
            <Health />
            Health
          </NavLink>
          <NavLink activeStyle>
            {/* Wrap the Search component with SearchProvider */}
            <SearchProvider>
              <Search />
            </SearchProvider>
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink>Sign In</NavBtnLink>
          <NavBtnLink>Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
