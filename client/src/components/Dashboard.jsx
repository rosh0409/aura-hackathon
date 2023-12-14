// import { Grid } from "@mui/material";
import React from "react";
import SideNav from "./SideNav";
import { Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import styled from "@emotion/styled";
// import Community from "../pages/Community";
import AddExpense from "../pages/AddExpense";
import AddBudget from "../pages/AddBudget";
import AddIncome from "../pages/AddIncome";
import TrackExpense from "../pages/TrackExpense";

const Dash = styled.div({
  display: "flex",
  width: "100vw",
  height: "100vh",
});

const Side = styled.div({
  width: "30%",
  height: "100vh",
  "@media (max-width:800px)": {
    display: "none",
  },
});
const Right = styled.div({
  width: "100%",
  height: "100vh",
});

const Dashboard = () => {
  return (
    <Dash>
      <Side>
        <SideNav />
      </Side>
      <Right>
        <Routes>
          <Route exact path="/dashboard/feed" element={<Feed />} />
          <Route exact path="/dashboard/addexpense" element={<AddExpense />} />
          <Route exact path="/dashboard/addbudget" element={<AddBudget/>}/>
          <Route exact path="/dashboard/addincome" element={<AddIncome/>}/>
          <Route exact path="/dashboard/addexpense" element={<TrackExpense/>}/>
        </Routes>
      </Right>
    </Dash>
  );
};

export default Dashboard;
