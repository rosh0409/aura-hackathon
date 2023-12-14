import React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/base/MenuItem";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

const DropdownMenu = () => {
  const createHandleMenuClick = (menuItem) => {
    return () => {
      
    };
  };
  return (
    <Dropdown>
      <MenuButton className="px-4 py-1 flex items-center bg-lime-400 rounded-md">
        <FilterListOutlinedIcon /> filters
      </MenuButton>
      <Menu className="bg-gray-100 py-1 px-3 rounded-md">
        <MenuItem className="ml-2 my-3" 
        onClick={createHandleMenuClick("All")}>
          All
          <hr className="h-1" />
        </MenuItem>
        <MenuItem
          className="ml-2 my-3"
          onClick={createHandleMenuClick("Education")}
        >
          Education
          <hr />
        </MenuItem>
        <MenuItem
          className="ml-2 my-3"
          onClick={createHandleMenuClick("Vacation")}
        >
          Vacation
          <hr className="h-1" />
        </MenuItem>
        <MenuItem
          className="ml-2 my-3"
          onClick={createHandleMenuClick("Grocery")}
        >
          Grocery
          <hr className="h-1" />
        </MenuItem>
        <MenuItem
          className="ml-2 my-3"
          onClick={createHandleMenuClick("Medical")}
        >
          Medical
          <hr className="h-1" />
        </MenuItem>
        <MenuItem
          className="ml-2 my-3"
          onClick={createHandleMenuClick("Travelling")}
        >
          Travelling
          <hr className="h-1" />
        </MenuItem>
        <MenuItem
          className="ml-2 my-3"
          onClick={createHandleMenuClick("Vehical")}
        >
          Vehical
          <hr className="h-1" />
        </MenuItem>
        <MenuItem
          className="ml-2 my-3"
          onClick={createHandleMenuClick("Electricity")}
        >
          Electricity
          <hr className="h-1" />
        </MenuItem>
        <MenuItem
          className="ml-2 my-3"
          onClick={createHandleMenuClick("Entertainment")}
        >
          Entertainment
          <hr className="h-1" />
        </MenuItem>
        <MenuItem
          className="ml-2 my-3"
          onClick={createHandleMenuClick("Subscriptions")}
        >
          Subscriptions
          <hr className="h-1" />
        </MenuItem>
        <MenuItem
          className="ml-2 my-3"
          onClick={createHandleMenuClick("Home rent")}
        >
          Home rent
          <hr className="h-1" />
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
