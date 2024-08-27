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
import ProtectedRoute from '../ProtectedRoute';
// import AllGoalsBox from '../page/allGoalsBox/AllGoalsBox';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/welcome" element={

          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        } />


        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

        <Route path="/week-target" element={
          // <WeekTarget />
          <ProtectedRoute>
            <WeekTarget />
          </ProtectedRoute>
        } />
        <Route path="/week-goals/:id" element={
          // <WeekGoals />
          <ProtectedRoute>
            <WeekGoals />
          </ProtectedRoute>
        } />

        <Route path="/week-goals-details/:id" element={
          // <WeekGoalsDetails />
          <ProtectedRoute>
            <WeekGoalsDetails />
          </ProtectedRoute>
        } />

        <Route path="/profile" element={
          // <Profile />
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

        <Route path="/all-goals" element={
          // <AllGoals />
          <ProtectedRoute>
            <AllGoals />
          </ProtectedRoute>

        } />


        {/* <Route path="/all-goals-box" element={<AllGoalsBox />} /> */}

      </Routes>
    </>
  );
};

export default Router;
