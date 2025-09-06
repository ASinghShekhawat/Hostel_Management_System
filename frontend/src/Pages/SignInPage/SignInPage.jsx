import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignInPage.scss";

const theme = createTheme();

export default function SignInPage() {
  const [studentEmail, setStudentEmail] = useState("");
  const [studentEmailError, setStudentEmailError] = useState(false);
  const [studentPassword, setStudentPassword] = useState("");
  const [studentPasswordError, setStudentPasswordError] = useState(false);

  const [adminEmail, setAdminEmail] = useState("");
  const [adminEmailError, setAdminEmailError] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminPasswordError, setAdminPasswordError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit1 = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const handleSubmit2 = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const studentLogin = async (event) => {
    event.preventDefault(); // Prevent form submission

    // Validate inputs
    let hasError = false;
    if (!studentEmail) {
      setStudentEmailError(true);
      hasError = true;
    } else {
      setStudentEmailError(false);
    }

    if (!studentPassword) {
      setStudentPasswordError(true);
      hasError = true;
    } else {
      setStudentPasswordError(false);
    }

    // If validation fails, don't proceed with login
    if (hasError) {
      return;
    }

    try {
      const response = await Axios.post("http://localhost:3001/student/login", {
        email: studentEmail,
        password: studentPassword,
      });

      if (response.status === 201) {
        // Store user data in localStorage
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("userName", response.data.user.first_name);
        localStorage.setItem("userRole", response.data.user.role);

        // Dispatch a custom event to notify other components
        window.dispatchEvent(new Event("storage"));

        // Show success toast message
        toast.success("Successfully signed in!");

        // Navigate after a short delay to allow toast to be seen
        navigate("/studentDashboard");
      }
    } catch (error) {
      console.log("Login error:", error);
      toast.error("Failed to sign in. Please check your credentials.");
    }
  };

  const adminLogin = async (event) => {
    event.preventDefault();

    // Validate inputs
    let hasError = false;
    if (!adminEmail) {
      setAdminEmailError(true);
      hasError = true;
    } else {
      setAdminEmailError(false);
    }

    if (!adminPassword) {
      setAdminPasswordError(true);
      hasError = true;
    } else {
      setAdminPasswordError(false);
    }

    // If validation fails, don't proceed with login
    if (hasError) {
      return;
    }

    try {
      const response = await Axios.post("http://localhost:3001/admin/login", {
        email: adminEmail,
        password: adminPassword,
      });

      if (response.status === 201) {
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("userName", response.data.user.first_name);
        localStorage.setItem("userRole", response.data.user.role);
        // Dispatch a custom event to notify other components
        window.dispatchEvent(new Event("storage"));

        // Show success toast message
        toast.success("Successfully signed in!");

        // Navigate after a short delay to allow toast to be seen
        navigate("/administratorDashboard");
      }
    } catch (error) {
      console.error("Admin login error:", error);
      toast.error("Failed to sign in. Please check your credentials.");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "7%",
          marginTop: "2px",
          backgroundColor: "#2196F3",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <div className="topLink">HOME</div>
        </Link>
        <Link to="/people">
          <div className="topLink">People</div>
        </Link>
        <Link to="/hostel-details">
          <div className="topLink">Hostels</div>
        </Link>
        <Link to="/hostel-rules">
          <div className="topLink">Rules</div>
        </Link>
        <Link to="/">
          <div className="topLink">COMMITTEE</div>
        </Link>
        <Link to="/">
          <div className="topLink">News</div>
        </Link>
        <Link to="/">
          <div className="topLink">ABOUT US</div>
        </Link>
        <Link to="/">
          <div className="topLink">CONTACT</div>
        </Link>
      </div>
      <div className="d-flex gap-5" style={{ justifyContent: "center" }}>
        <div>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Student
                </Typography>
                <Box component="form" onSubmit={handleSubmit1} noValidate>
                  <TextField
                    className="inputBox"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    error={studentEmailError}
                    helperText={studentEmailError ? "Email is required" : ""}
                    // sx={{ mt: "3px", mb: "2px" }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={studentPassword}
                    onChange={(e) => setStudentPassword(e.target.value)}
                    error={studentPasswordError}
                    helperText={
                      studentPasswordError ? "Password is required" : ""
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={studentLogin}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      {/* <Link href="#" variant="body2">
                      Forgot password?
                    </Link> */}
                    </Grid>
                    <Grid item>
                      {/* <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link> */}
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
        <div>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Administration
                </Typography>
                <Box component="form" onSubmit={handleSubmit2} noValidate>
                  <TextField
                    className="inputBox"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    error={adminEmailError}
                    helperText={adminEmailError ? "Email is required" : ""}
                    // sx={{ mt: "3px", mb: "2px" }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    error={adminPasswordError}
                    helperText={
                      adminPasswordError ? "Password is required" : ""
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={adminLogin}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      {/* <Link href="#" variant="body2">
                      Forgot password?
                    </Link> */}
                    </Grid>
                    <Grid item>
                      {/* <Link href="#" variant="body2">
                    </Link> */}
                      Don't have an account? Sign Up
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
