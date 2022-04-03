import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

var research1 = {
  name: "Eric",
  briefDescription: "Freelancer",
  imgPath : "JavaScript",
  researchPage : "/research1"
};

function Projects() {
  return (
    <div className="Projects">
        <Container maxWidth="lg" style={{padding: "10vh", textAlign: "center"}}>
            <Box sx={{ height: '40vh' }}>
              <Typography variant="h3" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#252B42", margin:"0"}}>
              Research
              </Typography>
              <Typography variant="h3" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#22BCEA"}}>
              Projects
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div" style={{fontFamily: "Montserrat", color: "#737373"}}>
              We liked to present some of the research options that 
              <br/>
              students have with our platform.
              </Typography>
              <Button variant="contained" style={{backgroundColor:"#FE5B00", marginTop:"15px"}}>Log in</Button>
            </Box>
        </Container>

        <Container maxWidth="lg"> 
          <Typography variant="h4" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#212121"}}>
            Featured projects
          </Typography>

        </Container>
    </div>
  );
}

export default Projects;