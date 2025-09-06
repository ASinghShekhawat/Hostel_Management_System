import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import AdminNavbar from "./AdminNavbar";
import StudentNavbar from "./StudentNavbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mbmLogo from "../../Assets/mbm_logo.jpg";
export default function Header() {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || null
  );
  const [userRole, setUserRole] = useState(
    localStorage.getItem("userRole") || null
  );
  const navigate = useNavigate();

  // Effect to handle localStorage changes
  useEffect(() => {
    // Function to handle storage changes
    const handleStorageChange = () => {
      setUserName(localStorage.getItem("userName") || null);
      setUserRole(localStorage.getItem("userRole") || null);
    };

    // Set up event listener for storage changes
    window.addEventListener("storage", handleStorageChange);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    setUserName(null);
    setUserRole(null);
    toast.success("Logged out successfully!");
    navigate("/sign-in-page");
  };

  return (
    <>
      <div className="navbar">
        <div className="div1">
          <img
            alt="MBM Logo"
            className="img1"
            src={mbmLogo}
          />
        </div>
        <div className="div2">
          <span>&nbsp;MBM Engineering College Hostels</span>
          <br />
          <span3>
            &nbsp;&nbsp;Arora Circle, Ratanada, Jodhpur-342 011
            <br />
            <hr style={{ color: "white", height: "1px" }} />
            <span3>
              &nbsp;&nbsp;Email: mbmhostel@yahoo.com,
              connect@mbmhostelauthority.org
              <br />
              <span3>
                &nbsp;&nbsp;Mobile:&nbsp;8777071047&nbsp;&nbsp;Phone:&nbsp;033-24567890
              </span3>
            </span3>
          </span3>
        </div>

        <div className="div3">
          <div className="link">
            {userName ? (
              <>
                <Link
                  to={
                    localStorage.getItem("userRole") === "admin"
                      ? "/administratorAccount"
                      : "/account"
                  }
                  title="My account"
                >
                  {userName || "User"}
                </Link>
                <br />
                <Link
                  to="localhost:3002"
                  title="Log out"
                  onClick={handleLogout}
                >
                  Log out
                </Link>
              </>
            ) : (
              <Link to="/sign-in-page" title="Login/Sign up">
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="navbar-wrapper">
        {userRole === "admin" && <AdminNavbar />}
        {userRole === "student" && <StudentNavbar />}
      </div>
    </>
  );
}
