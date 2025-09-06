import React from 'react';
import { Row, Col, Table, Button, Modal, ModalBody, ModalHeader, ModalFooter, Input, Form, FormGroup, Label } from "reactstrap";
import axios from 'axios';
import { toast } from 'react-toastify';
const API_URL = 'http://localhost:3001/admin'; // Update with your actual backend URL

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
            queries: [],
            newQueryHeading: '',
            newQuerySolution: '',
            currentQueryId: null,
            loading: true
        };
    }

    componentDidMount() {
        this.fetchQueries();
    }

    fetchQueries = async () => {
        try {
            this.setState({ loading: true});
            const response = await axios.get(`${API_URL}/previous-queries`);
            toast.success("Queries loaded successfully");
            this.setState({ 
                queries: response.data,
                loading: false 
            });
        } catch (error) {
            console.error('Error fetching queries:', error);
            toast.error("Failed to load queries. Please try again.");
            this.setState({ 
                loading: false 
            });
        }
    };

    submitDetails = async () => {
        try {
            const { currentQueryId, newQuerySolution } = this.state;

            if(!newQuerySolution.trim()) {
                toast.error("Query solution cannot be empty");
                return;
            }
            
            // Get admin info from localStorage or state
            const adminId = localStorage.getItem('userId') || null; // Replace with actual admin ID

            this.setState({ loading: true });
            
            await axios.post(`${API_URL}/answer-query/${adminId}`, {
                id: currentQueryId,
                answer: newQuerySolution,
                answeredBy: adminId
            }).then((res) => {
                if(res.status === 200) {
                    toast.success("Query answered successfully");
                } else {
                    toast.error("Failed to submit answer. Please try again.");
                }
            });

            // Update the local state with the answered query
            this.setState({ 
                loading: false,
                newQuerySolution: '',
                submitSolutionModal: false
            });

            // Refresh the queries list
            this.fetchQueries();
            
        } catch (error) {
            console.error('Error answering query:', error);
            this.setState({ 
                loading: false
            });
        }
    };

    deleteQuery = async (id) => {
        try {
            if (!window.confirm('Are you sure you want to delete this query?')) {
                return;
            }

            this.setState({ loading: true });
            
            await axios.delete(`${API_URL}/delete-query/${id}`).then((res) => {
                if(res.status === 200) {
                    toast.success("Query deleted successfully");
                } else {
                    toast.error("Failed to delete query. Please try again.");
                }
            });

            // Update the local state
            this.setState({ 
                queries: this.state.queries.filter(query => query.id !== id),
                loading: false
            });
            
        } catch (error) {
            console.error('Error deleting query:', error);
            this.setState({ 
                loading: false
            });
            
        }
    };

    render() {
        return (
            <div className='componentColor'>
                <Row className='m-0'>
                    <Col>
                        <br />
                        <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <h4><u>LIST OF STUDENT QUERIES</u></h4>
                        </div>
                        <Modal centered size="lg" isOpen={this.state.submitSolutionModal} toggle={() => this.setState({ submitSolutionModal: false })}>
                            <ModalHeader>
                                ANSWER QUERY
                            </ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="queryQuestion">
                                            Query
                                        </Label>
                                        <Input
                                            disabled
                                            value={this.state.newQueryHeading}
                                            id="queryQuestion"
                                            name="question"
                                            type="text"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="queryAnswer">
                                            Query Answer
                                        </Label>
                                        <Input
                                            value={this.state.newQuerySolution}
                                            onChange={(e) => this.setState({ newQuerySolution: e.target.value })}
                                            id="queryAnswer"
                                            name="answer"
                                            placeholder="Enter Query Solution"
                                            type="textarea"
                                            rows="5"
                                        />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button 
                                    color="secondary" 
                                    onClick={() => this.setState({ submitSolutionModal: false })}
                                >
                                    Cancel
                                </Button>
                                <Button 
                                    color="success" 
                                    onClick={this.submitDetails}
                                    disabled={this.state.loading}
                                >
                                    {this.state.loading ? 'Submitting...' : 'Submit'}
                                </Button>
                            </ModalFooter>
                        </Modal>
                        <div className='ActivitiesList' >
                            {this.state.loading && <p className="text-center">Loading queries...</p>}
                            {!this.state.loading && this.state.queries.length === 0 && (
                                <p className="text-center">No queries found.</p>
                            )}
                            {!this.state.loading && this.state.queries.length > 0 && (
                                <Table striped responsive bordered>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Student</th>
                                            <th>Query</th>
                                            <th>Status</th>
                                            <th>Date Submitted</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.queries.map((query, index) => (
                                            <tr key={query.id}>
                                                <td>{index + 1}</td>
                                                <td>{query.student ? query.student.name : 'Anonymous'}</td>
                                                <td>{query.question}</td>
                                                <td>
                                                    <span className={`badge ${query.status === 'answered' ? 'bg-success' : 'bg-warning'}`}>
                                                        {query.status}
                                                    </span>
                                                </td>
                                                <td>{new Date(query.dateSubmitted).toLocaleDateString()}</td>
                                                <td>
                                                    {query.status !== 'answered' ? (
                                                        <Button 
                                                            color="success" 
                                                            size="sm" 
                                                            className="me-2"
                                                            onClick={() => this.setState({ 
                                                                submitSolutionModal: true, 
                                                                newQueryHeading: query.question,
                                                                currentQueryId: query.id
                                                            })}
                                                        >
                                                            Answer
                                                        </Button>
                                                    ) : (
                                                        <Button 
                                                            color="primary" 
                                                            size="sm" 
                                                            className="me-2"
                                                            onClick={() => this.setState({ 
                                                                submitSolutionModal: true, 
                                                                newQueryHeading: query.question,
                                                                newQuerySolution: query.answer,
                                                                currentQueryId: query.id
                                                            })}
                                                        >
                                                            View/Edit
                                                        </Button>
                                                    )}
                                                    <Button 
                                                        color="danger" 
                                                        size="sm"
                                                        onClick={() => this.deleteQuery(query.id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AdministrationHelpDesk;