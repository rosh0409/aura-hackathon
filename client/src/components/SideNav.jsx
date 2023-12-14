import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Switch,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// import MenuIcon from '@mui/icons-material/Menu';
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import QrCodeIcon from "@mui/icons-material/QrCode";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import styled from "@emotion/styled";
import AddHomeIcon from '@mui/icons-material/AddHome';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import MenuIcon from "@mui/icons-material/Menu";

const Profile = styled.div({
  display: "flex",
  justifyContent: "center",
  paddingTop: "20px",
});

const linkStyle = {
  textDecoration: "none", // Remove underline
  color: "inherit", // Inherit text color from parent
};

const SIDE = styled.div({
  width:'25vw',
  height:'100vh',
  overflowY:'scroll',
  "@media (max-width:800px)": {
    transform: "translateX(-1000)",
  },
});

const Ham = styled.div({
  display: "none",

  "@media (max-width:800px)": {
    position: "absolute",
    top: 5,
    left: 5,
    display: "block",
  },
});

const SideNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SIDE>
        {/* profile photo section starts */}
        <Profile>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "red",
              borderRadius: "50%",
            }}
            onClick={() => {
              setOpen(true);
            }}
          ></div>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            onClose={() => {
              setOpen(false);
            }}
            open={open}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Profile>
        {/* profile photo ends */}

        {/* side nav bar starts here */}

        <Box
          
        >
          <NavLink
            to={"/dash/home"}
            className={({ isActive }) => {
              return isActive ? "text-blue-500" : "";
            }}
            style={linkStyle}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
            </List>
          </NavLink>
          <List>
            <ListItem disablePadding>
              <Link className={({ isActive }) => {
              return isActive ? "text-blue-500" : "";
            }} to="/dash/addexp" style={linkStyle}>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <Inventory2Icon />
                  </ListItemIcon>
                  <ListItemText primary="Add Expense" />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
          <Link to={"/dash/trackexpense"} style={linkStyle}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <EditCalendarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Track Expense" />
                </ListItemButton>
              </ListItem>
            </List>
          </Link>
          <Link to={"/dash/addbudget"} style={linkStyle}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <AddHomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Budget" />
                </ListItemButton>
              </ListItem>
            </List>
          </Link>
          <Link to={"/dash/trackbudget"} style={linkStyle}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <EditCalendarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Track Budget" />
                </ListItemButton>
              </ListItem>
            </List>
          </Link>
          <Link to={"/dash/addincome"} style={linkStyle}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <AccessibilityIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Income" />
                </ListItemButton>
              </ListItem>
            </List>
          </Link>
          <Link to={"/dash/trackincome"} style={linkStyle}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <DataUsageIcon />
                  </ListItemIcon>
                  <ListItemText primary="Track Income" />
                </ListItemButton>
              </ListItem>
            </List>
          </Link>
          <Link to={"/qr"} style={linkStyle}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <QrCodeIcon />
                  </ListItemIcon>
                  <ListItemText primary="QR Entry" />
                </ListItemButton>
              </ListItem>
            </List>
          </Link>
          <Link to={"/bar"} style={linkStyle}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <BarChartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Bar" />
                </ListItemButton>
              </ListItem>
            </List>
          </Link>
          <Link to={"/pie"} style={linkStyle}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <PieChartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Pie" />
                </ListItemButton>
              </ListItem>
            </List>
          </Link>

          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/">
                <ListItemIcon>
                  <DarkModeIcon />
                </ListItemIcon>
                <Switch />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        {/* side navbar ends */}
      </SIDE>
    </>
  );
};

export default SideNav;
