import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blogs from "./components/Blog";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import Project from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Project />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
