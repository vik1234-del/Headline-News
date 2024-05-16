// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
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

export const Health = styled(LocalHospitalOutlinedIcon)`
  margin-right: 7px;
`;

export const Nav = styled.nav`
  background: #34495e; /* Updated background color */
  height: 70px;
  display: flex;
  justify-content: space-between; /* Align items to the start and end */
  align-items: center; /* Vertically center items */
  padding: 0 20px; /* Adjusted padding */
`;

export const NavLink = styled(Link)`
  color: white;
  font-family: "Figtree", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Figtree", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 40%;
  &:hover {
    transition: all 0.1s ease-in-out;
    color: #808080;
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

export const NavBtnLink = styled(Link)`
  background: #3498db; /* Button background color */
  color: #ecf0f1; /* Button text color */
  font-family: "Figtree", sans-serif;
  font-size: 16px;
  padding: 10px 22px;
  border-radius: 4px;
  margin-left: 20px; /* Add space between buttons */
  margin-right: 10px; /* Add margin to the right */
  text-decoration: none;
  transition: background 0.2s ease-in-out; /* Added smooth transition */
  &:hover {
    background: #2980b9; /* Button hover background color */
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled(SearchIcon)`
  color: #fff;
  transition: transform 0.3s ease-in-out;
  margin-left: 5px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SearchInput = styled.input`
  padding: 5px; /* Adjust the padding of the input */
  border: 1px solid #ccc; /* Add border */
  border-radius: 10px; /* Add border radius */
  font-size: 16px; /* Adjust the font size of the text */
  color: black; /* Set text color */
  ::placeholder {
    color: #fff; /* Set placeholder color */
  }
  margin-left: 15px;
`;
