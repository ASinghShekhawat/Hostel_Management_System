import React from 'react';
// import FlashMessage from 'react-flash-message';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
class AdministrationDashboard extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-unused-vars
    this.state = {

    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-useless-concat

  }

  render() {
    return (
      <>
        <div style={{ backgroundColor: '#99cc99' }}>
        <div>
          <marquee behavior="scroll" direction="left" scrollamount="4,0">
            <font size="5"><b> (1)</b></font>&nbsp;<span style={{ color: '#000080', fontSize: '20px', fontStyle: 'oblique' }}>
              <strong>The respective informations and updates on the Hostel Allotment Dates and the respective rank lists will be displayed on the dashboard of the applicable students. In addition to that, the fee withdrawal procedures are neglected for now !!!!!</strong>
            </span>
          </marquee>
        </div>
        
        {/* <div style={{ textAlign: 'center' }}><h2><u>STUDENT DASHBOARD</u></h2></div> */}
        <div style={{ display: 'flex', gap: '7%', marginTop: '2px', backgroundColor: '#99cc99', height: '40px', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}>
          <Link to="/administrationDashboard"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Home</button></Link>
          <Link to="/administratorFaqs"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>FAQs</button></Link>
          <Link to="/administratorMessAndLodging"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Hostel Mess</button></Link>
          <Link to="/administratorAccount"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Account</button></Link>
          <Link to="/administratorHostelForm"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Hostel Form</button></Link >
          <Link to="/administratorHelpDesk"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Help Desk</button></Link >

        </div >
        </div>
        <br />
        <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: '22px', color: 'darkblue', fontWeight: '900', fontFamily: 'inherit' }}>
          <h4>WELCOME TO MBM ENGINEERING COLLEGE HOSTEL MANAGEMENT SYSTEM</h4>
        </div>
        <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: 'green', fontStyle: 'italic', paddingLeft: '20px', paddingRight: '20px' }}>
          <h5>M.B.M. Engineering College is one of the oldest engineering colleges in India. Established on 15th August 1951 by the Government of Rajasthan, the college boasts of its high academic standards</h5>
        </div>
        <div style={{ marginLeft: '2%', marginRight: '2%', paddingLeft: '20%', paddingRight: '20%', background: '#cdf', border: '0.5px solid blue', borderRadius: '5px' }}>
          <div>
            <Carousel>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://www.mbmalumni.org/gjmphotos/fsize/b68_mbm-mining.jpg"
                  alt="First slide"
                />
                {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://www.mbmalumni.org/gjmphotos/fsize/CP_cc_dsc_0290.jpg"
                  alt="Second slide"
                />

                {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://www.mbmalumni.org/gjmphotos/fsize/CP_cc_dsc_0293.jpg"
                  alt="Third slide"
                />

                {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <br />
        <div style={{ marginLeft: '2%', marginRight: '2%', padding: '20px 20px 20px 20px', background: '#004488' }}>
          <div style={{ textAlign: 'center' }}>
            <h5 style={{ color: 'yellow' }}>ANNOUCEMENT OF HOSTEL DETAILS FOR 2022-2023</h5>
          </div>
          <div style={{ background: '#CCDDFF', padding: '2% 2% 2% 2%' }}>
            <div style={{ textAlign: 'center' }}>
              <h5 style={{ fontFamily: 'serif' }}><u>NOTICE</u></h5>
            </div>
            <h5 style={{ fontFamily: 'cursive' }}>
              The Following Interview boards are hereby constituted to conduct interview of candidates for scholarship of the session 2022-23
            </h5>
            <br />
            <h5 style={{ fontFamily: 'cursive' }}>
              These Boards will conduct interview of the applicants for grading of candidates for various scholarship. The criteria and application form details the students will be made available at the time of interview. The Board Members are also requested to kindly verify the original documents and eligibility. They are also requested to prepare lists based on given criteria.
            </h5>
            <br /><br />
            <h5 style={{ fontFamily: 'cursive' }}>
              Prof. (Dr) Rajendra Karwa
              <br /><br />
              Chairman Scholarship Committee
              <br /><br />
              MBM Engg. College Alumni Association
            </h5>
            <br /><br /><br />
            <h5 style={{ fontFamily: 'cursive' }}>
              Here by all students are informed that application date for scholarship has been extended to 31-01-2023. Rest information remains the same. and Applications have also been invited for the Inspire-95 scholarship.
            </h5>
            <br />
            <br />
            <h5 style={{ fontFamily: 'cursive' }}>
              (Er. Surender Surana)
              <br /><br />
              Joint Secretary
            </h5>
          </div>
        </div>
      </>
    );
  }
}

export default AdministrationDashboard;