// import { Grid } from "@mui/material";
import React from "react";
import SideNav from "./SideNav";
import { Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import styled from "@emotion/styled";
// import Community from "../pages/Community";
import AddExpense from "../pages/AddExpense";
import AddBudget from "../pages/AddBudget";

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
          <Route path="/home" element={<Feed />} />
          <Route path="/addexp" element={<AddExpense />} />
          <Route exact path="/addbudget" element={<AddBudget/>}/>
        </Routes>
      </Right>
    </Dash>
  );
};

export default Dashboard;
