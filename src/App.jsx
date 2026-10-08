import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const ServicesPage = lazy(() => import("./pages/ServicesPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="page-loader">Loading…</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
