import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Row, Col, Table, Button, Modal, ModalBody, ModalHeader, ModalFooter, Input, Form, FormGroup, FormText, Label } from "reactstrap";
import { Link } from "react-router-dom";
class AdministrationHelpDesk extends React.Component {
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
            table1Data: [{ query: 'Fee refund status, Whom to contact for delay ?' },{ query: 'Misbehave in 1st year hostel'},{ query: 'Exam continuity form not relevant to the fee'}],
            newQueryHeading: '',
            newQuerySolution: '',
            indexToEdit: -1,
        };
    }
    submitDetails() {
        this.setState({ newQuerySolution: '', submitSolutionModal: false });
    }
    deleteDetails(item) {
        let arr = this.state.table1Data.filter((i) => i.query !== item.query);
        this.setState({ table1Data: arr });
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
                            <h4><u>LIST OF STUDENT QUERIES</u></h4>
                        </div>
                        <br />
                        <Modal centered size="lg" isOpen={this.state.submitSolutionModal} toggle={() => this.setState({ submitSolutionModal: false })}>
                            <ModalHeader>
                                ANSWER QUERY
                            </ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Query
                                        </Label>
                                        <Input
                                            disabled
                                            value={this.state.newQueryHeading}
                                            onChange={(e) => this.setState({ newQueryHeading: e.target.value })}
                                            id="exampleEmail"
                                            name="email"
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Query Answer
                                        </Label>
                                        <Input
                                            value={this.state.newQuerySolution}
                                            onChange={(e) => this.setState({ newQuerySolution: e.target.value })}
                                            id="examplePassword"
                                            name="password"
                                            placeholder="Enter Query Solution"
                                            type="textarea"
                                        />
                                    </FormGroup>


                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" onClick={() => this.submitDetails()}>Submit</Button>
                            </ModalFooter>
                        </Modal>
                        <div className='ActivitiesList' >
                            <Table striped responsive bordered>
                                <thead >
                                    <strong>Query List</strong>
                                    <tr>
                                        <th>#</th>
                                        <th>Query</th>
                                        <th>Answer</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.table1Data.length > 0 && this.state.table1Data.map((item, index) =>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.query}</td>
                                            <td><Button color="success" onClick={() => this.setState({ submitSolutionModal: true, newQueryHeading: this.state.table1Data[index].query, indexToEdit: index })}>Answer</Button></td>
                                            <td><Button color="danger" onClick={() => this.deleteDetails(item)}>Delete</Button></td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>

            </div >
        );
    }
}

export default AdministrationHelpDesk;