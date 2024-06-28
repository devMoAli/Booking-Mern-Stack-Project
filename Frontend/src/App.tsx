import Layout from "./Layouts/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React from "react";
import MyBookings from "./Pages/MyBookings";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import AddHotel from "./Pages/AddHotel";
import { useAppContext } from "./Context/AppContext";
import MyHotels from './Pages/MyHotels';
import EditHotel from "./Pages/EditHotel";
import SearchPage from "./Pages/SearchPage";
import HotelDetails from "./Pages/HotelDetails";

const App = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home Page</p>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <SearchPage/>
            </Layout>
          }
        />
         <Route
          path="/detail/:hotelId"
          element={
            <Layout>
              <HotelDetails />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="/my-bookings"
          element={
            <Layout>
              <MyBookings />
            </Layout>
          }
        />
      {isLoggedIn && (
        <>
        <Route
         path="/add-hotel"
         element={
           <Layout>
             <AddHotel />
           </Layout>
         }
       />
       <Route
         path="/edit-hotel/:hotelId"
         element={
           <Layout>
             <EditHotel />
           </Layout>
         }
       />
        <Route
         path="/my-hotels"
         element={
           <Layout>
             <MyHotels />
           </Layout>
         }
       />

       </>
      )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
