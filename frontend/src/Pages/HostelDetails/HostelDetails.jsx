import { Row, Col, Table } from "reactstrap";
import { Link } from "react-router-dom";
import './HostelDetails.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import pdfFile from '../../Assets/Hostel_Details.pdf';
function HostelDetails() {
    return (
        <div className='componentColor'>
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
                <a href="https://www.mbmalumni.org/" target="_blank" rel="noopener noreferrer">
                    <div className='topLink'>
                        COMMITTEE
                    </div>
                </a>
                <a href='https://www.mbm.ac.in/ug-pg-admissions' target="_blank" rel="noopener noreferrer">
                    <div className='topLink'>
                        News
                    </div>
                </a>
                <a href="https://www.mbm.ac.in/" target="_blank" rel="noopener noreferrer">
                    <div className='topLink'>
                        ABOUT US
                    </div>
                </a>
                <a href="https://www.mbm.ac.in/reach-mbm" target="_blank" rel="noopener noreferrer">
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
                        <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                            <a href={pdfFile} download="Complete_Hostel_Guide.pdf" style={{ textDecoration: 'none', backgroundColor: '#2196F3', color: 'white', padding: '10px 20px', borderRadius: '5px', fontSize: '16px' }}>
                                Download Complete Hostel Guide
                            </a>
                        </div>
                    </div>
                    <br />
                    <div className='hostelDetailsList' >
                        <div className="table-title">Boys Hostel</div>
                        <Table striped responsive bordered hover>
                            <thead >
                                <tr>
                                    <th>#</th>
                                    <th>Hostel No.</th>
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
                                    <td>2</td>
                                    <td>ARAVALI</td>
                                    <td>4th</td>
                                    <td>₹10,470</td>
                                    <td>Single</td>
                                    <td>YES</td>
                                    <td>25</td>
                                    <td>Prof. NC Bharmar</td>
                                    <td>+91-7658120080</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>VIDHYANCHAL</td>
                                    <td>4th</td>
                                    <td>₹9,700</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>35</td>
                                    <td>Prof. NC Bharmar</td>
                                    <td>+91-7658120080</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>KAILASH</td>
                                    <td>3rd</td>
                                    <td>₹10,000</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>50</td>
                                    <td>Prof. NC Bharmar</td>
                                    <td>+91-7658120080</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>1</td>
                                    <td>SHIVALIK</td>
                                    <td>2nd</td>
                                    <td>₹9,800</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>65</td>
                                    <td>Prof. Pramod Tak</td>
                                    <td>+91-9157985601</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>5</td>
                                    <td>GIRNAR</td>
                                    <td>2nd</td>
                                    <td>₹9,800</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>45</td>
                                    <td>Prof. Pramod Tak</td>
                                    <td>+91-9157985601</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>1</td>
                                    <td>ASHOKA</td>
                                    <td>1st</td>
                                    <td>₹10,420</td>
                                    <td>Triple</td>
                                    <td>YES</td>
                                    <td>57</td>
                                    <td>Prof. PS Goel</td>
                                    <td>+91-6577972461</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>2</td>
                                    <td>NILGIRI</td>
                                    <td>1st</td>
                                    <td>₹10,420</td>
                                    <td>Triple</td>
                                    <td>YES</td>
                                    <td>63</td>
                                    <td>Prof. PS Goel</td>
                                    <td>+91-6577972461</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>3</td>
                                    <td>DHAULADHAR</td>
                                    <td>3rd</td>
                                    <td>₹10,420</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>57</td>
                                    <td>Prof. NC Bharmar</td>
                                    <td>+91-8765098712</td>
                                </tr>
                                <tr className="table-info">
                                    <td colSpan="2"></td>
                                    <td><strong>TOTAL</strong></td>
                                    <td colSpan="7"><strong>397</strong></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <br /><br />
                    <div className='hostelDetailsList'>
                        <div className="table-title">Girls Hostel</div>
                        <Table striped responsive bordered hover>
                            <thead >
                                <tr>
                                    <th>#</th>
                                    <th>Hostel No.</th>
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
                                    <td>1</td>
                                    <td>KASHI</td>
                                    <td>4th</td>
                                    <td>₹10,420</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>25</td>
                                    <td>Prof. Emarti Bhaskar</td>
                                    <td>+91-XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>VIDHANCHAL</td>
                                    <td>4th</td>
                                    <td>₹10,420</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>35</td>
                                    <td>Prof. Sunil Sharma</td>
                                    <td>+91-XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>TAKSHILA</td>
                                    <td>4th</td>
                                    <td>₹10,420</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>50</td>
                                    <td>Prof. A M MEENA</td>
                                    <td>+91-XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>PARIHAR</td>
                                    <td>4th</td>
                                    <td>₹10,420</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>65</td>
                                    <td>Prof. S S SANKHLA</td>
                                    <td>+91-XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>5</td>
                                    <td>NALANDA</td>
                                    <td>4th</td>
                                    <td>₹10,420</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>45</td>
                                    <td>Prof. P M MEENA</td>
                                    <td>+91-XXXXXXXXXX</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>6</td>
                                    <td>GATHIAWADI</td>
                                    <td>4th</td>
                                    <td>₹10,420</td>
                                    <td>Double</td>
                                    <td>YES</td>
                                    <td>57</td>
                                    <td>Prof. P M MEENA</td>
                                    <td>+91-XXXXXXXXXX</td>
                                </tr>
                                <tr className="table-info">
                                    <td colSpan="2"></td>
                                    <td><strong>TOTAL</strong></td>
                                    <td colSpan="7"><strong>397</strong></td>
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