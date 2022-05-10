import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchBar from "../Components/SearchBar"
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import NotFound from '../Images/notFound404.svg'

const Majors = [
  'Chemical Engineering',
  'Civil Engineering',
  'Computer Engineering',
  'Computer Sciences and Engineering',
  'Electrical Engineering',
  'Industrial Engineering',
  'Mechanical Engineering',
  'Software Engineering',
  'No preference',
];

const Years = [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th or more',
    'No preference',
];

const Areas = [
  { label: 'Machine Learning', number: 1 },
  { label: 'Data Analysis', number: 2 },
  { label: 'Aerospace', number: 3 },
  { label: 'Cybersecurity', number: 4 },
  { label: 'Other', number: 5 }
];

const Skills = [
    {title: "Active listening"},
    {title: "Communication"},
    {title: "Leadership"},
    {title: "Management skills"},
    {title: "Problem-solving"}
]

const Classes = [
    {title: "CIIC 3011"},
    {title: "CIIC 3015"},
    {title: "CIIC 3075"},
    {title: "CIIC 3081"},
    {title: "CIIC 4010"},
    {title: "CIIC 4020"},
    {title: "CIIC 4025"},

    {title: "CIIC 4030"},
    {title: "CIIC 4050"},
    {title: "CIIC 4060"},
    {title: "CIIC 4070"},
    {title: "CIIC 4082"},
    {title: "CIIC 4995"},

    {title: "CIIC 4998"},
    {title: "CIIC 5015"},
    {title: "CIIC 5017"},
    {title: "CIIC 5018"},
    {title: "CIIC 5019"},
    {title: "CIIC 5029"},

    {title: "CIIC 5045"},
    {title: "CIIC 5110"},
    {title: "CIIC 5120"},
    {title: "CIIC 5130"},
    {title: "CIIC 5140"},
    {title: "CIIC 5995"},

    {title: "INSO 4101"},
    {title: "INSO 4115"},
    {title: "INSO 4116"},
    {title: "INSO 4117"},
    {title: "INSO 4151"},
    {title: "INSO 4995"},

    {title: "INSO 4998"},
    {title: "INSO 5111"},
    {title: "INSO 5118"},
    {title: "CIIC 4151"},
    {title: 'No preference'}

]

// Data submitted by the user
let researchData = {
    name: null,
    studyArea: null,
    major: null,
    yearStudy: null,
    skills: null,
    classes: null,
    researchDescription: null,
    jobDescription: null
  }

function Post(props) {
    
    const [open, setOpen] = React.useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    // Research Name Data
    const [valueName, setValueName] = React.useState('');

    const handleChangeName = (event) => {
        setValueName(event.target.value);
    };

    // Research Study Area Data
    const [valueStudyArea, setValueStudyArea] = React.useState();

    const handleChangeStudyArea = (event, value) => {
        setValueStudyArea(value);
    };

    // Research Preferred Major Data
    const [valuePreferredMajor, setValuePreferredMajor] = React.useState('');

    const handleChangePreferredMajor = (event, value) => {
        setValuePreferredMajor(value);
    };

    // Research Preferred Year of Study Data
    const [valuePreferredYear, setValuePreferredYear] = React.useState('');

    const handleChangePreferredYear = (event, value) => {
        setValuePreferredYear(value);
    };

    // Research Required Skills Data
    const [valueSkills, setValueSkills] = React.useState('');

    const handleChangeSkills = (event, value) => {
        setValueSkills(value);
    };
    
    // Research Required Classes Data
    const [valueClasses, setValueClasses] = React.useState('');

    const handleChangeClasses = (event, value) => {
        setValueClasses(value);
    };

    // Research Description Data
    const [valueDescription, setValueDescription] = React.useState('');

    const handleChangeDescription = (event) => {
        setValueDescription(event.target.value);
    };

    // Job Description Data
    const [valueJob, setValueJob] = React.useState('');

    const handleChangeJob = (event) => {
        setValueJob(event.target.value);
    };


    const sumbitHandler = () => {
        setOpen(true);
        researchData = {
            name: valueName,
            studyArea: valueStudyArea,
            major: valuePreferredMajor,
            yearStudy: valuePreferredYear,
            skills: valueSkills,
            classes: valueClasses,
            researchDescription: valueDescription,
            jobDescription: valueJob
        };
    }


    return (    
        <div className="Post">
            {props.userType === "P" ?
                <div>
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
                        <br/>

                        {props.isLogged ?
                            <Grid container direction="row" alignItems="center" style={{justifyContent: "center"}}>
                                <Grid item xs={2.6} style={{textAlign:"left", padding: 0, marginBottom: "20px", marginRight: "40px"}}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Research Name"
                                        style ={{width: '100%'}}
                                        value={valueName}
                                        onChange={handleChangeName}
                                    />
                                </Grid>
                                <Grid item xs={2.6} style={{textAlign:"left", padding: 0, marginBottom: "20px", marginRight: "40px"}}>
                                    <SearchBar options={Areas} label="Research Study Area" onChange={handleChangeStudyArea}/>
                                </Grid>
                                <Grid item xs={2.6} style={{textAlign:"left", padding: 0, marginBottom: "20px", marginRight: "40px"}}>
                                    <SearchBar options={Majors} label="Preferred Major" onChange={handleChangePreferredMajor}/>
                                </Grid>
                                <Grid item xs={2.6} style={{textAlign:"left", padding: 0, marginBottom: "20px"}}>
                                    <SearchBar options={Years} label="Preferred Year of Study" onChange={handleChangePreferredYear}/>
                                </Grid>
                                <Grid item xs={5.6} style={{textAlign:"left", padding: 0, marginBottom: "20px", marginRight: "40px"}}>
                                    <Autocomplete
                                        multiple
                                        id="tags-filled"
                                        options={Skills.map((option) => option.title)}
                                        freeSolo
                                        onChange={handleChangeSkills}
                                        renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                        ))
                                        }
                                        renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            label="Required Skills"
                                        />
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={5.6} style={{textAlign:"left", padding: 0, marginBottom: "20px"}}>
                                    <Autocomplete
                                        multiple
                                        id="tags-filled"
                                        options={Classes.map((option) => option.title)}
                                        freeSolo
                                        onChange={handleChangeClasses}
                                        renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                        ))
                                        }
                                        renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            label="Required Classes"
                                        />
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={11.6} style={{padding: 0, marginBottom: "20px"}}>
                                    <TextField
                                    required
                                    id="outlined-multiline-flexible"
                                    label="Project Description"
                                    multiline
                                    value={valueDescription}
                                    onChange={handleChangeDescription}
                                    style ={{width: '100%'}}
                                    />
                                </Grid>

                                <Grid item xs={11.6} style={{padding: 0, marginBottom: "20px"}}>
                                    <TextField
                                    id="outlined-multiline-flexible"
                                    label="Job Description"
                                    multiline
                                    value={valueJob}
                                    onChange={handleChangeJob}
                                    style ={{width: '100%'}}
                                    />
                                </Grid>

                                <Grid item xs={11.6} style={{padding: 0, marginBottom: "20px"}}>
                                    <Button variant="contained" size="large" style={{backgroundColor:"#FE5B00"}} onClick={sumbitHandler}>
                                        Post
                                    </Button>
                                    <Snackbar sx={{ height: "100%" }} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={4000} onClose={handleClose}>
                                        <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%', backgroundColor:"#4BB543", fontFamily: "Montserrat" }}>
                                            Your research project has been successfully published!
                                        </Alert>
                                    </Snackbar>
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
                                <Button variant="contained" size="large" href="/LogIn" style={{backgroundColor:"#FE5B00", marginTop:"15px"}}>Log in</Button>
                            </div>
                        }
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

export default Post;