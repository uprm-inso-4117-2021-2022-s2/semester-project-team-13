import * as React from 'react';
import validator from 'validator';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        RNECT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
const MAX_LENGTH = 35;

export default function SignUp() {

  var selected = "Student";

  const handleSelected = (event) => {
    selected = event.target.value
  };

  const [firstN, setFirstN] = React.useState("");
  const [errorMessageFN, setErrorMessageFN] = React.useState("");

  const handleFirstN = (event) => {
      setFirstN(event.target.value)

      if (firstN.length >= MAX_LENGTH) {
        setErrorMessageFN(
          "The input has exceeded the maximum number of characters"
        );
      }
      else{
        setErrorMessageFN("");
      }
  };

  
  const [lastN, setLastN] = React.useState("");
  const [errorMessageLN, setErrorMessageLN] = React.useState("");

  const handleLastN = (event) => {
      setLastN(event.target.value)

      if (lastN.length >= MAX_LENGTH) {
        setErrorMessageLN(
          "The input has exceeded the maximum number of characters."
        );
      }
      else{
        setErrorMessageLN("");
      }
  };

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState('')

  const validateEmail = (event) => {
    setEmail(event.target.value)
  
    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Please enter a valid email address.')
    }
  }

  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false)
  
  const validatePassword = (event) => {

    setPassword(event.target.value)
  
    if (validator.isStrongPassword(password, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setPasswordError(false)
    } else {
      setPasswordError(true)
    }
  }

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#FE5B00' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create an Account
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  error={errorMessageFN.length > 0}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  helperText={errorMessageFN}
                  onChange={handleFirstN}
                  value={firstN}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  error={errorMessageLN.length > 0}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  helperText={errorMessageLN}
                  onChange={handleLastN}
                  value={lastN}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  error={emailError.length > 0}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  helperText={emailError}
                  onChange={validateEmail}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Account Type</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={handleSelected}
                    >
                        <FormControlLabel value="Student" control={<Radio style={{color: "#FE5B00"}}/>} label="Student" />
                        <FormControlLabel value="Professor" control={<Radio style={{color: "#FE5B00"}}/>} label="Professor" />
                    </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  error={passwordError}
                  fullWidth
                  name="password"
                  label="Password"
                  id="password"
                  autoComplete="new-password"
                  onChange={validatePassword}
                  value={password}
                  InputProps={{ // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  type={showPassword ? "text" : "password"} 
                />
                  {passwordError ? 
                    <Alert severity="error" style={{marginTop: "10px"}}>
                      Your password needs to:
                      <br/>
                        - be at least 8 characters long
                        <br/>
                        - include at least 1 uppercase character
                        <br/>
                        - include at least 1 lowercase character
                        <br/>
                        - include at least 1 number
                        <br/>
                        - include at least 1 symbol
                    </Alert>
                  :
                    null
                  }
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:"#22BCEA"}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/LogIn" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
