import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import LogementDetail from "../pages/LogementDetail";

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/logement/:id" element={<LogementDetail />} />
      </Routes>
    </Layout>
  );
}