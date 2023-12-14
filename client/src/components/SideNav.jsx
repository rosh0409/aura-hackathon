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
import { Link } from "react-router-dom";
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
import MenuIcon from "@mui/icons-material/Menu";

const Profile = styled.div({
  display: "flex",
  justifyContent: "center",
  padding: "20px",
});

const linkStyle = {
  textDecoration: "none", // Remove underline
  color: "inherit", // Inherit text color from parent
};

const SIDE = styled.div({
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
      <Ham>
        <MenuIcon />
      </Ham>
      <SIDE>
        {/* profile photo section starts */}
        <Profile>
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              position: "fixed",
              top: "20px",
              left: "70px",
              border: "4px solid black",
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
              src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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

        <Box
          position={"fixed"}
          sx={{
            marginTop: "100px",
          }}
        >
          <Link to={"/dash/home"} style={linkStyle}>
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
          </Link>

          <List>
            <ListItem disablePadding>
              <Link to="/dash/addexp" style={linkStyle}>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <Inventory2Icon />
                  </ListItemIcon>
                  <ListItemText primary="Add Expense" />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
          <Link to={"/dash/track"} style={linkStyle}>
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
                    <AccessibilityIcon />
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
                    <BarChartIcon />
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
                    <QrCodeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Income" />
                </ListItemButton>
              </ListItem>
            </List>
          </Link>

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
