import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0F172A] flex">
      
      {/* SIDEBAR */}
      <div className="hidden md:block w-64 fixed h-screen">
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 md:ml-64 px-4 py-6 md:p-6">
        <Navbar />

        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;