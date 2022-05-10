import React from "react";
import Banner from "../Components/Banner";
import HomeCard from '../Components/HomeCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import resume from '../Images/resume.svg'
import options from '../Images/options.svg'
import knowledge from '../Images/knowledge.svg'
import submit from '../Images/submit.svg'
import qualified from '../Images/qualified.svg'
import find from '../Images/find.svg'


const professorHomeInfo = {
  title:"Welcome back",
  accountType: "Professor",
  description: "Go back to where you left off",
  button: "Go to applications",
  buttonLink: "Applications"
}

const professorHomeCards = [
  {name:"Submit your research", key:"PC1", imgPath:submit, briefDescription: "Advertise your research project on this page for students to find"},
  {name:"Qualified applicants", key:"PC2", imgPath:qualified, briefDescription: "Receive hundreds of applications from students that meet the criteria"},
  {name:"Find the perfect student", key:"PC3", imgPath:find, briefDescription: "Filter candidates until you find the candidates you feel are the most qualified"}
];
  
const studentHomeInfo = {
  title: "Welcome back",
  accountType: "Student",
  description: "Go back to where you left off",
  button: "Go to projects",
  buttonLink: "Projects"
}

const studentHomeCards = [
  {name: "Submit your resume", key:"SC1", imgPath: resume, briefDescription:"Upload your resume so professors can take a look at it and possibly contact you"},
  {name: "Search for options", key:"SC2", imgPath: options, briefDescription:"Search from a variety of research projects until you find one that suits your needs"},
  {name: "Expand your knowledge", key:"SC3", imgPath: knowledge, briefDescription: "Grow your experience and knowledge by actively collaborating with professors"}
]

function Home(props) {
  var tempKeyNum = 0

  return (
    <div className="Home">
     {props.userType === "P" ?
     <div>
      <Banner 
      title={professorHomeInfo.title} 
      button={professorHomeInfo.button} 
      buttonLink={professorHomeInfo.buttonLink}
      accountType={professorHomeInfo.accountType} 
      description={professorHomeInfo.description} 
      />
      <Container maxWidth="lg"> 
          <Grid container alignItems="stretch" spacing={2} style={{marginBottom: "50px", marginTop: "25px", textAlign: "center"}}>

            {
            professorHomeCards.map(profCard =>{
              tempKeyNum = tempKeyNum + 1
              return ( 
                <Grid item key={tempKeyNum + profCard.id} xs={4}>
                    <HomeCard
                    imgPath={profCard.imgPath} 
                    name={profCard.name} 
                    briefDescription={profCard.briefDescription} 
                    />
                  </Grid>  
                )
            }
            )
            }
          </Grid>
        </Container>
    </div>

     :
     
     <div>
      <Banner 
      title={studentHomeInfo.title} 
      button={studentHomeInfo.button} 
      buttonLink={studentHomeInfo.buttonLink}
      accountType={studentHomeInfo.accountType} 
      description={studentHomeInfo.description} 
      />
      <Container maxWidth="lg"> 
          <Grid container alignItems="stretch" spacing={2} style={{marginBottom: "50px", marginTop: "25px", textAlign: "center"}}>

            {
            studentHomeCards.map(studentCard =>{
              tempKeyNum = tempKeyNum + 1
              return ( 
                <Grid item key={tempKeyNum + studentCard.id} xs={4}>
                    <HomeCard
                    imgPath={studentCard.imgPath} 
                    name={studentCard.name} 
                    briefDescription={studentCard.briefDescription} 
                    />
                  </Grid>  
                )
            }
            )
            }
          </Grid>
        </Container>
      </div>
     }
    </div>
  );
}

export default Home;