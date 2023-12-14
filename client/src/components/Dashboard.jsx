import AddBudget from '../pages/AddBudget'
import AddExpense from '../pages/AddExpense';
import React from "react";
import SideNav from "./SideNav";
import { Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import styled from "@emotion/styled";
import TrackExpense from '../pages/TrackExpense';
import BarChart from './BarChart';
import CurveGraph from './CurveGraph';
import PieGraph from './PieGraph';

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
          <Route path="/home" element={<Feed />} />
          <Route path="/addexp" element={<AddExpense />} />
          <Route exact path="/addbudget" element={<AddBudget/>}/>
          <Route exact path="/track" element={<TrackExpense/>}/>
          <Route path="/bar" element={<BarChart />} />
          <Route path="/line" element={<CurveGraph />} />
          <Route path="/pie" element={<PieGraph />} />
        </Routes>
      </Right>
    </Dash>
  );
};

export default Dashboard;
