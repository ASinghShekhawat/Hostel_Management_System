import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Row, Col, Table } from "reactstrap";
import { Link } from "react-router-dom";
function Activities() {
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
                        <h4><u>HOSTEL MESS</u></h4>
                    </div>
                    <br />
                    <div className='ActivitiesList' >
                        <Table striped responsive bordered>
                            <thead >
                                <strong>Mess List</strong>
                                <tr>
                                    <th>#</th>
                                    <th>Mess Name</th>
                                    <th>Mess Warden</th>
                                    <th>Food</th>
                                    <th>Contact Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>ME Mess / Topper's Hostel Mess / Hostel No 6 Mess</td>
                                    <td>Gangu Ram</td>
                                    <td>Roti,Sabji,Butter-Milk,Dal,Rice and Papad</td>
                                    <td>9987656443</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Baba Mess / 1st Year Hostel Mess / Hostel No 8 Mess</td>
                                    <td>Baba Kumar</td>
                                    <td>Roti,Sabji,Butter-Milk,Dal,Rice and Papad</td>
                                    <td>9876543210</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </Col>
            </Row>

        </div >
    );
}

export default Activities;