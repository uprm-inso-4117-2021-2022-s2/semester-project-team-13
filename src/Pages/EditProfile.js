import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchBar from "../Components/SearchBar"
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import NotFound from '../Images/notFound404.svg'
import FileUploadIcon from '@mui/icons-material/FileUpload';

const Majors = [

  { label: 'Chemical Engineering', code: "INQU" },
  { label: 'Civil Engineering', code: "INCI" },
  { label: 'Computer Engineering', code: "ICOM" },
  { label: 'Computer Sciences and Engineering', code: "CIIC" },
  { label: 'Electrical Engineering', code: "INEL" },
  { label: 'Industrial Engineering', code: "ININ" },
  { label: 'Mechanical Engineering', code: "INME" },
  { label: 'Software Engineering', code: "INSO" },
  { label: 'No preference', code: "N/P" }
];

const Years = [
  { label: '1st', number: 1 },
  { label: '2nd', number: 2 },
  { label: '3rd', number: 3 },
  { label: '4th', number: 4 },
  { label: '5th or more', number: 5 },
  { label: 'No preference', code: "N/P" }
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

function EditProfile(props) {
    const [uploadFile, setUploadFile] = React.useState();

    return (    
        <div className="EditProfile">
            {props.userType === "S" ?
                <div>
                    <Container maxWidth="lg" style={{padding: "10vh", paddingBottom: 0, textAlign: "center"}}>
                        <Box sx={{ height: '30vh' }}>
                        <Typography variant="h3" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#252B42", margin:"0"}}>
                        Edit Your
                        </Typography>
                        <Typography variant="h3" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#22BCEA"}}>
                        Profile
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div" style={{fontFamily: "Montserrat", color: "#737373"}}>
                        Share your skills and find the ideal research for you.
                        </Typography>
                        </Box>

                    </Container>
                    
                    <Container maxWidth="lg" style={{ textAlign: "center", padding: 0}}>

                        <Typography variant="subtitle1" gutterBottom component="div" style={{fontFamily: "Montserrat", color: "#212121", textAlign: "left"}}>
                        Fill out this form in case you want to make changes to your profile.
                        Remember that all the information provided in this form will be shared with the professors once you apply for their research.
                        </Typography>
                        <br/>

                        <Grid container direction="row" alignItems="center" style={{justifyContent: "center"}}>

                            <Grid item xs={11.6} style={{padding: 0, marginBottom: "20px"}}>
                                <Button
                                    variant="outlined"
                                    component="label"
                                    startIcon={<FileUploadIcon />}
                                    size="large"
                                    >
                                    Upload Your Resume
                                    <input
                                        type="file"
                                        hidden
                                        onChange={(e) => setUploadFile(e.target.files)}
                                    />
                                </Button>
                            </Grid>

                            <Grid item xs={3.6} style={{textAlign:"left", padding: 0, marginBottom: "20px", marginRight: "40px"}}>
                                <TextField
                                    id="outlined-required"
                                    label="Preferred Email"
                                    style ={{width: '100%'}}
                                    defaultValue={props.preferredEmail}
                                />
                            </Grid>
                            <Grid item xs={3.6} style={{textAlign:"left", padding: 0, marginBottom: "20px", marginRight: "40px"}}>
                                <SearchBar options={Majors} label="Your Major" defaultValue={props.major}/>
                            </Grid>
                            <Grid item xs={3.6} style={{textAlign:"left", padding: 0, marginBottom: "20px"}}>
                                <SearchBar options={Years} label="Your Year of Study" defaultValue={props.yearStudy}/>
                            </Grid>
                            <Grid item xs={5.6} style={{textAlign:"left", padding: 0, marginBottom: "20px", marginRight: "40px"}}>
                                <Autocomplete
                                    multiple
                                    id="tags-filled"
                                    options={Skills.map((option) => option.title)}
                                    freeSolo
                                    defaultValue={props.skills}
                                    renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                    ))
                                    }
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        label="Your Skills"
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
                                    defaultValue={props.courses}
                                    renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                    ))
                                    }
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        label="Courses you have taken"
                                    />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={11.6} style={{padding: 0, marginBottom: "20px"}}>
                                <Button type="submit" variant="contained" size="large" style={{backgroundColor:"#FE5B00"}}>
                                    Edit Profile
                                </Button>
                            </Grid>
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

export default EditProfile;