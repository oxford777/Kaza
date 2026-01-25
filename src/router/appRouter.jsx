import { Routes, Route } from "react-router";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Error404 from "../pages/Error404";

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Route "catch-all" : toute URL inconnue */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
}