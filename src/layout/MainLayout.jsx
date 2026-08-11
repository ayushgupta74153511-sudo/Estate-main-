import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import FloatingChat from "../components/common/FloatingChat";

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <FloatingChat />
      <Footer />
    </>
  );
}

export default MainLayout;