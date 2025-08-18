import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Col, Table, Button } from "reactstrap";
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function HelpDesk() {
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
                <div style={{ display: 'flex', gap: '7%', marginTop: '2px', backgroundColor: '#99cc99', height: '40px', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}>
                    <Link to="/studentDashboard"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Home</button></Link>
                    <Link to="/faqs"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>FAQs</button></Link>
                    <Link to="/messAndLodging"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Hostel Mess</button></Link>
                    <Link to="/account"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Account</button></Link>
                    <Link to="/hostelForm"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Hostel Form</button></Link >
                    <Link to="/helpDesk"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Help Desk</button></Link >

                </div >
            </div>
            <Row className='m-0'>
                <Col>
                    <br />
                    <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <h4><u>HELP DESK</u></h4>
                    </div>
                    <br />
                    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ float: 'right' }}> <Link to="/previouslyRaisedQueries">Previously Raised Issues</Link></span>
                        <br />
                        <hr />
                        <Row className="mb-3">
                            <Col md={3} style={{ margin: '0 auto' }}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>To *</Form.Label>
                                    <Form.Select type="text">
                                        <option>Choose...</option>
                                        <option>Dean</option>
                                        <option>Warden</option>
                                        <option>President</option>
                                        <option>Misconduct</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                    <br />
                    <div>
                        <Row className="mb-3">
                            <Col md={3} style={{ margin: '0 auto' }}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Issue *</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Issue" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <div style={{ textAlign: 'center' }}>
                            <Button color="success">Submit</Button>
                        </div>
                    </div>
                    <br />
                    <br />
                </Col>
            </Row>

        </div >
    );
}

export default HelpDesk;