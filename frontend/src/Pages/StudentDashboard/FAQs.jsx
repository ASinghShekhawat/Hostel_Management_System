import Axios from 'axios';
import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { toast } from 'react-toastify';
import { Col, Row } from "reactstrap";

const FAQs = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/student/faqs')
      .then(response => {setFaqs(response.data); toast.success('FAQs loaded successfully');})
      .catch(error => {console.error('Failed to fetch FAQs:', error); toast.error('Failed to load FAQs');});
  }, []);

  return (
    <div className='componentColor'>

      <Row className='m-0'>
        <Col>
          <br />
          <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h4><u>FAQs</u></h4>
          </div>
          <br />
          <Accordion>
            {faqs.map((faq, idx) => (
              <Accordion.Item eventKey={String(idx)} key={faq.id}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </div >
  );
};

export default FAQs;