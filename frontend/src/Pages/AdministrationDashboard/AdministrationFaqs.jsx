import axios from "axios";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import { toast } from "react-toastify";
class AdministrationFaqs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table1Data: [],
      newFaqHeading: "",
      newFaqAnswer: "",
    };
  }

  componentDidMount() {
    this.getFaqs();
  }

  getFaqs = () => {
    axios
      .get("http://localhost:3001/admin/faqs")
      .then((res) => {
        const data = res.data;
        const faqs = Array.isArray(data)
          ? data.map((faq) => ({
              faqHeading: faq.question,
              faqBody: faq.answer,
              id: faq.id,
            }))
          : [];
        toast.success("FAQs loaded successfully");
        this.setState({ table1Data: faqs });
      })
      .catch((err) => {
        console.error("Failed to fetch FAQs:", err);
        toast.error("Failed to load FAQs");
      });
  };

  addFaq = () => {
    const { newFaqHeading, newFaqAnswer } = this.state;
    if (!newFaqHeading || !newFaqAnswer) {
      toast.error("Please fill all fields");
      return;
    }
    axios
      .post("http://localhost:3001/admin/add-faq", {
        question: newFaqHeading,
        answer: newFaqAnswer,
      })
      .then((res) => {
        this.setState({
          newFaqHeading: "",
          newFaqAnswer: "",
        });
        this.getFaqs();
        if (res.status === 201) {
          toast.success("FAQ added successfully");
        } else {
          toast.error("Failed to add FAQ");
        }
        this.setState({ addDetailsModal: false });
      })
      .catch((err) => {
        console.error("Failed to add FAQ:", err);
        toast.error("Failed to add FAQ");
      });
  };

  editFaq = () => {
    const { newFaqHeading, newFaqAnswer } = this.state;
    if (!newFaqHeading || !newFaqAnswer) {
      toast.error("Please fill all fields");
      return;
    }
    const id = this.state.table1Data[this.state.indexToEdit].id;
    if(this.state.table1Data[this.state.indexToEdit].faqHeading === newFaqHeading && this.state.table1Data[this.state.indexToEdit].faqBody === newFaqAnswer){
      toast.info("No changes made to the FAQ");
      this.setState({
        editDetailsModal: false,
        newFaqHeading: "",
        newFaqAnswer: "",
      });
      return;
    }
    axios
      .put(`http://localhost:3001/admin/edit-faq/${id}`, {
        question: newFaqHeading,
        answer: newFaqAnswer,
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState((prevState) => ({
            table1Data: prevState.table1Data.map((faq) =>
              faq.id === id
                ? {
                    ...faq,
                    faqHeading: res.data.faq.question,
                    faqBody: res.data.faq.answer,
                  }
                : faq
            ),
          }));
          toast.success("FAQ updated successfully");
        } else {
          toast.error("Failed to update FAQ");
        }
      })
      .catch((err) => {
        console.error("Failed to edit FAQ:", err);
        toast.error("Failed to update FAQ");
      })
      .finally(() => {
        this.setState({
          editDetailsModal: false,
          newFaqHeading: "",
          newFaqAnswer: "",
        });
      });
  };

  deleteFaq = (id) => {
    axios
      .delete(`http://localhost:3001/admin/delete-faq/${id}`)
      .then((res) => {
        if (res.status === 200) {
          this.setState((prevState) => ({
            table1Data: prevState.table1Data.filter((faq) => faq.id !== id),
          }));
          toast.success("FAQ deleted successfully");
        } else {
          toast.error("Failed to delete FAQ");
        }
      })
      .catch((err) => {
        toast.error("Failed to delete FAQ");
        console.error("Failed to delete FAQ:", err);
      });
  };

  render() {
    return (
      <div className="componentColor">
        <Row className="m-0">
          <Col>
            <Modal
              centered
              size="lg"
              isOpen={this.state.addDetailsModal}
              toggle={() =>
                this.setState({
                  addDetailsModal: false,
                  newFaqHeading: "",
                  newFaqAnswer: "",
                })
              }
            >
              <ModalHeader
                toggle={() =>
                  this.setState({
                    addDetailsModal: false,
                    newFaqHeading: "",
                    newFaqAnswer: "",
                  })
                }
              >
                ADD FAQ
              </ModalHeader>
              <ModalBody>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault(); // prevent page refresh
                    this.addFaq();
                  }}
                >
                  <FormGroup>
                    <Label for="exampleEmail">FAQ Heading</Label>
                    <Input
                      value={this.state.newFaqHeading}
                      onChange={(e) =>
                        this.setState({ newFaqHeading: e.target.value })
                      }
                      id="exampleEmail"
                      name="text"
                      placeholder="Enter Heading"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">FAQ Answer</Label>
                    <Input
                      value={this.state.newFaqAnswer}
                      onChange={(e) =>
                        this.setState({ newFaqAnswer: e.target.value })
                      }
                      id="examplePassword"
                      name="text"
                      placeholder="Enter Answer"
                      type="textarea"
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={() => this.addFaq()}>
                  Add
                </Button>
              </ModalFooter>
            </Modal>
            <Modal
              centered
              size="lg"
              isOpen={this.state.editDetailsModal}
              toggle={() =>
                this.setState({
                  editDetailsModal: false,
                  newFaqHeading: "",
                  newFaqAnswer: "",
                })
              }
            >
              <ModalHeader
                toggle={() =>
                  this.setState({
                    editDetailsModal: false,
                    newFaqHeading: "",
                    newFaqAnswer: "",
                  })
                }
              >
                EDIT FAQ
              </ModalHeader>
              <ModalBody>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    this.editFaq();
                  }}
                >
                  <FormGroup>
                    <Label for="exampleEmail">FAQ Heading</Label>
                    <Input
                      value={this.state.newFaqHeading}
                      onChange={(e) =>
                        this.setState({ newFaqHeading: e.target.value })
                      }
                      id="exampleEmail"
                      name="text"
                      placeholder="Enter Heading"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">FAQ Answer</Label>
                    <Input
                      value={this.state.newFaqAnswer}
                      onChange={(e) =>
                        this.setState({ newFaqAnswer: e.target.value })
                      }
                      id="examplePassword"
                      name="text"
                      placeholder="Enter Answer"
                      type="textarea"
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={() => this.editFaq()}>
                  Update
                </Button>
              </ModalFooter>
            </Modal>
            <br />
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h4>
                <u>FAQs</u>
              </h4>
            </div>
            <br />
            <Table>
              <thead>
                <strong>Frequently Asked Questions</strong>
                <tr>
                  <th style={{ width: "90%" }}></th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.table1Data.length > 0 &&
                  this.state.table1Data.map((item, index) => (
                    <tr>
                      <td>
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              {item.faqHeading}
                            </Accordion.Header>
                            <Accordion.Body>{item.faqBody}</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </td>
                      <td>
                        <Button
                          color="warning"
                          onClick={() =>
                            this.setState({
                              editDetailsModal: true,
                              newFaqHeading:
                                this.state.table1Data[index].faqHeading,
                              newFaqAnswer:
                                this.state.table1Data[index].faqBody,
                              indexToEdit: index,
                            })
                          }
                        >
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button
                          color="danger"
                          onClick={() => this.deleteFaq(item.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
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
            <div
              style={{ display: "flex", gap: "5%", justifyContent: "center" }}
            >
              <Button
                color="success"
                onClick={() => this.setState({ addDetailsModal: true })}
              >
                Add FAQ
              </Button>
            </div>
            <br />
          </Col>
        </Row>
      </div>
    );
  }
}
export default AdministrationFaqs;
