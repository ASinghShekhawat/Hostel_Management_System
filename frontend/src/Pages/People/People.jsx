import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import './People.scss';
function People() {
    return (
        <div className='componentColor'>
            <div style={{ backgroundColor: '#99cc99' }}>
        <div>
          <marquee behavior="scroll" direction="left" scrollamount="4,0">
            <font size="5"><b> (1)</b></font>&nbsp;<span style={{ color: '#000080', fontSize: '20px', fontStyle: 'oblique' }}>
              <strong>The respective informations and updates on the Hostel Allotment Dates and the respective rank lists will be displayed on the dashboard of the applicable students. In addition to that, the fee withdrawal procedures are neglected for now !!!!!</strong>
            </span>
          </marquee>
        </div>
      </div>
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
            <div>
                <div md={9}>
                    <br />
                    <div style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                        <h4>HOSTEL WARDENS</h4>
                    </div>
                    <br />
                    <div className='wardenCard' >
                        <img style={{ height: '150px' }} src="https://media.licdn.com/dms/image/C4D03AQGb8CI1C2O_TQ/profile-displayphoto-shrink_100_100/0/1622655782674?e=1682553600&v=beta&t=89pYfO25RqlceRgHfR8KLHqwqesxBSKsZMWWcn22gms" />
                        <div>
                            <h5 style={{ paddingLeft: '10px' }}>Professor&Head, Department of Computer Science & Engg,Faculty of Engineering,MBM University, Jodhpur</h5>
                            <br />
                            <h5 style={{ paddingLeft: '10px' }}>WARDEN HOSTEL NO. 2 [ARAWALI HOSTEL]</h5>
                            <h5 style={{ paddingLeft: '10px' }}>CONTACT : +91XXXXXXXXXX</h5>
                        </div>
                    </div>
                    <br /><br />
                    <div className='wardenCard'>
                        <img style={{ height: '150px' }} src="https://media.licdn.com/dms/image/C4D03AQGb8CI1C2O_TQ/profile-displayphoto-shrink_100_100/0/1622655782674?e=1682553600&v=beta&t=89pYfO25RqlceRgHfR8KLHqwqesxBSKsZMWWcn22gms" />
                        <div>
                            <h5 style={{ paddingLeft: '10px' }}>Professor&Head, Department of Training and Placement Cell,Faculty of Engineering,MBM University, Jodhpur</h5>
                            <br />
                            <h5 style={{ paddingLeft: '10px' }}>WARDEN HOSTEL NO. 3 [VIDHYANCHAL HOSTEL]</h5>
                            <h5 style={{ paddingLeft: '10px' }}>CONTACT : +91XXXXXXXXXX</h5>
                        </div>
                    </div>
                    <br /><br />

                    <div className='wardenCard'>
                        <img style={{ height: '150px' }} src="https://media.licdn.com/dms/image/C4D03AQGb8CI1C2O_TQ/profile-displayphoto-shrink_100_100/0/1622655782674?e=1682553600&v=beta&t=89pYfO25RqlceRgHfR8KLHqwqesxBSKsZMWWcn22gms" />
                        <div>
                            <h5 style={{ paddingLeft: '10px' }}>Professor&Head, Department of Computer Science & Engg,Faculty of Engineering,MBM University, Jodhpur</h5>
                            <br />
                            <h5 style={{ paddingLeft: '10px' }}>WARDEN HOSTEL NO. 2 [ARAWALI HOSTEL]</h5>
                            <h5 style={{ paddingLeft: '10px' }}>CONTACT : +91XXXXXXXXXX</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Row className='m-0'>
                <Col>
                    <br />
                    <h5>The Institute provide on campus boarding and lodging facility to regular students, the current accommodation capacity is, 3333 and 1058 <br /> <br /> for Boys and Girls, respectively. The messes in the hostel are managed and regulated by "MBM University Council".</h5>
                </Col>
            </Row> */}
        </div >
    );
}

export default People;