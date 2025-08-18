import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Row, Col, Table } from "reactstrap";
import { Link } from "react-router-dom";
import './HostelDetails.scss';
function HostelDetails() {
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
                        <h4>HOSTEL DETAILS</h4>
                    </div>
                    <br />
                    <div className='hostelDetailsList' >
                        <Table striped responsive bordered>
                            <thead >
                                <strong>Boys Hostel</strong>
                                <tr>
                                    <th>#</th>
                                    <th>Name of the Hostel</th>
                                    <th>Applicable for Year</th>
                                    <th>FEE</th>
                                    <th>Occupancy</th>
                                    <th>WIFI</th>
                                    <th>Capacity</th>
                                    <th>Warden Name</th>
                                    <th>Warden Contact Number</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>ARAWALI</td>
                                    <td>4th</td>
                                    <td>10470</td>
                                    <td>Single</td>
                                    <td>YES</td>
                                    <td>25</td>
                                    <td>Prof. NC Bharwar</td>
                                    <td>+91XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>VIDHANCHAL</td>
                                    <td>4th</td>
                                    <td>9700</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>35</td>
                                    <td>Prof. Sunil Sharma</td>
                                    <td>+91XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>TAKSHILA</td>
                                    <td>3rd</td>
                                    <td>10000</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>50</td>
                                    <td>Prof. A M MEENA</td>
                                    <td>+91XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>PARIHAR</td>
                                    <td>2nd</td>
                                    <td>9800</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>65</td>
                                    <td>Prof. S S SANKHLA</td>
                                    <td>+91XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>NALANDA</td>
                                    <td>2nd</td>
                                    <td>9800</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>45</td>
                                    <td>Prof. P M MEENA</td>
                                    <td>+91XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>GATHIAWADI</td>
                                    <td>1</td>
                                    <td>10420</td>
                                    <td>Triple</td>
                                    <td>YES</td>
                                    <td>57</td>
                                    <td>Prof. P M MEENA</td>
                                    <td>+91XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>TOTAL</td>
                                    <td>397</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <br /><br />
                    <div className='hostelDetailsList'>
                        <Table striped responsive bordered>
                            <thead >
                                <strong>Girls Hostel</strong>
                                <tr>
                                    <th>#</th>
                                    <th>Name of the Hostel</th>
                                    <th>Applicable for Year</th>
                                    <th>FEE</th>
                                    <th>Occupancy</th>
                                    <th>WIFI</th>
                                    <th>Capacity</th>
                                    <th>Warden Name</th>
                                    <th>Warden Contact Number</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>KASHI</td>
                                    <td>4th</td>
                                    <td>10420</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>25</td>
                                    <td>Prof. Emarti Bhaskar</td>
                                    <td>+91XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>VIDHANCHAL</td>
                                    <td>4th</td>
                                    <td>10420</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>35</td>
                                    <td>Prof. Sunil Sharma</td>
                                    <td>+91XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>TAKSHILA</td>
                                    <td>4th</td>
                                    <td>10420</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>50</td>
                                    <td>Prof. A M MEENA</td>
                                    <td>+91XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>PARIHAR</td>
                                    <td>4th</td>
                                    <td>10420</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>65</td>
                                    <td>Prof. S S SANKHLA</td>
                                    <td>+91XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>NALANDA</td>
                                    <td>4th</td>
                                    <td>10420</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>45</td>
                                    <td>Prof. P M MEENA</td>
                                    <td>+91XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>GATHIAWADI</td>
                                    <td>4th</td>
                                    <td>10420</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>57</td>
                                    <td>Prof. P M MEENA</td>
                                    <td>+91XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>TOTAL</td>
                                    <td>397</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div >
    );
}

export default HostelDetails;