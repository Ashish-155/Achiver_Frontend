import React from 'react'
import Login from '../page/login/Login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../page/dashboard/Dashboard';
import WeekTarget from '../page/weekTarget/WeekTarget';
import WeekGoals from '../page/weekGoals/WeekGoals';
import WeekGoalsDetails from '../page/weekGoalsDetails/WeekGoalsDetails';
import Profile from '../page/profile/Profile';
import Welcome from '../page/welcome/Welcome';
import AllGoals from '../page/allGoals/AllGoals';
// import AllGoalsBox from '../page/allGoalsBox/AllGoalsBox';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/week-target" element={<WeekTarget />} />
        <Route path="/week-goals/:id" element={<WeekGoals />} />
        <Route path="/week-goals-details" element={<WeekGoalsDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/all-goals" element={<AllGoals />} />
        {/* <Route path="/all-goals-box" element={<AllGoalsBox />} /> */}

      </Routes>
    </>
  );
};

export default Router;
