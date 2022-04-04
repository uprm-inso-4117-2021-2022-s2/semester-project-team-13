import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ResearchCard from "../Components/ResearchCard";
import Grid from '@mui/material/Grid';
import logoUprm from '../Images/logoUprm.png'

const Adversarial = {
  name: "​Adversarial Learning Networks",
  briefDescription: "How can we downgrade the performance of the most popular and effective face recognition models and algorithms?",
  imgPath: logoUprm,
  description: 
  `
  We propose to develop an adversarial learning framework targeted to face recognition models. 
  Using the most popular and effective FR models and algorithms, the data with which they operate 
  and the existing adversarial attacks to downgrade the performance of such models. There are many 
  adversarial attacks targeted to computer vision models, which we can use as inspiration for 
  creating attacks for FR tasks. This adversarial attacks are useful to identify the vulnerabilities 
  of the models before they are deployed.
  `
};

const Embedded = {
  name: "Embedded System",
  briefDescription: "We focus on sustaining the power grid’s data, stored in a sensor network, in response to a natural disturbance.",
  imgPath: logoUprm,
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
  `
};

const PandaHat = {
  name: "​Cybersecurity Training & Network Anomaly Detection",
  briefDescription: "Can vulnerabilities be discovered and protect against before they are made public with Machine learning and dynamic analysis?",
  imgPath: logoUprm,
  description: 
  `
  Over the years, network vulnerabilities have been increasing exponentially. Moreover, with the 
  ]emergence of new technologies come new attack vectors for malicious actors to exploit. For this 
  reason, systems require measures to maintain the pillars of Cybersecurity: confidentiality, 
  integrity, and availability. With this in mind, this group will be dedicated to using machine 
  learning to automate the detection of anomalies in computer networks. Students will acquire the 
  basic knowledge of Cybersecurity concepts and the technical skills needed to fulfill all the 
  security world's desired tasks.
  `
};

const NLP = {
  name: "​Hybrid-Architecture Symbolic Parser and Neural Lexicon",
  briefDescription: "How can a computer identify all lexical and structural ambiguities within a given sentence?",
  imgPath: logoUprm,
  description: 
  `
  While the syntactic structures of Language are hierarchical, their externalizations are linear 
  by design. This can lead to ambiguity, which is inefficient for communication. We will develop 
  a syntactic parser capable of recognizing all potential syntactic and lexical ambiguities within 
  a given sentence. This parser will be useful in industry, education, and as a basis for further 
  development of technologies in human language comprehension.
  `
};

const research = [Adversarial, Embedded, PandaHat, NLP, Adversarial, Embedded]

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

          <Grid container spacing={2} style={{marginBottom: "50px", marginTop: "25px", textAlign: "center"}}>

            {
            research.map(res => 
              <Grid item xs={4}>
                <ResearchCard 
                imgPath={res.imgPath} 
                name={res.name} 
                briefDescription={res.briefDescription} 
                researchPage={res.researchPage} 
                description={res.description} 
                />
              </Grid>  
            )
            }
        </Grid>

        </Container>
    </div>
  );
}

export default Projects;