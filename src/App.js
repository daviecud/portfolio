import {BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost"
import Post from "./components/Post";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/post/:slug" element={<SinglePost />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
