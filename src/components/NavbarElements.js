// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled, { css } from "styled-components";

import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";

export const WorldIcon = styled(RecyclingOutlinedIcon)`
  margin-right: 7px;
`;

export const Home = styled(HomeOutlinedIcon)`
  margin-right: 7px;
`;

export const Flag = styled(FlagOutlinedIcon)`
  margin-right: 7px;
`;

export const Politics = styled(BalanceOutlinedIcon)`
  margin-right: 7px;
`;

export const Business = styled(BusinessCenterOutlinedIcon)`
  margin-right: 7px;
`;

export const Lifestyle = styled(NightlifeIcon)`
  margin-right: 7px;
`;

export const Nav = styled.nav`
  margin-bottom: 10px;
  margin-top: 10px;
  height: 70px;
  display: flex;
  justify-content: space-between; /* Align items to the start and end */
  align-items: center; /* Vertically center items */
  padding: 0 50px; /* Adjusted padding */
`;
export const AnimatedNavbar = styled(Nav)`
  /* Add animation styles here */
  background: linear-gradient(
    to right,
    #ff0000,
    #00ff00,
    #0000ff
  ); /* Same gradient as logo */
  background-size: 200% 200%; /* Adjust the size of the gradient */
  animation: gradientAnimation 5s infinite alternate;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;

export const NavLink = styled(Link)`
  color: white;
  font-family: "Figtree", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Figtree", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 17px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 40%;

  &:hover {
    transition: all 0.1s ease-in-out;
    color: green;
    font-size: 20px; /* Increase font size on hover */
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 180px;
`;

export const Icon = styled(SearchIcon)`
  color: black;
  transition: transform 0.3s ease-in-out;
  margin-left: 5px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SearchInput = styled.input`
  padding: 5px; /* Adjust the padding of the input */
  border: 1px solid black; /* Add border */
  border-radius: 10px; /* Add border radius */
  font-size: 16px; /* Adjust the font size of the text */
  color: black; /* Set text color */
  ::placeholder {
    color: #fff; /* Set placeholder color */
  }
  margin-left: 15px;
`;
