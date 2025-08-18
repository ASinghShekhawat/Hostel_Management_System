import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Row, Col, Table, Button, Modal, ModalBody, ModalHeader, ModalFooter, Input, Form, FormGroup, FormText, Label } from "reactstrap";
import { Link } from "react-router-dom";
import React from 'react';
class AdministrationMessAndLodging extends React.Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line no-unused-vars
        this.state = {
            indexToEdit: -1,
            newMessName: '',
            newMessContact: '',
            newMessFood: '',
            newMessOwner: '',
            table1Data: [{ messName: 'ME Mess / Topper Hostel', messFood: 'Dal Baati Churma', messOwner: 'Gangu Ram', messContact: '9166001247' }],
        };
    }
    addDetails() {
        let arr = [...this.state.table1Data];
        let obj = {
            messName: this.state.newMessName,
            messFood: this.state.newMessFood,
            messOwner: this.state.newMessOwner,
            messContact: this.state.newMessContact,
        };
        arr.push(obj);
        this.setState({ table1Data: arr, addDetailsModal: false });
    }
    editDetails() {
        let arr = [...this.state.table1Data];
        let obj = {
            messName: this.state.newMessName,
            messFood: this.state.newMessFood,
            messOwner: this.state.newMessOwner,
            messContact: this.state.newMessContact,
        };
        arr[this.state.indexToEdit] = obj;
        this.setState({ table1Data: arr, editDetailsModal: false });

    }
    deleteDetails(item) {
        let arr = this.state.table1Data.filter((i) => i.messName !== item.messName);
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
                        <Modal centered size="lg" isOpen={this.state.addDetailsModal} toggle={() => this.setState({ addDetailsModal: false })}>
                            <ModalHeader>
                                ADD MESS DETAILS
                            </ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Mess Name
                                        </Label>
                                        <Input
                                            value={this.state.newMessName}
                                            onChange={(e) => this.setState({ newMessName: e.target.value })}
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="Enter Mess Name"
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Mess Owner
                                        </Label>
                                        <Input
                                            value={this.state.newMessOwner}
                                            onChange={(e) => this.setState({ newMessOwner: e.target.value })}
                                            id="examplePassword"
                                            name="password"
                                            placeholder="Enter Mess Owner"
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Mess Food
                                        </Label>
                                        <Input
                                            value={this.state.newMessFood}
                                            onChange={(e) => this.setState({ newMessFood: e.target.value })}
                                            id="examplePassword"
                                            name="password"
                                            placeholder="Enter Mess Food"
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Mess Contact Info
                                        </Label>
                                        <Input
                                            value={this.state.newMessContact}
                                            onChange={(e) => this.setState({ newMessContact: e.target.value })}
                                            id="examplePassword"
                                            name="password"
                                            placeholder="Enter Mess Contact"
                                            type="number"
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
                                EDIT MESS DETAILS
                            </ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Mess Name
                                        </Label>
                                        <Input
                                            value={this.state.newMessName}
                                            onChange={(e) => this.setState({ newMessName: e.target.value })}
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="Enter Mess Name"
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Mess Owner
                                        </Label>
                                        <Input
                                            value={this.state.newMessOwner}
                                            onChange={(e) => this.setState({ newMessOwner: e.target.value })}
                                            id="examplePassword"
                                            name="password"
                                            placeholder="Enter Mess Owner"
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Mess Food
                                        </Label>
                                        <Input
                                            value={this.state.newMessFood}
                                            onChange={(e) => this.setState({ newMessFood: e.target.value })}
                                            id="examplePassword"
                                            name="password"
                                            placeholder="Enter Mess Food"
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Mess Contact Info
                                        </Label>
                                        <Input
                                            value={this.state.newMessContact}
                                            onChange={(e) => this.setState({ newMessContact: e.target.value })}
                                            id="examplePassword"
                                            name="password"
                                            placeholder="Enter Mess Contact"
                                            type="number"
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
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.table1Data.length > 0 && this.state.table1Data.map((item, index) =>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.messName}</td>
                                            <td>{item.messOwner}</td>
                                            <td>{item.messFood}</td>
                                            <td>{item.messContact}</td>
                                            <td><Button color="warning" onClick={() => this.setState({ editDetailsModal: true, newMessOwner: this.state.table1Data[index].messOwner, newMessName: this.state.table1Data[index].messName, newMessFood: this.state.table1Data[index].messFood, newMessContact: this.state.table1Data[index].messContact, indexToEdit: index })}>Edit</Button></td>
                                            <td><Button color="danger" onClick={() => this.deleteDetails(item)}>Delete</Button></td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                        <br />
                        <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                            <Button color="success" onClick={() => this.setState({ addDetailsModal: true, newMessOwner: '', newMessName: '', newMessFood: '', newMessContact: '' })}>Add Details</Button>

                        </div>
                        <br />
                    </Col>
                </Row>

            </div >
        );
    }
}

export default AdministrationMessAndLodging;