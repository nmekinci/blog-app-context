import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Auth from "../pages/Auth";
import PrivateRouter from "./PrivateRouter";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
import MyBlog from "../pages/MyBlog";
import BlogDetail from "../pages/BlogDetail";
import NotFound from "../pages/NotFound";
import BlogForm from "../components/blog/BlogForm";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Register from "../components/auth/Register";

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" index element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRouter />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="about" element={<About />} />
          <Route path="/my-blog" element={<MyBlog />} />
          {/* <Route path='/blog-detail' element={<BlogDetail/>}/> */}
          <Route path="/details/:id" element={<BlogDetail />} />
          <Route path="/blog-form" element={<BlogForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
