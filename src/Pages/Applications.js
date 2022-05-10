import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ApplicationCard from "../Components/ApplicationCard";
import Grid from '@mui/material/Grid';
import NotFound from '../Images/notFound404.svg'
import Divider from '@mui/material/Divider';

//https://resources.workable.com/job-descriptions/
const Pepito = {
  name: "​Pepito Pérez",
  id: 1,
  email:"pepito.perez@gmail.com",
  resume:`pepitoResume.pdf`,
  date:"March 12, 2022",
  research: "Cybersecurity",
  major: "CIIC",
  yearStudy: "3rd",
  classes:  ["CIIC 3011",
             "CIIC 3015",
             "CIIC 3075",
             "CIIC 3081",
             "CIIC 4010"],
  skills: ["Active listening", "Communication", "Leadership", "Management skills", "Problem-solving"]
};

const Juana = {
  name: "Juana Cubana",
  id: 2,
  email:"juana.cubana@gmail.com",
  resume:`juanaResume.pdf`,
  date:"March 10, 2022",
  research: "Cybersecurity",
  major: "ICOM",
  yearStudy: "4th",
  classes:  ["CIIC 3011",
             "CIIC 3015",
             "CIIC 3075",
             "CIIC 3081",
             "CIIC 4010"],
  skills: ["Active listening", "Communication", "Leadership", "Management skills", "Problem-solving"]
};

const Eliezer = {
  name: "​Eliezer Pérez Irizarry",
  id: 3,
  email:"eliezer.perez@gmail.com",
  resume:`eliezerResume.pdf`,
  date:"May 10, 2022",
  research: "​Adversarial Learning Networks",
  major: "INSO",
  yearStudy: "4th",
  classes:  ["INME 3011",
             "QUIM 3015",
             "CIIC 3075",
             "CIIC 3081",
             "CIIC 4010"],
  skills: ["Communication", "Leadership", "Problem-solving"]
};

const Emily = {
  name: "Emily Cardona Galicia",
  id: 4,
  email:"emily.cardona@gmail.com",
  resume:`emilyResume.pdf`,
  date:"March 1, 2022",
  research: "Embedded System",
  major: "INSO",
  yearStudy: "2nd",
  classes:  ["CIIC 3011",
             "CIIC 3015",
             "CIIC 3075",
             "CIIC 3081",
             "CIIC 4010"],
  skills: ["Active listening", "Communication", "Leadership", "Management skills", "Problem-solving"]
};

const applications = [Eliezer, Pepito, Juana, Emily]

function Applications(props) {
  var tempKeyNum = 0

  return (
    <div className="Applications">
      
      {props.userType === "P" ?
      <div>
        <Container maxWidth="lg" style={{padding: "10vh", paddingBottom: 0, textAlign: "center"}}>
            <Box sx={{ height: '30vh' }}>
              <Typography variant="h3" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#252B42", margin:"0"}}>
              Pending
              </Typography>
              <Typography variant="h3" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#22BCEA"}}>
              Applications
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div" style={{fontFamily: "Montserrat", color: "#737373"}}>
              These are all your pending requests
              </Typography>
            </Box>

        </Container>

        <Container maxWidth="lg"> 
          <Typography variant="h4" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#212121"}}>
            Applications 
          </Typography>

          <Grid container alignItems="stretch" spacing={2} style={{marginBottom: "50px", marginTop: "25px", textAlign: "center"}}>

            {
            applications.map(app =>{
              tempKeyNum = tempKeyNum + 1
              return ( 
                <Grid item key={tempKeyNum + app.id} xs={12}>
                    <ApplicationCard 
                    name={app.name} 
                    id={app.id}
                    email={app.email}
                    resume={app.resume}
                    research={app.research}
                    date={app.date}
                    major={app.major}
                    yearStudy={app.yearStudy}
                    classes={app.classes}
                    skills={app.skills}
                    />
                    <Divider/>
                  </Grid>  
                  
                )
            }
            )
            }
          </Grid>
        </Container>
      </div>

      :
  
      <div style={{textAlign: "center"}}>
          <Grid container component="main" sx={{ height: '75vh', justifyContent: "center"}}>
              <Grid item xs={6}
              sx={{
                  backgroundImage: `url(${NotFound})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "100%",
                  backgroundPosition: 'center'
              }}
              />
          </Grid>

          <a href="https://storyset.com/people" 
          style={{
              fontSize: "12px", 
              fontFamily: "Montserrat", 
              color: "#737373", 
              textDecoration:"None"}}>People illustrations by Storyset</a>      
      </div>

    }
    </div>
  );
}

export default Applications;