import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Row, Col, Table, Button, Modal, ModalBody, ModalHeader, ModalFooter, Input, Form, FormGroup, FormText, Label } from "reactstrap";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
class AdministrationFaqs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table1Data: [{ faqHeading: 'Hostel Allotment Procedure ?', faqBody: 'Call 9166001247' }],
            newFaqHeading: '',
            newFaqAnswer: '',
        };
    }
    addDetails() {
        let arr = [...this.state.table1Data];
        let obj = {
            faqHeading: this.state.newFaqHeading,
            faqBody: this.state.newFaqAnswer,
        };
        arr.push(obj);
        this.setState({ table1Data: arr, addDetailsModal: false });
    }
    editDetails() {
        let arr = [...this.state.table1Data];
        let obj = {
            faqHeading: this.state.newFaqHeading,
            faqBody: this.state.newFaqAnswer,
        };
        arr[this.state.indexToEdit] = obj;
        this.setState({ table1Data: arr, editDetailsModal: false });

    }
    deleteDetails(item) {
        let arr = this.state.table1Data.filter((i) => i.faqHeading !== item.faqHeading);
        this.setState({ table1Data: arr });
    }
    render() {
        return (
            <div className='componentColor' >
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
                        <Modal centered size="lg" isOpen={this.state.addDetailsModal} toggle={() => this.setState({ addDetailsModal: false })}>
                            <ModalHeader>
                                ADD FAQ
                            </ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            FAQ Heading
                                        </Label>
                                        <Input
                                            value={this.state.newFaqHeading}
                                            onChange={(e) => this.setState({ newFaqHeading: e.target.value })}
                                            id="exampleEmail"
                                            name="text"
                                            placeholder="Enter Heading"
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            FAQ Answer
                                        </Label>
                                        <Input
                                            value={this.state.newFaqAnswer}
                                            onChange={(e) => this.setState({ newFaqAnswer: e.target.value })}
                                            id="examplePassword"
                                            name="text"
                                            placeholder="Enter Answer"
                                            type="textarea"
                                        />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" onClick={() => this.addDetails()}>Add</Button>
                            </ModalFooter>
                        </Modal>
                        <Modal centered size="lg" isOpen={this.state.editDetailsModal} toggle={() => this.setState({ editDetailsModal: false })}>
                            <ModalHeader>
                                EDIT FAQ
                            </ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            FAQ Heading
                                        </Label>
                                        <Input
                                            value={this.state.newFaqHeading}
                                            onChange={(e) => this.setState({ newFaqHeading: e.target.value })}
                                            id="exampleEmail"
                                            name="text"
                                            placeholder="Enter Heading"
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            FAQ Answer
                                        </Label>
                                        <Input
                                            value={this.state.newFaqAnswer}
                                            onChange={(e) => this.setState({ newFaqAnswer: e.target.value })}
                                            id="examplePassword"
                                            name="text"
                                            placeholder="Enter Answer"
                                            type="textarea"
                                        />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" onClick={() => this.editDetails()}>Update</Button>
                            </ModalFooter>
                        </Modal>
                        <br />
                        <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <h4><u>FAQs</u></h4>
                        </div>
                        <br />
                        <Table>
                            <thead >
                                <strong>Frequently Asked Questions</strong>
                                <tr>
                                    <th style={{ width: '90%' }}>

                                    </th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.table1Data.length > 0 && this.state.table1Data.map((item, index) =>
                                    <tr>

                                        <td>
                                            <Accordion>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>{item.faqHeading}</Accordion.Header>
                                                    <Accordion.Body>
                                                        {item.faqBody}
                                                    </Accordion.Body>

                                                </Accordion.Item>
                                            </Accordion>
                                        </td>
                                        <td><Button color="warning" onClick={() => this.setState({ editDetailsModal: true, newFaqHeading: this.state.table1Data[index].faqHeading, newFaqAnswer: this.state.table1Data[index].faqBody, indexToEdit: index })}>Edit</Button></td>
                                        <td><Button color="danger" onClick={() => this.deleteDetails(item)}>Delete</Button></td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                        {/* <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Hostel Allotment Procedure ?</Accordion.Header>
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
                        <br />
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is the refund process in case of any fail during the payment process OR in case of server issues from the backend ?</Accordion.Header>
                            <Accordion.Body>
                                Lorem
                            </Accordion.Body>
                        </Accordion.Item>
                        <br />
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Why is my Hostel Form Not getting Submitted even after filling each and every mandatory field in the hostel form / Something Went Wrong / Server unreachable</Accordion.Header>
                            <Accordion.Body>
                                Lorem
                            </Accordion.Body>
                        </Accordion.Item>
                        <br />
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>How does the category ,merit list classified and how can we classify the merit list based on ranks / GENERAL,OBC,SC,ST Room alllotment prefernce ?</Accordion.Header>
                            <Accordion.Body>
                                Lorem
                            </Accordion.Body>
                        </Accordion.Item>
                        <br />
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>What are the Lodging and Mess facilities available in the hostels / Facilities provided / Costing for other ammendities ?</Accordion.Header>
                            <Accordion.Body>
                                Lorem
                            </Accordion.Body>
                        </Accordion.Item>
                        <br />
                    </Accordion> */}

                        <br />
                        <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                            <Button color="success" onClick={() => this.setState({ addDetailsModal: true })}>Add FAQ</Button>
                        </div>
                        <br />

                    </Col>
                </Row>

            </div >
        );
    }
}
export default AdministrationFaqs;