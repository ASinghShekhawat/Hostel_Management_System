import { Link } from "react-router-dom";

export default function StudentNavbar() {
  return (
    <div style={{ backgroundColor: "#99cc99" }}>
      <div>
        {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
        <marquee behavior="scroll" direction="left" scrollamount="4">
          <font size="5">
            <b>(1)</b>
          </font>
          &nbsp;
          <span
            style={{
              color: "#000080",
              fontSize: "20px",
              fontStyle: "oblique",
            }}
          >
            <strong>
              The respective informations and updates on the Hostel Allotment
              Dates and the respective rank lists will be displayed on the
              dashboard of the applicable students. In addition to that, the fee
              withdrawal procedures are neglected for now !!!!!
            </strong>
          </span>
        </marquee>
      </div>

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
        <Link to="/studentDashboard">
          <button style={buttonStyle}>Home</button>
        </Link>
        <Link to="/faqs">
          <button style={buttonStyle}>FAQs</button>
        </Link>
        <Link to="/messAndLodging">
          <button style={buttonStyle}>Hostel Mess</button>
        </Link>
        <Link to="/account">
          <button style={buttonStyle}>Account</button>
        </Link>
        {/* <Link to="/hostelForm">
          <button style={buttonStyle}>Hostel Form</button>
        </Link> */}
        <Link to="/helpDesk">
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
