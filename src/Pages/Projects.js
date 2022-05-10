import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ResearchCard from "../Components/ResearchCard";
import SearchBar from "../Components/SearchBar"
import Grid from '@mui/material/Grid';
import logoUprm from '../Images/logoUprm.png'
import SearchIcon from '@mui/icons-material/Search';
import NotFound from '../Images/notFound404.svg'

//https://resources.workable.com/job-descriptions/
const Adversarial = {
  name: "​Adversarial Learning Networks",
  id: "Adversarial",
  briefDescription: "How can we downgrade the performance of the most popular and effective face recognition models and algorithms?",
  imgPath: logoUprm,
  studyArea:"Computer Science",
  description: 
  `
  We propose to develop an adversarial learning framework targeted to face recognition models. 
  Using the most popular and effective FR models and algorithms, the data with which they operate 
  and the existing adversarial attacks to downgrade the performance of such models. There are many 
  adversarial attacks targeted to computer vision models, which we can use as inspiration for 
  creating attacks for FR tasks. This adversarial attacks are useful to identify the vulnerabilities 
  of the models before they are deployed.
  `,
  pMajor: "INSO",
  yearStudy: "2nd or more",
  classes: "CIIC 3011, CIIC 4010",
  jobDescription: 
  `
  We are looking for a professional Embedded Software Engineer to execute complete embedded software 
  development lifecycle. The goal is to create scalable and optimized software systems.
  `,
  requiredSkills: ["Active listening", "Communication", "Leadership"]
};

const Embedded = {
  name: "Embedded System",
  id: "Embedded",
  briefDescription: "We focus on sustaining the power grid’s data, stored in a sensor network, in response to a natural disturbance.",
  imgPath: logoUprm,
  studyArea:"Computer Science",
  description: 
  `
  Some of the biggest problems power grids have when facing natural disasters are recovery time and
  the collection of information about the system. This project aims to solve these issues by creating 
  a decentralized solution using a viable communication protocol that will allow us to keep track of 
  the power grids data and optimize its recovery time in the case of a disturbance. The methodology 
  used to achieve the project’s goal is revision of literature about the operation of power grids and 
  how it manages its information, then choosing a viable decentralized communication protocol to use 
  in a prototype that will be incorporated with a decision-making algorithm. Future work is listed 
  based on the current progress of the project. 
  `,
  pMajor: "INSO, CIIC, ICOM",
  yearStudy: "2nd or more",
  classes: "Introduction to software, Programming Languages, Database",
  jobDescription: 
  `
  We are looking for a professional Embedded Software Engineer to execute complete embedded software 
  development lifecycle. The goal is to create scalable and optimized software systems.
  `,
  requiredSkills: ["Active listening", "Communication", "Leadership", "Management skills", "Problem-solving"]
};

const PandaHat = {
  name: "​Cybersecurity Training & Network Anomaly Detection",
  id: "PandaHat",
  briefDescription: "Can vulnerabilities be discovered and protect against before they are made public with Machine learning and dynamic analysis?",
  imgPath: logoUprm,
  studyArea:"​Cybersecurity",
  description: 
  `
  Over the years, network vulnerabilities have been increasing exponentially. Moreover, with the 
  ]emergence of new technologies come new attack vectors for malicious actors to exploit. For this 
  reason, systems require measures to maintain the pillars of Cybersecurity: confidentiality, 
  integrity, and availability. With this in mind, this group will be dedicated to using machine 
  learning to automate the detection of anomalies in computer networks. Students will acquire the 
  basic knowledge of Cybersecurity concepts and the technical skills needed to fulfill all the 
  security world's desired tasks.
  `,
  pMajor: "INSO, CIIC, ICOM",
  yearStudy: "2nd or more",
  classes: "Introduction to software, Programming Languages, Database",
  jobDescription: 
  `
  We are looking for a professional Embedded Software Engineer to execute complete embedded software 
  development lifecycle. The goal is to create scalable and optimized software systems.
  `,
  requiredSkills: ["Active listening", "Communication", "Leadership", "Management skills", "Problem-solving"]
};

const NLP = {
  name: "​Hybrid-Architecture Symbolic Parser and Neural Lexicon",
  id: "NLP",
  briefDescription: "How can a computer identify all lexical and structural ambiguities within a given sentence?",
  imgPath: logoUprm,
  studyArea:"Computer Science",
  description: 
  `
  While the syntactic structures of Language are hierarchical, their externalizations are linear 
  by design. This can lead to ambiguity, which is inefficient for communication. We will develop 
  a syntactic parser capable of recognizing all potential syntactic and lexical ambiguities within 
  a given sentence. This parser will be useful in industry, education, and as a basis for further 
  development of technologies in human language comprehension.
  `,
  pMajor: "INSO, CIIC, ICOM",
  yearStudy: "2nd or more",
  classes: "Introduction to software, Programming Languages, Database",
  jobDescription: 
  `
  We are looking for a professional Embedded Software Engineer to execute complete embedded software 
  development lifecycle. The goal is to create scalable and optimized software systems.
  `,
  requiredSkills: ["Active listening", "Communication", "Leadership", "Management skills", "Problem-solving"]
};

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

function Projects(props) {
  var tempKeyNum = 0

  const [research, setResearch] = React.useState([]);

  const searchButton = () => {
    setResearch([Adversarial, Embedded, PandaHat, NLP])
  };


  return (
    <div className="Projects">
      {props.userType === "S" ?
      <div>
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
              {props.isLogged ? 
                  <Grid container spacing={1} direction="row" alignItems="center" margin={4} style={{justifyContent: "center"}}>
                    <Grid item xs={2} style={{textAlign:"left", padding: 0, marginRight: "10px"}}>
                      <SearchBar options={Majors} label="Major"/>
                    </Grid>
                    <Grid item xs={2} style={{textAlign:"left", padding: 0, marginRight: "10px"}}>
                      <SearchBar options={Years} label="Year of Study"/>
                    </Grid>
                    <Grid item xs={3} style={{textAlign:"left", padding: 0}}>
                      <SearchBar options={Areas} label="Study Area" onChange={(event, value) => console.log(value)}/>
                    </Grid>
                    <Grid item xs={3} style={{padding: 0}}>
                      <Button variant="contained" startIcon={<SearchIcon />} style={{backgroundColor:"#FE5B00"}} onClick={searchButton}>Search</Button>
                    </Grid>
                  </Grid>
              :
                <div>
                  <Button variant="contained" style={{backgroundColor:"#FE5B00", marginTop:"15px"}}>Log in</Button>
                </div>
              }
            </Box>

        </Container>

        <Container maxWidth="lg"> 
          <Typography variant="h4" align="center" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#212121"}}>
            Featured projects
          </Typography>

          <Grid container alignItems="stretch" spacing={2} style={{marginBottom: "50px", marginTop: "25px", textAlign: "center"}}>
            {research.length > 0 ?
               research.map(res =>{
                tempKeyNum = tempKeyNum + 1
                return ( 
                  <Grid item key={tempKeyNum + res.id} xs={4}>
                      <ResearchCard 
                      imgPath={res.imgPath} 
                      name={res.name} 
                      id={res.id}
                      briefDescription={res.briefDescription} 
                      researchPage={res.researchPage} 
                      description={res.description} 
                      studyArea={res.studyArea}
                      pMajor={res.pMajor}
                      yearStudy={res.yearStudy}
                      classes={res.classes}
                      jobDescription={res.jobDescription}
                      requiredSkills={res.requiredSkills}
                      />
                    </Grid>  
                  )
                }
              )
            :
              <Typography variant="subtitle1" gutterBottom component="div" style={{fontFamily: "Montserrat", color: "#737373"}}>
              Please fill in the fields above to be able to search.
              </Typography>
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

export default Projects;