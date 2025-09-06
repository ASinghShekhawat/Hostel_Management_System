/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
// import FlashMessage from 'react-flash-message';
import Carousel from "react-bootstrap/Carousel";
import foundin from "../../Assets/founding_engineer.jpg";
import engineer2 from "../../Assets/engineer2.jpg";
import engineer3 from "../../Assets/engineer3.jpg";
import engineer5 from "../../Assets/engineer5.jpg";
import engineer6 from "../../Assets/engineer6.jpg";
import hostel_1 from "../../Assets/hostel_1.0.jpg";

class StudentDashboard extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-unused-vars
    this.state = {};
  }

  componentDidMount() {
    // eslint-disable-next-line no-useless-concat
  }

  render() {
    return (
      <>
        <br />
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "22px",
            color: "darkblue",
            fontWeight: "900",
            fontFamily: "inherit",
          }}
        >
          <h4>WELCOME TO MBM ENGINEERING COLLEGE HOSTEL MANAGEMENT SYSTEM</h4>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "green",
            fontStyle: "italic",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <h5>
            M.B.M. Engineering College is one of the oldest engineering colleges
            in India. Established on 15th August 1951 by the Government of
            Rajasthan, the college boasts of its high academic standards
          </h5>
        </div>
        <div
          style={{
            marginLeft: "2%",
            marginRight: "2%",
            paddingLeft: "20%",
            paddingRight: "20%",
            background: "#cdf",
            border: "0.5px solid blue",
            borderRadius: "5px",
          }}
        >
          <div>
            <Carousel>
              <Carousel.Item>
                <img className="w-100" src={foundin} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="w-100" src={engineer2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="w-100" src={engineer3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="w-100" src={engineer5} alt="Fourth slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="w-100" src={engineer6} alt="Fifth slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="w-100" src={hostel_1} alt="Sixth slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <br />
        <div
          style={{
            marginLeft: "2%",
            marginRight: "2%",
            padding: "20px 20px 20px 20px",
            background: "#004488",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h5 style={{ color: "yellow" }}>
              ANNOUCEMENT OF HOSTEL DETAILS FOR 2022-2023
            </h5>
          </div>
          <div style={{ background: "#CCDDFF", padding: "2% 2% 2% 2%" }}>
            <div style={{ textAlign: "center" }}>
              <h5 style={{ fontFamily: "serif" }}>
                <u>NOTICE</u>
              </h5>
            </div>
            <h5 style={{ fontFamily: "cursive" }}>
              The Following Interview boards are hereby constituted to conduct
              interview of candidates for scholarship of the session 2025-26
            </h5>
            <br />
            <h5 style={{ fontFamily: "cursive" }}>
              These Boards will conduct interview of the applicants for grading
              of candidates for various scholarship. The criteria and
              application form details the students will be made available at
              the time of interview. The Board Members are also requested to
              kindly verify the original documents and eligibility. They are
              also requested to prepare lists based on given criteria.
            </h5>
            <br />
            <br />
            <h5 style={{ fontFamily: "cursive" }}>
              Prof. (Dr) Rajendra Karwa
              <br />
              <br />
              Chairman Scholarship Committee
              <br />
              <br />
              MBM Engg. College Alumni Association
            </h5>
            <br />
            <br />
            <br />
            <h5 style={{ fontFamily: "cursive" }}>
              Here by all students are informed that application date for
              scholarship has been extended to 31-01-2023. Rest information
              remains the same. and Applications have also been invited for the
              Inspire-95 scholarship.
            </h5>
            <br />
            <br />
            <h5 style={{ fontFamily: "cursive" }}>
              (Er. Surender Surana)
              <br />
              <br />
              Joint Secretary
            </h5>
          </div>
        </div>
      </>
    );
  }
}

export default StudentDashboard;
