import { Outlet } from "react-router-dom";
import ScrollManager from "../ScrollManager.jsx";
import FloatingActions from "./FloatingActions.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import TopBar from "./TopBar.jsx";

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <TopBar />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
