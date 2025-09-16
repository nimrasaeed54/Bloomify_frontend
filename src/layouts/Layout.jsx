import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      {/* Padding so content doesn’t overlap navbar */}
      <main className="pt-16 px-6 max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
