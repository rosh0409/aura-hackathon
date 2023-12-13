import { Avatar, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import QrCodeIcon from '@mui/icons-material/QrCode';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import styled from '@emotion/styled';


const Profile=styled.div({
  display:'flex',
  justifyContent:'center',
 padding:'20px',
});

const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "inherit", // Inherit text color from parent
  };


const SIDE=styled.div({
    '@media (max-width:800px)':{
        display:'none'
    }
})


const SideNav = () => {
const [open,setOpen]=useState(false);

  return (
    <SIDE>
        {/* profile photo section starts */}
        <Profile>  
        <div style={{
            width:'100px',
            height:'100px',
            borderRadius:'50%',
            position:'fixed',
            left:'60px',
           border:'4px solid black'
        }}
        onClick={()=>{setOpen(true)}}   
        >
 <Avatar onClick={()=>setOpen(true)} 
sx={{
  width:'100%',
  height:'100%'
}}
src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
/>
        </div>
        <Menu   
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       onClose={()=>{setOpen(false)}}
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </Profile>
{/* profile photo ends */}


{/* side nav bar starts here */}

        <Box position={'fixed'} sx={{
          marginTop:'120px'
        }}>
            <Link to={"/home"} style={linkStyle}>
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
        <Link to="/addexp" style={linkStyle}>
          <ListItemButton component="a">
            <ListItemIcon>
              <Inventory2Icon />
            </ListItemIcon>
            <ListItemText primary="Add Expense" />
          </ListItemButton>
        </Link>
      </ListItem>
    </List>
        <Link to={"/manage"} style={linkStyle}>
        <List>
            <ListItem disablePadding>
            <ListItemButton component="a" >
                <ListItemIcon>
                <EditCalendarIcon />
                </ListItemIcon>
                <ListItemText primary="Track Expense" />
            </ListItemButton>
            </ListItem>
        </List>
        </Link>
       
        <Link to={"/role"} style={linkStyle}>
        <List>
            <ListItem disablePadding>
            <ListItemButton component="a" >
                <ListItemIcon>
                <AccessibilityIcon />
                </ListItemIcon>
                <ListItemText primary="Role Based Access" />
            </ListItemButton>
            </ListItem>
        </List>
        </Link>
        <Link to={"/qr"} style={linkStyle}>
        <List>
            <ListItem disablePadding>
            <ListItemButton component="a" >
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
               
            <ListItemButton component="a" >
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
            <ListItemButton component="a" href='/'>
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
  )
}

export default SideNav
