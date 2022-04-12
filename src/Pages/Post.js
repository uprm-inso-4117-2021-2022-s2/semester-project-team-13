import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchBar from "../Components/SearchBar"
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Majors = [

  { label: 'Chemical Engineering', code: "INQU" },
  { label: 'Civil Engineering', code: "INCI" },
  { label: 'Computer Engineering', code: "ICOM" },
  { label: 'Computer Sciences and Engineering', code: "CIIC" },
  { label: 'Electrical Engineering', code: "INEL" },
  { label: 'Industrial Engineering', code: "ININ" },
  { label: 'Mechanical Engineering', code: "INME" },
  { label: 'Software Engineering', code: "INSO" }
];

const Years = [
  { label: '1st', number: 1 },
  { label: '2nd', number: 2 },
  { label: '3rd', number: 3 },
  { label: '4th', number: 4 },
  { label: '5th or more', number: 5 }
];

const Areas = [
  { label: 'Machine Learning', number: 1 },
  { label: 'Data Analysis', number: 2 },
  { label: 'Aerospace', number: 3 },
  { label: 'Cybersecurity', number: 4 },
  { label: 'No preference', number: 5 }
];

function Post(props) {

  return (
    <div className="Projects">
        <Container maxWidth="lg" style={{padding: "10vh", paddingBottom: 0, textAlign: "center"}}>
            <Box sx={{ height: '30vh' }}>
              <Typography variant="h3" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#252B42", margin:"0"}}>
              Post Your
              </Typography>
              <Typography variant="h3" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#22BCEA"}}>
              Research
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div" style={{fontFamily: "Montserrat", color: "#737373"}}>
              Share your project and find the perfect candidate.
              </Typography>
            </Box>

        </Container>
        
        <Container maxWidth="lg" style={{ textAlign: "center", padding: 0}}>

            <Typography variant="h4" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#212121", textAlign: "left"}}>
            Create a Post
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{fontFamily: "Montserrat", color: "#212121", textAlign: "left"}}>
            Fill in the following form so that your research project can be visible on the platform.
            </Typography>

            {props.isLogged ?
                <Grid container spacing={1} direction="row" alignItems="center" margin={4} style={{justifyContent: "center"}}>
                    <Grid item xs={3} style={{textAlign:"left", padding: 0}}>
                    <SearchBar options={Majors} label="Major"/>
                    </Grid>
                    <Grid item xs={3} style={{textAlign:"left", padding: 0}}>
                    <SearchBar options={Years} label="Year of Study"/>
                    </Grid>
                    <Grid item xs={3} style={{textAlign:"left", padding: 0}}>
                    <SearchBar options={Areas} label="Study Area" onChange={(event, value) => console.log(value)}/>
                    </Grid>
                    <Grid item xs={3} style={{padding: 0}}>
                    <Button variant="contained" startIcon={<SearchIcon />} style={{backgroundColor:"#FE5B00"}}>Search</Button>
                    </Grid>
                </Grid>
            :   
                <div>
                    <br/>
                    <Alert severity="warning" style={{ textAlign: "left"}}>
                        <AlertTitle>Warning</AlertTitle>
                        This is a warning alert — <strong>Please log in to your account in order to create a post.</strong>
                    </Alert>
                    <br/>
                    <Button variant="contained" size="large" style={{backgroundColor:"#FE5B00", marginTop:"15px"}}>Log in</Button>
                </div>
            }
        </Container>

        
    </div>
  );
}

export default Post;