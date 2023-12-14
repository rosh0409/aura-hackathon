import AddBudget from "../pages/AddBudget";
import AddExpense from "../pages/AddExpense";
import React from "react";
import SideNav from "./SideNav";
import { Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import styled from "@emotion/styled";
import TrackExpense from "../pages/TrackExpense";
import TrackBudget from "../pages/TrackBudget";
import AddIncome from "../pages/AddIncome";
import TrackIncome from "../pages/TrackIncome";
import BarChart from "../pages/BarChart";
import CurveGraph from "../pages/CurveGraph";
import PieGraph from "../pages/PieGraph";

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
      {/* //   <Side>
  // <SideNav/>
  //   </Side>
  //   <Right>
  //  <Routes>
  //   <Route path="/home" element={<Feed />} />
  //   <Route path="/addexp" element={<AddExpense />} />
  //  </Routes>
  //   </Right> */}
      <Side>
        <SideNav />
      </Side>
      <Right>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/addexp" element={<AddExpense />} />
          <Route exact path="/addbudget" element={<AddBudget />} />
          <Route exact path="/trackexpense" element={<TrackExpense />} />
          <Route exact path="/trackbudget" element={<TrackBudget />} />
          <Route exact path="/addincome" element={<AddIncome />} />
          <Route exact path="/trackincome" element={<TrackIncome />} />
          <Route path="/bar" element={<BarChart />} />
          <Route path="/line" element={<CurveGraph />} />
          <Route path="/pie" element={<PieGraph />} />
        </Routes>
      </Right>
    </Dash>
  );
};

export default Dashboard;
