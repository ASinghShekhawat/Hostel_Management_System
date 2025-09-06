import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Table } from "reactstrap";
import './StudentDashboard.scss';
class HostelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className='componentColor' >
                <Row className='m-0'>
                    <Col>
                        <br />
                        <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <h4><u>HOSTEL FORM</u></h4>
                        </div>
                        <br />
                        <div className='HostelForm'>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Roll No.</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Roll No." />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Candidate Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Year</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>I</option>
                                            <option>II</option>
                                            <option>III</option>
                                            <option>IV</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Student Category</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>General</option>
                                            <option>Obc</option>
                                            <option>Sc</option>
                                            <option>St</option>
                                            <option>Other</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Mobile</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Mobile No." />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">

                                    <Form.Group as={Col} controlId="formGridAddress1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control placeholder="1234 Main St" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridAddress2">
                                        <Form.Label>Address 2</Form.Label>
                                        <Form.Control placeholder="Apartment, studio, or floor" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Father's Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Father's Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Father's Contact</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Father's Contact No." />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Father's Occupation</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Father's Occupation" />
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3'>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Father's Official Address</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>D.O.B</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Martial Status</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>Single</option>
                                            <option>Married</option>

                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Percentage in Last Exam</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Emergency Contact Name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Emergency Contact Number</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3'>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>If you were a hosteller in MBM in Previous Year ?</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>Yes</option>
                                            <option>No</option>

                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Have you ever suffered/suffering from any infectious disease ?</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>Yes</option>
                                            <option>No</option>

                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Is any criminal proceeding pending against you in any court ?</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>Yes</option>
                                            <option>No</option>

                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <br /><br /><br />
                                <Table striped responsive bordered>
                                    <thead >
                                        <strong>Hostel Admission Details</strong>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>Semester</th>
                                            <th>Marks Obtained in Exam</th>
                                            <th>Total Marks</th>
                                            <th>Percentage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>I</td>
                                            <td><input type="number" /></td>
                                            <td>1100</td>
                                            <td>82.05</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>II</td>
                                            <td><input type="number" /></td>
                                            <td>1200</td>
                                            <td>77.2</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>III</td>
                                            <td><input type="number" /></td>
                                            <td>1100</td>
                                            <td>89.36</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div style={{textAlign:'center'}}>
                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>
                                </div>
                                <br />
                            </Form>
                        </div>

                    </Col>
                </Row>

            </div >
        );
    }
}
export default HostelForm;