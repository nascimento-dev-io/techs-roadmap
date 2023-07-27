import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import { SubRouteA } from "./pages/SubRouteA";
import { SubRouteB } from "./pages/SubRouteB";

import { ProtectedRoute } from "./ProtectedRoute";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
        <Route path="route-a/:name" element={<SubRouteA />} />
        <Route path="route-b/:name" element={<SubRouteB />} />
      </Route>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
