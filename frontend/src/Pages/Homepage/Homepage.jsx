import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import entrance from '../../Assets/entrance.jpg';
import front from '../../Assets/front.jpg';
import hostel_1 from '../../Assets/hostel_1.0.jpg';
import map from '../../Assets/map.jpg';
import './Homepage.scss';

function Homepage() {
  return (
    <div>
      <div style={{ display: 'flex', gap: '7%', marginTop: '2px', backgroundColor: '#2196F3', height: '40px', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}>
        <Link to="/">
          <div className='topLink'>
            HOME
          </div>
        </Link>
        <Link to="/people">
          <div className='topLink'>
            People
          </div>
        </Link>
        <Link to="/hostel-details">
          <div className='topLink'>
            Hostels
          </div>
        </Link>
        <Link to="/hostel-rules">
          <div className='topLink'>
            Rules
          </div>
        </Link>
        <a href="https://www.mbmalumni.org/">
          <div className='topLink'>
            COMMITTEE
          </div>
        </a>
        <a href='https://www.mbm.ac.in/ug-pg-admissions'>
          <div className='topLink'>
            News
          </div>
        </a>
        <a href="https://www.mbm.ac.in/">
          <div className='topLink'>
            ABOUT US
          </div>
        </a>
        <a href="https://www.mbm.ac.in/reach-mbm">
          <div className='topLink'>
            CONTACT
          </div>
        </a>
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
                src={entrance}
                alt="First slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-100"
                src={map}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-100"
                src={front}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-100"
                src={hostel_1}
                alt="Fourth slide"
              />
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
            The Following Interview boards are hereby constituted to conduct interview of candidates for hostel allotment of the session 2025-26
          </h5>
          <br />
          <h5 style={{ fontFamily: 'cursive' }}>
            These Boards will conduct interview of the applicants for grading of candidates for various hostels. The criteria and application form details the students will be made available at the time of interview. The Board Members are also requested to kindly verify the original documents and eligibility. They are also requested to prepare lists based on given criteria.
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
            Here by all students are informed that application date for hostels has been extended to 31-01-2023. Rest information remains the same. and Applications have also been invited for the hostel allotment.
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
      <br />
    </div >
  );
}

export default Homepage;