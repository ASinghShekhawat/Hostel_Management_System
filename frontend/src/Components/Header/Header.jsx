import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Row, Col } from "reactstrap";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import './Header.scss';
export default function Header() {
  return (
    <>
      <div className='navbar'>
        <div className="div1">
          <img alt="MBM Logo" className="img1" src="https://api.mbm.ac.in/assets/e0f52a82-6614-4a3a-a0b8-f5882652f136" />
        </div>
        <div className="div2">
          <span>&nbsp;MBM Engineering College Hostels</span><br />
          <span3>&nbsp;&nbsp;Arora Circle, Ratanada, Jodhpur-342 011<br />
            <hr style={{ color: 'white', height: '1px' }} />
            <span3>&nbsp;&nbsp;Email: mbmhostel@yahoo.com, connect@mbmhostelauthority.org<br />
              <span3>&nbsp;&nbsp;Mobile:&nbsp;8777071047&nbsp;&nbsp;Phone:&nbsp;033-24567890
              </span3></span3></span3>
        </div>

        <div className="div3" >
          <div className="link">
            <Link to="/sign-in-page" title="Open Login Form, Members will be able to view all links only after login">
              {localStorage.getItem('userName') ? localStorage.getItem('userName') : 'Log In'}
            </Link>
            <br />
            {/* <a href="/sign-in-page" target="container3" title="Open Login Form, Members will be able to view all links only after login">LOG IN</a><br /> */}

            <Link to="/sign-in-page" title="Open New Member Registration form">REGISTER</Link>		</div>
        </div>

      </div>
    </>
  );
}