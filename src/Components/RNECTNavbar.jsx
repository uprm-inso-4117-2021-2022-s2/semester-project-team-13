import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import logo from '../Images/logo.png'
import AccountMenu from './AccountMenu'

var pages = ['Home'];

const RNECTNavbar = (props) => {

  const LogButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#FE5B00",
    '&:hover': {
      backgroundColor: "#FE5B00",
    },
  }));

  return (
    <AppBar elevation={0} color='transparent' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <img src={logo} style={{maxWidth: "125px", marginRight: "50px"}} alt="RNECT"/>

          {pages.map((page) => (
            <Button
              variant="Text"
              key={page}
              href={"/" + page}
              sx={{ my: 2, color: 'black', display: 'block', marginLeft: "10px" }}
            >
              {page}
            </Button>
          ))}

          {props.userType === "P" ? 
            <Button
              variant="Text"
              key="Post"
              href="/Post"
              sx={{ my: 2, color: 'black', display: 'block', marginLeft: "10px" }}
            >
              Post
            </Button>
          :
            <Button
            variant="Text"
            key="Projects"
            href="/Projects"
            sx={{ my: 2, color: 'black', display: 'block', marginLeft: "10px" }}
            >
              Projects
            </Button>
          }
          {props.isLogged ? 
           <Stack sx={{marginLeft:"auto"}} spacing={2} direction="row">
            <AccountMenu name={props.userName}/>
          </Stack>
          :
          <Stack sx={{marginLeft:"auto"}} spacing={2} direction="row">
            <LogButton variant="contained" href="/SignUp">Sign Up</LogButton>
            <LogButton variant="contained">Login</LogButton>
          </Stack>

          }
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default RNECTNavbar;