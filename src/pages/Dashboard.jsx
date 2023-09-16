import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlogCard from "../components/blog/BlogCard";
import { BlogContext } from "../context/BlogContext";



const Dashboard = () => {
  const { state, getBlogs} = React.useContext(BlogContext);

  useEffect(() => {
    getBlogs()
  }, [])
  
  return (
    <div>
      
      
      <BlogCard/>
      
      
    </div>
  );
};

export default Dashboard;
