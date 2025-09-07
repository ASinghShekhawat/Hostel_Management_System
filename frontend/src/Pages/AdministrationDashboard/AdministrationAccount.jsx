import React from "react";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
} from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";

class AdministrationAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userRollNo: "",
      userFirstName: "",
      userMiddleName: "",
      userLastName: "",
      userAddress: "",
      userMobileNumber: "",
      userCategory: "",
      userEmailId: "",
      userCity: "",
      userState: "",
      userMaritalStatus: "",
      userBranch: "",
      isLoading: true,
      originalState: {},
      currentPassword: "",
      newPassword: ""
    };
  }

  componentDidMount() {
    this.fetchAccountDetails();
  }

  fetchAccountDetails = () => {
    const userId = localStorage.getItem("userId");

    axios
      .get(`http://localhost:3001/admin/account/${userId}`)
      .then((res) => {
        const account = res.data;
        const newState = {
          userRollNo: account.rollNo || "",
          userFirstName: account.firstName || "",
          userMiddleName: account.middleName || "",
          userLastName: account.lastName || "",
          userAddress: account.address || "",
          userMobileNumber: account.mobileNumber || "",
          userCategory: account.category || "",
          userEmailId: account.emailId || "",
          userCity: account.city || "",
          userState: account.state || "",
          userMaritalStatus: account.maritalStatus || "",
          userBranch: account.branch || "",
          isLoading: false,
        };

        this.setState(newState);
        this.setState({ originalState: { ...newState } });
        toast.success("Account details loaded successfully");
      })
      .catch((err) => {
        console.error("Failed to fetch account:", err);
        this.setState({
          isLoading: false,
        });
        toast.error("Failed to load account details");
      });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSave = () => {
    const userId = localStorage.getItem("userId");
    const {
      userFirstName,
      userMiddleName,
      userLastName,
      userAddress,
      userMobileNumber,
      userCategory,
      userCity,
      userState,
      userMaritalStatus,
    } = this.state;

    if (
      !userFirstName ||
      !userAddress ||
      !userMobileNumber ||
      !userCategory ||
      !userCity ||
      !userState ||
      !userMaritalStatus
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    axios
      .put(`http://localhost:3001/admin/account/${userId}`, {
        firstName: userFirstName,
        middleName: userMiddleName,
        lastName: userLastName,
        address: userAddress,
        mobileNumber: userMobileNumber,
        category: userCategory,
        city: userCity,
        state: userState,
        maritalStatus: userMaritalStatus,
      })
      .then((res) => {
        if (res.status >= 200) {
          toast.success("Account updated successfully");
        } else {
          toast.error("Failed to update account");
          return;
        }
        this.setState({
          originalState: {
            ...this.state,
          },
        });
      })
      .catch((err) => {
        console.error("Failed to update account:", err);
        toast.error("Failed to update account details");
      });
  };
  handlePasswordUpdate = () => {
    const userId = localStorage.getItem("userId");
    const { currentPassword, newPassword } = this.state;

    // Validate inputs
    if (!currentPassword || !newPassword) {
      toast.error("Please enter both current and new passwords");
      return;
    }

    axios
      .put(`http://localhost:3001/admin/updatePassword/${userId}`, {
        currentPassword,
        newPassword,
      })
      .then((res) => {
        if (res.status >= 200) {
          toast.success("Password updated successfully");
          this.setState({
            currentPassword: "",
            newPassword: "",
          });
        } else if (res.status === 401) {
          toast.error("Current password is incorrect");
        } else {
          toast.error("Failed to update password");
        }
      })
      .catch((err) => {
        console.error("Failed to update password:", err);
        if (err.response && err.response.status === 401) {
          toast.error("Current password is incorrect");
        } else {
          toast.error("Failed to update password");
        }
      });
  };

  handleReset = () => {
    this.setState({
      ...this.state.originalState,
    });
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="componentColor">
        <Row className="m-0">
          <Col>
            <br />
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h4>
                <u>Account Details</u>
              </h4>
            </div>
            <br />
            <div className="AccountList">
              <div
                style={{ display: "flex", gap: "5%", justifyContent: "center" }}
              >
                <span style={{ color: "black", textAlign: "left" }}>
                  Roll No. :
                </span>
                <Input
                  type="text"
                  name="userRollNo"
                  value={this.state.userRollNo}
                  size="sm"
                  style={{ width: "200px" }}
                  disabled
                />
              </div>
              <br />
              <div
                style={{ display: "flex", gap: "5%", justifyContent: "center" }}
              >
                <span style={{ color: "black" }}>First Name :</span>
                <Input
                  type="text"
                  name="userFirstName"
                  value={this.state.userFirstName}
                  onChange={this.handleInputChange}
                  size="sm"
                  style={{ width: "200px" }}
                />
              </div>
              <br />
              <div
                style={{ display: "flex", gap: "5%", justifyContent: "center" }}
              >
                <span style={{ color: "black" }}>Middle Name :</span>
                <Input
                  type="text"
                  name="userMiddleName"
                  value={this.state.userMiddleName}
                  onChange={this.handleInputChange}
                  size="sm"
                  style={{ width: "200px" }}
                />
              </div>
              <br />
              <div
                style={{ display: "flex", gap: "5%", justifyContent: "center" }}
              >
                <span style={{ color: "black" }}> Last Name :</span>
                <Input
                  type="text"
                  name="userLastName"
                  value={this.state.userLastName}
                  onChange={this.handleInputChange}
                  size="sm"
                  style={{ width: "200px" }}
                />
              </div>
              <br />
              <div
                style={{ display: "flex", gap: "5%", justifyContent: "center" }}
              >
                <span style={{ color: "black" }}> Mobile Number :</span>
                <Input
                  type="text"
                  name="userMobileNumber"
                  value={this.state.userMobileNumber}
                  onChange={this.handleInputChange}
                  size="sm"
                  style={{ width: "200px" }}
                />
              </div>
              <br />
              <div
                style={{ display: "flex", gap: "5%", justifyContent: "center" }}
              >
                <span style={{ color: "black" }}> Category :</span>
                <Input
                  type="select"
                  name="userCategory"
                  value={this.state.userCategory}
                  onChange={this.handleInputChange}
                  size="sm"
                  style={{ width: "200px" }}
                >
                  <option value="">--select--</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="Other">Other</option>
                </Input>
              </div>
              <br />
              <div
                style={{ display: "flex", gap: "5%", justifyContent: "center" }}
              >
                <span style={{ color: "black" }}> Marital Status :</span>
                <Input
                  type="select"
                  name="userMaritalStatus"
                  value={this.state.userMaritalStatus}
                  onChange={this.handleInputChange}
                  size="sm"
                  style={{ width: "200px" }}
                >
                  <option value="">--select--</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </Input>
              </div>
              <br />
              <div
                style={{ display: "flex", gap: "5%", justifyContent: "center" }}
              >
                <span style={{ color: "black" }}> Email Id :</span>
                <Input
                  type="text"
                  name="userEmailId"
                  value={this.state.userEmailId}
                  size="sm"
                  style={{ width: "200px" }}
                  disabled
                />
              </div>
              <br />
              <div
                style={{ display: "flex", gap: "5%", justifyContent: "center" }}
              >
                <span style={{ color: "black" }}> State :</span>
                <Input
                  type="select"
                  name="userState"
                  value={this.state.userState}
                  onChange={this.handleInputChange}
                  size="sm"
                  style={{ width: "200px" }}
                >
                  <option value="">--select--</option>
                  <option value="West-Bengal">West-Bengal</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                </Input>
              </div>
              <br />
              <div
                style={{ display: "flex", gap: "5%", justifyContent: "center" }}
              >
                <span style={{ color: "black" }}> City :</span>
                <Input
                  type="select"
                  name="userCity"
                  value={this.state.userCity}
                  onChange={this.handleInputChange}
                  size="sm"
                  style={{ width: "200px" }}
                >
                  <option value="">--select--</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Hyderabad">Hyderabad</option>
                </Input>
              </div>
              <br />
              <div
                style={{ display: "flex", gap: "5%", justifyContent: "center" }}
              >
                <span style={{ color: "black" }}> Address :</span>
                <Input
                  type="textarea"
                  name="userAddress"
                  value={this.state.userAddress}
                  onChange={this.handleInputChange}
                  size="sm"
                  style={{ width: "200px" }}
                />
              </div>
              <br />
              <div
                style={{ display: "flex", gap: "5%", justifyContent: "center" }}
              >
                <Button color="success" onClick={this.handleSave}>
                  Save
                </Button>
                <Button color="danger" onClick={this.handleReset}>
                  Reset
                </Button>
              </div>
            </div>
            <br />
            {/* Add Password Update Section */}
            <Card className="mb-4">
              <CardHeader>
                <h5 className="mb-0">Update Password</h5>
              </CardHeader>
              <CardBody>
                <div
                  style={{
                    display: "flex",
                    gap: "5%",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "black" }}>Current Password:</span>
                  <Input
                    type="password"
                    name="currentPassword"
                    value={this.state.currentPassword}
                    onChange={this.handleInputChange}
                    size="sm"
                    style={{ width: "200px" }}
                  />
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    gap: "5%",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "black" }}>New Password:</span>
                  <Input
                    type="password"
                    name="newPassword"
                    value={this.state.newPassword}
                    onChange={this.handleInputChange}
                    size="sm"
                    style={{ width: "200px" }}
                  />
                </div>
                <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button color="primary" onClick={this.handlePasswordUpdate}>
                    Update Password
                  </Button>
                </div>
              </CardBody>
            </Card>
            <br />
            <br />
          </Col>
        </Row>
      </div>
    );
  }
}

export default AdministrationAccount;
