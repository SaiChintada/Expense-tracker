import Navbar from "./Navbar";

const Layout = ({
  children,
}) => {

  return (

    <div className="layout">

      <Navbar />

      <div className="main-content">

        {children}

      </div>

    </div>

  );
};

export default Layout;