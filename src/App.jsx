import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import TodoList from "./Pages/TodoList";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import MyProfile from "./Pages/MyProfile";
import UserDashboard from "./Pages/UserDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import CreateCourse from "./Pages/CreateCourse";

import AdminRoute from "./Components/AdminRoute";
import UserRoute from "./Components/UserRoute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* USER ROUTES */}
<Route
  path="/user/dashboard"
  element={<UserRoute><UserDashboard /></UserRoute>}
/>
<Route
  path="/courses"
  element={<UserRoute><Courses /></UserRoute>}
/>
<Route
  path="/todo"
  element={<UserRoute><TodoList /></UserRoute>}
/>
<Route
  path="/profile"
  element={<UserRoute><MyProfile /></UserRoute>}
/>

{/* ADMIN ROUTES */}
<Route
  path="/admin/dashboard"
  element={<AdminRoute><AdminDashboard /></AdminRoute>}
/>
<Route
  path="/admin/create-course"
  element={<AdminRoute><CreateCourse /></AdminRoute>}
/>
<Route
  path="/admin/courses"
  element={<AdminRoute><Courses adminView={true} /></AdminRoute>}
/>
<Route
  path="/admin/todo"
  element={<AdminRoute><TodoList adminView={true} /></AdminRoute>}
/>


      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
