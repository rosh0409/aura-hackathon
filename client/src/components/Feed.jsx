import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Feed.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// import { Grid } from '@mui/material';

// import SearchIcon from '@mui/icons-material/Search';
// import {useNavigate} from "react-router-dom";
import Community from "../pages/Community";
import axios from "axios";
// import Dashboard from "./Dashboard";

const Feed = () => {

  const [stats,setStats] = useState({
    total_income:0,
    total_expense:0,
    total_budget:0,
    total_saving:0
   })
  


  useEffect(()=>{
      axios.get("api/expense/fetchExpense").then((data)=>{
        console.log(data.data.total_income);
        setStats({...stats,
          total_income:data.data.total_income,
          total_expense:data.data.total_expense,
          total_budget:data.data.total_budget,
          total_saving:stats.total_income - stats.total_expense
        })
      })

  },[])



  return (
    <>
      <Box className={"feed-main"} p={2}>
        <Box
          display={"flex"}
          justifyContent={"right"}
        >
          <Stack flex={2}>
            <Typography variant="h6" color="initial">
              Welcome {}
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={3}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <Button variant="outlined" color="primary">
                <NotificationsIcon />
              </Button>
              <div
                style={{
                  position: "absolute",
                  top: "-8px", // Adjust the top position as needed
                  right: "-8px", // Adjust the right position as needed
                  backgroundColor: "red", // Background color of the number
                  color: "white", // Text color of the number
                  borderRadius: "50%", // Make it a circle
                  width: "20px", // Adjust the width and height as needed
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "14px", // Adjust the font size as needed
                }}
              >
                4 {/* Replace with the number you want to display */}
              </div>
            </div>
          </Stack>
        </Box>
        {/* //ends here */}

        {/* //new div */}
        <Box className={"ds-img numb"}>
          <Box>
            <Card sx={{ width: 190 }}>
              <CardActionArea>
                <CardContent sx={{ bgcolor: "darkorange" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Total Income
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {stats.total_income}

                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box>
            <Card sx={{ width: 170 }}>
              <CardActionArea>
                <CardContent sx={{ bgcolor: "red" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Total Expense
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {stats.total_expense}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box>
            <Card sx={{ width: 170 }}>
              <CardActionArea>
                <CardContent sx={{ bgcolor: "lightgreen" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Savings
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {stats.total_saving}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
        {/* //new div ends */}

        {/* //div */}
        <Box className={"chart"}>
          <Box></Box>
          <Box></Box>
        </Box>
        {/* //div ends */}

        <Box className={"avt"}>
          <List sx={{ width: "30%", bgcolor: "background.paper" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="data:image/jpeg;base64,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"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Apple Smart"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Timeless Trend
                    </Typography>
                    {" apple air watch "}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
          <List sx={{ width: "30%", bgcolor: "background.paper" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="data:image/jpeg;base64,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"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Apple Smart"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Timeless Trend
                    </Typography>
                    {" apple air watch "}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
          <List sx={{ width: "30%", bgcolor: "background.paper" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="data:image/jpeg;base64,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"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Apple Smart"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Timeless Trend
                    </Typography>
                    {" apple air watch "}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
          <List sx={{ width: "10%", bgcolor: "background.paper" }}>
            <ListItem alignItems="flex-start">
              <Button variant="outline">
                <NavigateNextIcon />
              </Button>
            </ListItem>
          </List>
        </Box>

        {/* //main div ends */}
      </Box>

      <Community />
    </>
  );
};

export default Feed;
