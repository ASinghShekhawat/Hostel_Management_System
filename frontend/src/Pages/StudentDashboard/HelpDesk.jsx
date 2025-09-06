import React, { useState } from "react";
import { Col, Row, Button } from "reactstrap";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

function HelpDesk() {
  const [question, setQuestion] = useState("");
  const [intendedFor, setIntendedFor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    if (!question || !intendedFor) {
      setMessage("Issue is required");
      return;
    }
    try {
      const res = await Axios.post("http://localhost:3001/student/add-query", {
        userId,
        intendedFor,
        question,
        status: "pending",
      });
      if (res.status !== 201) {
        throw new Error(res.data.error || "Failed to submit query");
      } else {
        toast.success("Query submitted successfully");
      }
      setQuestion("");
      setIntendedFor("");
    } catch (err) {
      setMessage(err.response?.data?.error || "Failed to submit query");
    }
  };

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
              <u>HELP DESK</u>
            </h4>
          </div>
          <br />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <span style={{ float: "right" }}>
              {" "}
              <Link to="/previouslyRaisedQueries">
                Previously Raised Issues
              </Link>
            </span>
            <br />
            <hr />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Form
                onSubmit={handleSubmit}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  margin: "0 auto",
                  background: "#f8f8f8",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <Form.Group controlId="formGridIntendedFor" className="mb-3">
                  <Form.Label>Intended For</Form.Label>
                  <Form.Select
                    value={intendedFor}
                    onChange={(e) => setIntendedFor(e.target.value)}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Dean">Dean</option>
                    <option value="Warden">Warden</option>
                    <option value="President">President</option>
                    <option value="Misconduct">Misconduct</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="formGridQuestion" className="mb-3">
                  <Form.Label>Issue *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter Issue"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                  />
                </Form.Group>
                <div style={{ textAlign: "center" }}>
                  <Button color="success" type="submit">
                    Submit
                  </Button>
                </div>
                {message && (
                  <div
                    style={{
                      marginTop: "1rem",
                      color: "green",
                      textAlign: "center",
                    }}
                  >
                    {message}
                  </div>
                )}
              </Form>
            </div>
          </div>
          <br />
          <br />
        </Col>
      </Row>
    </div>
  );
}

export default HelpDesk;
