import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Col, Table, Button } from "reactstrap";
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

function PreviouslyRaisedQueries() {
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
                        <h4><u>PREVIOUSLY RAISED QUERIES</u></h4>
                    </div>
                    <br />
                    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is the refund process in case of any fail during the payment process OR in case of server issues from the backend ?</Accordion.Header>
                                <Accordion.Body>
                                    NOT YET ANSWERED
                                </Accordion.Body>
                            </Accordion.Item>
                            <br />
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What is actual procedure for rank allotment and the basis of merit list ?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>

                    <br />
                    <br />
                </Col>
            </Row>

        </div >
    );
}

export default PreviouslyRaisedQueries;