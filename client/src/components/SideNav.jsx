import {
  Avatar,
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
import AddHomeIcon from "@mui/icons-material/AddHome";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";

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
  width: "25vw",
  height: "100vh",
  overflowY: "scroll",
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
  const [user, setUser] = useState({});
  axios
    .get("/api/user/get-user", {
      withCredentials: true,
    })
    .then((data) => {
      // console.log(data);
      setUser(data.data.user);
      console.log(user);
    })
    .catch((error) => {
      return new Error(error.message);
    });

  return (
    <>
      <SIDE>
        {/* profile photo section starts */}
        <Profile>
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <Avatar
              sx={{
                width: "100%",
                height: "100%",
              }}
              alt="Remy Sharp"
              src={
                user
                  ? `http://localhost:8000/static/${user.profile}`
                  : "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }
            />
          </div>
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

        <Box>
          <NavLink
            to={"/dash"}
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
              <Link
                className={({ isActive }) => {
                  return isActive ? "text-blue-500" : "";
                }}
                to="/dash/addexp"
                style={linkStyle}
              >
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
          <Link to={"/dash/add-budget"} style={linkStyle}>
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
          <Link to={"/dash/add-income"} style={linkStyle}>
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

          {/* <Link to={"/dash/trackbudget"} style={linkStyle}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <BarChartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Track Budget" />
                </ListItemButton>
              </ListItem>
            </List>
          </Link> */}

          {/* <Link to={"/dash/add-income"} style={linkStyle}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <QrCodeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Income" />
                </ListItemButton>
              </ListItem>
            </List>
          </Link> */}
          <Typography
            variant="p"
            sx={{ position: "relative", marginLeft: 2, fontSize: "16px" }}
          >
            Analysis Graph
          </Typography>
          <Link to={"/dash/bar"} style={linkStyle}>
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
          <Link to={"/dash/pie"} style={linkStyle}>
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
