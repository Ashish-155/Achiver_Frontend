import React from "react";
import Login from "../page/login/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../page/dashboard/Dashboard";
import WeekTarget from "../page/weekTarget/WeekTarget";
import WeekGoals from "../page/weekGoals/WeekGoals";
import WeekGoalsDetails from "../page/weekGoalsDetails/WeekGoalsDetails";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/week-target" element={<WeekTarget />} />
        <Route path="/week-goals" element={<WeekGoals />} />
        <Route path="/week-goals-details" element={<WeekGoalsDetails />} />
      </Routes>
    </>
  );
};

export default Router;
