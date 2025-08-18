import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Row, Col, Table, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
class AdministrationAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userRollNo: '20UECC8004',
            userFirstName: 'Aditya',
            userMiddleName: 'Singh',
            userLastName: 'Shekhawat',
            userAddress: 'Guha Park,Kolkata',
            userMobileNumber: '8777071047',
            userCategory: 'General',
            userEmailId: 'aditya@gmail.com',
            userCity: 'Kolkata',
            userState: 'West-Bengal',
            userMartialStatus: 'Single',
            userYear: 'IV',
        };
    }
    render() {
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
                            <h4><u>Account Details</u></h4>
                        </div>
                        <br />
                        <div className='AccountList'>
                            <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                <span style={{ color: 'black',textAlign:'left' }}>Roll No. :</span>
                                <Input type="text" value={this.state.userRollNo} size="sm" style={{ width: '200px' }} disabled />
                            </div>
                            <br />
                            <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                <span style={{ color: 'black' }}>First Name :</span>
                                <Input type="text" value={this.state.userFirstName} size="sm" style={{ width: '200px' }} />
                            </div>
                            <br />
                            <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                <span style={{ color: 'black' }}>Middle Name :</span>
                                <Input type="text" value={this.state.userMiddleName} size="sm" style={{ width: '200px' }} />
                            </div>
                            <br />
                            <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                <span style={{ color: 'black' }}> Last Name :</span>
                                <Input type="text" value={this.state.userLastName} size="sm" style={{ width: '200px' }} />
                            </div>
                            <br />
                            <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                <span style={{ color: 'black' }}> Mobile Number :</span>
                                <Input type="number" value={this.state.userMobileNumber} size="sm" style={{ width: '200px' }} />
                            </div>
                            <br />
                            <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                <span style={{ color: 'black' }}> Category :</span>
                                <Input type="select" value={this.state.userCategory} size="sm" style={{ width: '200px' }}>
                                    <option>--select--</option>
                                    <option>General</option>
                                    <option>Obc</option>
                                    <option>SC</option>
                                    <option>ST</option>
                                    <option>Other</option>
                                </Input>
                            </div>
                            <br />
                            <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                <span style={{ color: 'black' }}> Martial Status :</span>
                                <Input type="select" value={this.state.userMartialStatus} size="sm" style={{ width: '200px' }}>
                                    <option>--select--</option>
                                    <option>Single</option>
                                    <option>Married</option>
                                </Input>
                            </div>
                            <br />
                            <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                <span style={{ color: 'black' }}> Year :</span>
                                <Input type="select" value={this.state.userYear} size="sm" style={{ width: '200px' }}>
                                    <option>--select--</option>
                                    <option>I</option>
                                    <option>II</option>
                                    <option>III</option>
                                    <option>IV</option>
                                </Input>
                            </div>
                            <br />
                            <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                <span style={{ color: 'black' }}> Email Id :</span>
                                <Input type="text" value={this.state.userEmailId} size="sm" style={{ width: '200px' }} />
                            </div>
                            <br />
                            <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                <span style={{ color: 'black' }}> State :</span>
                                <Input type="select" value={this.state.userState} size="sm" style={{ width: '200px' }}>
                                    <option>--select--</option>
                                    <option>West-Bengal</option>
                                    <option>Rajasthan</option>
                                    <option>Madhya Pradesh</option>
                                    <option>Arunachal Pradesh</option>
                                </Input>
                            </div>
                            <br />
                            <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                <span style={{ color: 'black' }}> City :</span>
                                <Input type="select" value={this.state.userCity} size="sm" style={{ width: '200px' }}>
                                    <option>--select--</option>
                                    <option>Kolkata</option>
                                    <option>Jaipur</option>
                                    <option>Bengaluru</option>
                                    <option>Hyderabad</option>
                                </Input>
                            </div>
                            <br />
                            <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                <span style={{ color: 'black' }}> Address :</span>
                                <Input type="textarea" value={this.state.userAddress} size="sm" style={{ width: '200px' }}>
                                </Input>
                            </div>
                            <br />
                            <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                            <Button color="success">Save</Button>
                            <Button color="danger">Reset</Button>
                            </div>

                        </div>
            
                        <br /><br /><br />
                    </Col>
                </Row>

            </div >
        );
    }
}

export default AdministrationAccount;