import { Link } from "react-router-dom";
import { Col, Row, Table } from "reactstrap";
import "./HostelRules.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import pdfFile from "../../Assets/Hostel_Rules_Summary.pdf";

function HostelRules() {
  return (
    <div className="componentColor">
      <div
        style={{
          display: "flex",
          gap: "7%",
          marginTop: "2px",
          backgroundColor: "#2196F3",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          overflow: "auto",
        }}
      >
        <Link to="/">
          <div className="topLink">HOME</div>
        </Link>
        <Link to="/people">
          <div className="topLink">People</div>
        </Link>
        <Link to="/hostel-details">
          <div className="topLink">Hostels</div>
        </Link>
        <Link to="/hostel-rules">
          <div className="topLink">Rules</div>
        </Link>
        <a
          href="https://www.mbmalumni.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="topLink">COMMITTEE</div>
        </a>
        <a
          href="https://www.mbm.ac.in/ug-pg-admissions"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="topLink">News</div>
        </a>
        <a
          href="https://www.mbm.ac.in/"
          target='_blank'
          rel="noopener noreferrer"
        >
          <div className="topLink">ABOUT US</div>
        </a>
        <a
          href="https://www.mbm.ac.in/reach-mbm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="topLink">CONTACT</div>
        </a>
      </div>
      <Row className="m-0">
        <Col>
          <br />
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h4>HOSTEL RULES</h4>
          </div>
          <br />
          <div className="hostelRulesList">
            <div className="table-title">Hostel Rules and Regulations</div>
            <Table striped responsive bordered hover>
              <thead>
                <tr>
                  <th width="5%">#</th>
                  <th width="70%">Description</th>
                  <th width="25%">Document</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Hostel Allotment Rules and Regulations to the particular
                    concerned authority.
                  </td>
                  <td>
                    <a
                      href={pdfFile}
                      download="Hostel_Allotment_Rules.pdf"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#2196F3",
                        color: "white",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        fontSize: "14px",
                      }}
                    >
                      Download PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Rules for Managing the Hostels and Mess.</td>
                  <td>
                    <a
                      href={pdfFile}
                      download="Hostel_Mess_Rules.pdf"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#2196F3",
                        color: "white",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        fontSize: "14px",
                      }}
                    >
                      Download PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Disciplinary Rules for Hostel Residents.</td>
                  <td>
                    <a
                      href={pdfFile}
                      download="Disciplinary_Rules.pdf"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#2196F3",
                        color: "white",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        fontSize: "14px",
                      }}
                    >
                      Download PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Hostel Fee Structure and Payment Guidelines.</td>
                  <td>
                    <a
                      href={pdfFile}
                      download="Fee_Structure.pdf"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#2196F3",
                        color: "white",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        fontSize: "14px",
                      }}
                    >
                      Download PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Hostel Leave Application Process and Guidelines.</td>
                  <td>
                    <a
                      href={pdfFile}
                      download="Leave_Guidelines.pdf"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#2196F3",
                        color: "white",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        fontSize: "14px",
                      }}
                    >
                      Download PDF
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HostelRules;
