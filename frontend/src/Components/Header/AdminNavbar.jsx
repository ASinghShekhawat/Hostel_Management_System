import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <div style={{ backgroundColor: "#99cc99" }}>
      <div className="py-2 px-3 overflow-hidden position-relative">
        <div
          className="announcement-text"
          style={{
            color: "#000080",
            fontSize: "20px",
            fontStyle: "oblique",
            whiteSpace: "nowrap",
            animation: "scrollAnnouncement 20s linear infinite",
          }}
        >
          <strong>
            <span style={{ fontSize: "22px" }}>(1)</span> The respective
            informations and updates on the Hostel Allotment Dates and the
            respective rank lists will be displayed on the dashboard of the
            applicable students. In addition to that, the fee withdrawal
            procedures are neglected for now !!!!!
          </strong>
        </div>
      </div>
      <style jsx>{`
        @keyframes scrollAnnouncement {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          gap: "7%",
          marginTop: "2px",
          backgroundColor: "#99cc99",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          overflow: "auto",
        }}
      >
        <Link to="/administratorDashboard">
          <button style={buttonStyle}>Home</button>
        </Link>
        <Link to="/administratorFaqs">
          <button style={buttonStyle}>FAQs</button>
        </Link>
        <Link to="/administratorMessAndLodging">
          <button style={buttonStyle}>Hostel Mess</button>
        </Link>
        <Link to="/administratorAccount">
          <button style={buttonStyle}>Account</button>
        </Link>
        {/* <Link to="/administratorHostelForm">
          <button style={buttonStyle}>Hostel Form</button>
        </Link> */}
        <Link to="/administratorHelpDesk">
          <button style={buttonStyle}>Help Desk</button>
        </Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#004488",
  color: "yellow",
  border: "0.5px",
  borderRadius: "20%",
};
