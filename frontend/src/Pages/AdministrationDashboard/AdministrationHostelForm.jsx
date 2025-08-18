import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Row, Col, Table } from "reactstrap";
import { Link } from "react-router-dom";
function AdministrationHostelForm() {
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
                    <Link to="/administratorDashboard"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Home</button></Link>
                    <Link to="/administratorFaqs"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>FAQs</button></Link>
                    <Link to="/administratorMessAndLodging"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Hostel Mess</button></Link>
                    <Link to="/administratorAccount"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Account</button></Link>
                    <Link to="/administratorHostelForm"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Hostel Form</button></Link >
                    <Link to="/administratorHelpDesk"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Help Desk</button></Link >

                </div >
            </div>
            <Row className='m-0'>
                <Col>
                    <br />
                    <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <h4><u>HOSTEL FORMS</u></h4>
                    </div>
                    <br />
                    <div className='hostelRulesList'  >
                        <Table striped responsive bordered style={{ width: '1200px' }}>
                            <thead >
                                <strong>Final Year</strong>
                                <tr>
                                    <th>#</th>
                                    <th>Roll number</th>
                                    <th>Branch</th>
                                    <th>PDF Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>20UECC8004</td>
                                    <td>ECC</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <br />
                    <div className='hostelRulesList'  >
                        <Table striped responsive bordered style={{ width: '1200px' }}>
                            <thead >
                                <strong>Third Year</strong>
                                <tr>
                                    <th>#</th>
                                    <th>Roll number</th>
                                    <th>Branch</th>
                                    <th>PDF Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>20UECC8004</td>
                                    <td>ECC</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <br />
                    <div className='hostelRulesList'  >
                        <Table striped responsive bordered style={{width:'1200px'}}>
                            <thead >
                                <strong>Second Year</strong>
                                <tr>
                                    <th>#</th>
                                    <th>Roll number</th>
                                    <th>Branch</th>
                                    <th>PDF Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>20UECC8004</td>
                                    <td>ECC</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <br />
                    <div className='hostelRulesList'  >
                        <Table striped responsive bordered style={{width:'1200px'}}>
                            <thead >
                                <strong>First Year</strong>
                                <tr>
                                    <th>#</th>
                                    <th>Roll number</th>
                                    <th>Branch</th>
                                    <th>PDF Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>20UECC8004</td>
                                    <td>ECC</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
                                    <td><a href="#">Click here</a></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>20UCSE4009</td>
                                    <td>CSE</td>
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

export default AdministrationHostelForm;