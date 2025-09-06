import { Link } from "react-router-dom";
import "./People.scss";
import warden1 from "../../Assets/warden1.jpg";
import warden2 from "../../Assets/warden2.jpg";
import warden3 from "../../Assets/warden3.jpg";
import warden4 from "../../Assets/warden4.jpg";
import pdfFile from '../../Assets/Warden_Summary.pdf';

function People() {
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
        <a href="https://www.mbmalumni.org/">
          <div className="topLink">COMMITTEE</div>
        </a>
        <a href="https://www.mbm.ac.in/ug-pg-admissions">
          <div className="topLink">News</div>
        </a>
        <a href="https://www.mbm.ac.in/">
          <div className="topLink">ABOUT US</div>
        </a>
        <a href="https://www.mbm.ac.in/reach-mbm">
          <div className="topLink">CONTACT</div>
        </a>
      </div>
      <div>
        <div md={9}>
          <br />
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h4>HOSTEL WARDENS</h4>
          </div>
          <br />
          <div className="wardenCard">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <img style={{ height: "150px" }} src={warden1} alt="Warden 1" />
            <div>
              <h4 style={{ paddingLeft: "10px" }}>PROF. NC BHARMAR</h4>
              <br />
              <h5 style={{ paddingLeft: "10px" }}>
                Professor & Head, CSE Dept, MBM University
              </h5>
              <h5 style={{ paddingLeft: "10px" }}>
                Warden: Hostel No. 2 (Aravali), Hostel No. 3 (Vidhyanchal), &
                Hostel No. 4 (Kailash)
              </h5>
              <h5 style={{ paddingLeft: "10px" }}>CONTACT : +91-7658120080</h5>
              <div style={{ paddingLeft: "10px", marginTop: "10px" }}>
                <a href={pdfFile} download="Warden1_Details.pdf" style={{ textDecoration: 'none', backgroundColor: '#2196F3', color: 'white', padding: '8px 15px', borderRadius: '5px', fontSize: '14px' }}>
                  Download Warden Details
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="wardenCard">
            <img style={{ height: "150px" }} src={warden2} alt="Warden 2" />
            <div>
              <h4 style={{ paddingLeft: "10px" }}>PROF. PRAMOD TAK</h4>
              <br />
              <h5 style={{ paddingLeft: "10px" }}>
                 Professor & Head, Civil Dept, MBM University
              </h5>
              <h5 style={{ paddingLeft: "10px" }}>
                Warden: Hostel No. 1 (Shivalik) & Hostel No. 5 (Girnar)
              </h5>
              <h5 style={{ paddingLeft: "10px" }}>CONTACT : +91-9157985601</h5>
              <div style={{ paddingLeft: "10px", marginTop: "10px" }}>
                <a href={pdfFile} download="Warden2_Details.pdf" style={{ textDecoration: 'none', backgroundColor: '#2196F3', color: 'white', padding: '8px 15px', borderRadius: '5px', fontSize: '14px' }}>
                  Download Warden Details
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />

          <div className="wardenCard">
            <img style={{ height: "150px" }} src={warden3} alt="Warden 3" />
            <div>
              <h4 style={{ paddingLeft: "10px" }}>PROF. PS GOEL</h4>
              <br />
              <h5 style={{ paddingLeft: "10px" }}>
                Professor & Head, Mining Dept, MBM University
              </h5>
              <h5 style={{ paddingLeft: "10px" }}>
                Warden: Hostel No. 1 (Ashoka) & Hostel No. 2 (Nilgiri)
              </h5>
              <h5 style={{ paddingLeft: "10px" }}>CONTACT : +91-6577972461</h5>
              <div style={{ paddingLeft: "10px", marginTop: "10px" }}>
                <a href={pdfFile} download="Warden3_Details.pdf" style={{ textDecoration: 'none', backgroundColor: '#2196F3', color: 'white', padding: '8px 15px', borderRadius: '5px', fontSize: '14px' }}>
                  Download Warden Details
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="wardenCard">
            <img style={{ height: "150px" }} src={warden4} alt="Warden 4" />
            <div>
              <h4 style={{ paddingLeft: "10px" }}>PROF. NC BHARMAR</h4>
              <br />
              <h5 style={{ paddingLeft: "10px" }}>
                Professor & Head, Mechanical Dept, MBM University
              </h5>
              <h5 style={{ paddingLeft: "10px" }}>
                Warden: Hostel No. 3 (Dhauladhar)
              </h5>
              <h5 style={{ paddingLeft: "10px" }}>CONTACT : +91-8765098712</h5>
              <div style={{ paddingLeft: "10px", marginTop: "10px" }}>
                <a href={pdfFile} download="Warden4_Details.pdf" style={{ textDecoration: 'none', backgroundColor: '#2196F3', color: 'white', padding: '8px 15px', borderRadius: '5px', fontSize: '14px' }}>
                  Download Warden Details
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      {/* <Row className='m-0'>
                <Col>
                    <br />
                    <h5>The Institute provide on campus boarding and lodging facility to regular students, the current accommodation capacity is, 3333 and 1058 <br /> <br /> for Boys and Girls, respectively. The messes in the hostel are managed and regulated by "MBM University Council".</h5>
                </Col>
            </Row> */}
    </div>
  );
}

export default People;
