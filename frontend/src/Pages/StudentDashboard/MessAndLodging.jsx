import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row, Table } from "reactstrap";
import { toast } from 'react-toastify';

function MessAndLodging() {
    const [messData, setMessData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/student/food-mess')
            .then(res => {setMessData(res.data); toast.success('Mess data loaded successfully');})
            .catch(err => {console.error('Failed to fetch mess data:', err); toast.error('Failed to load mess data');});
    }, []);

    return (
        <div className='componentColor'>
            <Row className='m-0'>
                <Col>
                    <br />
                    <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <h4><u>HOSTEL MESS</u></h4>
                    </div>
                    <br />
                    <div className='ActivitiesList'>
                        <Table striped responsive bordered>
                            <thead>
                                <tr>
                                    <th>Mess Name</th>
                                    <th>Warden</th>
                                    <th>Food Items</th>
                                    <th>Contact Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messData.map(mess => (
                                    <tr key={mess.id}>
                                        <td>{mess.messName}</td>
                                        <td>{mess.messWarden}</td>
                                        <td>
                                            {Array.isArray(mess.food)
                                                ? mess.food.join(', ')
                                                : mess.food}
                                        </td>
                                        <td>{mess.contactInfo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default MessAndLodging;