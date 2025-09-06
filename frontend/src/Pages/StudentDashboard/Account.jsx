import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row, Table } from "reactstrap";
import './StudentDashboard.scss';
import { toast } from 'react-toastify';

function Account() {
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (!userId) return;
        Axios.get(`http://localhost:3001/student/account/${userId}`)
            .then(res => {setAccount(res.data); toast.success('Account data loaded successfully');})
            .catch(err => {console.error('Failed to fetch account:', err); toast.error('Failed to load account data');});
    }, []);

    if (!account) return <div>Loading...</div>;

    return (
        <div className='componentColor'>
            <Row>
                <Col>
                    <div className="account-details-container">
                        <h4>Account Details</h4>
                        <Table bordered>
                            <tbody>
                                <tr><th>Roll No</th><td>{account.rollNo}</td></tr>
                                <tr><th>Name</th><td>{account.firstName} {account.middleName} {account.lastName}</td></tr>
                                <tr><th>Address</th><td>{account.address}</td></tr>
                                <tr><th>Mobile Number</th><td>{account.mobileNumber}</td></tr>
                                <tr><th>Category</th><td>{account.category}</td></tr>
                                <tr><th>Email</th><td>{account.emailId}</td></tr>
                                <tr><th>City</th><td>{account.city}</td></tr>
                                <tr><th>State</th><td>{account.state}</td></tr>
                                <tr><th>Marital Status</th><td>{account.maritalStatus}</td></tr>
                                <tr><th>Year</th><td>{account.year}</td></tr>
                                <tr><th>Branch</th><td>{account.branch}</td></tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Account;