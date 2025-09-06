import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
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
  Table
} from "reactstrap";

class AdministrationMessAndLodging extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexToEdit: -1,
      newMessName: "",
      newMessContact: "",
      newMessFood: "",
      newMessOwner: "",
      table1Data: [],
    };
  }

  componentDidMount() {
    this.getMessData();
  }

  getMessData = () => {
    axios
      .get("http://localhost:3001/admin/food-mess")
      .then((res) => {
        const data = res.data;
        const messData = Array.isArray(data)
          ? data.map((mess) => ({
              messName: mess.mess_name,
              messFood: mess.food_items,
              messOwner: mess.mess_warden,
              messContact: mess.contact_info,
              id: mess.id,
            }))
          : [];
        toast.success("Mess data loaded successfully");
        this.setState({ table1Data: messData });
      })
      .catch((err) => {
        console.error("Failed to fetch mess data:", err);
        toast.error("Failed to load mess data");
      });
  };

  addDetails = () => {
    const { newMessName, newMessFood, newMessOwner, newMessContact } =
      this.state;
    if (!newMessName || !newMessFood || !newMessOwner || !newMessContact) {
      toast.error("All fields are required");
      return;
    }
    axios
      .post("http://localhost:3001/admin/add-mess", {
        messName: newMessName,
        messWarden: newMessOwner,
        food: newMessFood,
        contactInfo: newMessContact,
      })
      .then((res) => {
        if (res.status >= 200) {
          toast.success("Mess added successfully");
        } else {
          toast.error("Failed to add mess");
        }
        this.setState({
          newMessName: "",
          newMessFood: "",
          newMessOwner: "",
          newMessContact: "",
          addDetailsModal: false,
        });
        this.getMessData(); // Refresh data after adding
      })
      .catch((err) => {
        console.error("Failed to add mess:", err);
        toast.error("Failed to add mess");
      });
  };

  editDetails = () => {
    const { newMessName, newMessFood, newMessOwner, newMessContact } =
      this.state;
    if (!newMessName || !newMessFood || !newMessOwner || !newMessContact) {
      toast.error("All fields are required");
      return;
    }
    if (
      this.state.table1Data[this.state.indexToEdit].messName === newMessName &&
      this.state.table1Data[this.state.indexToEdit].messOwner ===
        newMessOwner &&
      this.state.table1Data[this.state.indexToEdit].messFood === newMessFood &&
      this.state.table1Data[this.state.indexToEdit].messContact ===
        newMessContact
    ) {
      toast.info("No changes made to the mess details");
      this.setState({
        editDetailsModal: false,
        newMessName: "",
        newMessFood: "",
        newMessOwner: "",
        newMessContact: "",
      });
      return;
    }
    const id = this.state.table1Data[this.state.indexToEdit].id;

    axios
      .put(`http://localhost:3001/admin/edit-mess/${id}`, {
        messName: newMessName,
        messWarden: newMessOwner,
        food: newMessFood,
        contactInfo: newMessContact,
      })
      .then((res) => {
        if (res.status >= 200) {
          toast.success("Mess updated successfully");
        } else {
          toast.error("Failed to update mess");
        }
        this.setState({
          editDetailsModal: false,
          newMessName: "",
          newMessFood: "",
          newMessOwner: "",
          newMessContact: "",
        });
        this.getMessData();
      })
      .catch((err) => {
        toast.error("Failed to update mess");
        console.error("Failed to edit mess:", err);
      });
  };

  deleteDetails = (item) => {
    axios
      .delete(`http://localhost:3001/admin/delete-mess/${item.id}`)
      .then((res) => {
        if (res.status >= 200) {
          toast.success("Mess deleted successfully");
        } else {
          toast.error("Failed to delete mess");
        }
        this.getMessData(); // Refresh data after deleting
      })
      .catch((err) => {
        toast.error("Failed to delete mess");
        console.error("Failed to delete mess:", err);
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
              toggle={() => this.setState({ addDetailsModal: false })}
            >
              <ModalHeader
                toggle={() => this.setState({ addDetailsModal: false, newMessName: "", newMessOwner: "", newMessFood: "", newMessContact: "" })}
              >
                ADD MESS DETAILS
              </ModalHeader>
              <ModalBody>
                <Form onSubmit={(e) => {
                    e.preventDefault(); // prevent page refresh
                    this.addDetails();
                  }}>
                  <FormGroup>
                    <Label for="exampleEmail">Mess Name</Label>
                    <Input
                      value={this.state.newMessName}
                      onChange={(e) =>
                        this.setState({ newMessName: e.target.value })
                      }
                      id="exampleEmail"
                      name="email"
                      placeholder="Enter Mess Name"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Mess Owner</Label>
                    <Input
                      value={this.state.newMessOwner}
                      onChange={(e) =>
                        this.setState({ newMessOwner: e.target.value })
                      }
                      id="examplePassword"
                      name="password"
                      placeholder="Enter Mess Owner"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Mess Food</Label>
                    <Input
                      value={this.state.newMessFood}
                      onChange={(e) =>
                        this.setState({ newMessFood: e.target.value })
                      }
                      id="examplePassword"
                      name="password"
                      placeholder="Enter Mess Food"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Mess Contact Info</Label>
                    <Input
                      value={this.state.newMessContact}
                      onChange={(e) =>
                        this.setState({ newMessContact: e.target.value })
                      }
                      id="examplePassword"
                      name="password"
                      placeholder="Enter Mess Contact"
                      type="number"
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={() => this.addDetails()}>
                  Add
                </Button>
              </ModalFooter>
            </Modal>
            <Modal
              centered
              size="lg"
              isOpen={this.state.editDetailsModal}
              toggle={() => this.setState({ editDetailsModal: false })}
            >
              <ModalHeader toggle={() => this.setState({ editDetailsModal: false })}>EDIT MESS DETAILS</ModalHeader>
              <ModalBody>
                <Form onSubmit={(e) => {
                    e.preventDefault(); // prevent page refresh
                    this.editDetails();
                  }}>
                  <FormGroup>
                    <Label for="exampleEmail">Mess Name</Label>
                    <Input
                      value={this.state.newMessName}
                      onChange={(e) =>
                        this.setState({ newMessName: e.target.value })
                      }
                      id="exampleEmail"
                      name="email"
                      placeholder="Enter Mess Name"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Mess Owner</Label>
                    <Input
                      value={this.state.newMessOwner}
                      onChange={(e) =>
                        this.setState({ newMessOwner: e.target.value })
                      }
                      id="examplePassword"
                      name="password"
                      placeholder="Enter Mess Owner"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Mess Food</Label>
                    <Input
                      value={this.state.newMessFood}
                      onChange={(e) =>
                        this.setState({ newMessFood: e.target.value })
                      }
                      id="examplePassword"
                      name="password"
                      placeholder="Enter Mess Food"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Mess Contact Info</Label>
                    <Input
                      value={this.state.newMessContact}
                      onChange={(e) =>
                        this.setState({ newMessContact: e.target.value })
                      }
                      id="examplePassword"
                      name="password"
                      placeholder="Enter Mess Contact"
                      type="number"
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={() => this.editDetails()}>
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
                <u>HOSTEL MESS</u>
              </h4>
            </div>
            <br />
            <div className="ActivitiesList">
              <Table striped responsive bordered>
                <thead>
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
                  {this.state.table1Data.length > 0 &&
                    this.state.table1Data.map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.messName}</td>
                        <td>{item.messOwner}</td>
                        <td>{item.messFood}</td>
                        <td>{item.messContact}</td>
                        <td>
                          <Button
                            color="warning"
                            onClick={() =>
                              this.setState({
                                editDetailsModal: true,
                                newMessOwner:
                                  this.state.table1Data[index].messOwner,
                                newMessName:
                                  this.state.table1Data[index].messName,
                                newMessFood:
                                  this.state.table1Data[index].messFood,
                                newMessContact:
                                  this.state.table1Data[index].messContact,
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
                            onClick={() => this.deleteDetails(item)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
            <br />
            <div
              style={{ display: "flex", gap: "5%", justifyContent: "center" }}
            >
              <Button
                color="success"
                onClick={() =>
                  this.setState({
                    addDetailsModal: true,
                    newMessOwner: "",
                    newMessName: "",
                    newMessFood: "",
                    newMessContact: "",
                  })
                }
              >
                Add Details
              </Button>
            </div>
            <br />
          </Col>
        </Row>
      </div>
    );
  }
}

export default AdministrationMessAndLodging;
