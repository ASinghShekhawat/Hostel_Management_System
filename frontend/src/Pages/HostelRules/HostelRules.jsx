import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Row, Col, Table } from "reactstrap";
import { Link } from "react-router-dom";
import './HostelRules.scss';
function HostelRules() {
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
            <Row className='m-0'>
                <Col>
                    <br />
                    <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <h4>HOSTEL RULES</h4>
                    </div>
                    <br />
                    <div className='hostelRulesList' >
                        <Table striped responsive bordered>
                            <thead >
                                <strong>Hostel Rules</strong>
                                <tr>
                                    <th>#</th>
                                    <th>Description</th>
                                    <th></th>
                                    <th></th>
                                    <th>PDF Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Hostel Allotment Rules and Regulations to the particular concerned authority.</td>
                                    <td></td>
                                    <td></td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Rules for Managing the Hostels and Mess.</td>
                                    <td></td>
                                    <td></td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </Col>
            </Row>
            
        </div >
    );
}

export default HostelRules;