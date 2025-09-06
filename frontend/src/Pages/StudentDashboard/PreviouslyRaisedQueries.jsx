import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Col, Row } from "reactstrap";
import { toast } from 'react-toastify';

function PreviouslyRaisedQueries() {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (!userId) return;
        fetch(`http://localhost:3001/student/previous-queries/${userId}`)
            .then(res => res.json())
            .then(data => {
                setQueries(data);
                setLoading(false);
                toast.success("Queries loaded successfully");
            })
            .catch(() => {
                setLoading(false);
                toast.error("Failed to load queries");
            });
    }, []);

    return (
        <div className='componentColor'>
            <Row className='m-0'>
                <Col>
                    <br />
                    <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <h4><u>PREVIOUSLY RAISED QUERIES</u></h4>
                    </div>
                    <br />
                    {loading ? (
                        <div style={{ textAlign: 'center' }}>Loading...</div>
                    ) : queries.length === 0 ? (
                        <div style={{ textAlign: 'center' }}>No queries found.</div>
                    ) : (
                        <Accordion>
                            {queries.map((query, idx) => (
                                <Accordion.Item eventKey={String(idx)} key={query.id}>
                                    <Accordion.Header>
                                        {query.question} <span style={{ marginLeft: 10, color: '#888', fontSize: 12 }}>({query.status})</span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <strong>Answer:</strong> {query.answer || 'Not answered yet.'}
                                        <br />
                                        <strong>Intended For:</strong> {query.intendedFor}
                                        <br />
                                        <strong>Submitted:</strong> {query.dateSubmitted ? new Date(query.dateSubmitted).toLocaleString() : 'N/A'}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    )}
                </Col>
            </Row>
        </div>
    );
}

export default PreviouslyRaisedQueries;