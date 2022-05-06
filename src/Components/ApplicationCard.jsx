import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ApplicantInfo from './ApplicantInfo';
import Grid from '@mui/material/Grid';


const style = {
    fontFamily: "Montserrat", 
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 1, /* number of lines to show */
    WebkitBoxOrient: "vertical",
}

const styleDescription = {
    fontFamily: "Montserrat", 
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3, /* number of lines to show */
    WebkitBoxOrient: "vertical",
}
export default function ApplicationCard(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (

        <Grid container spacing={3}>
            <Grid item xs style={{textAlign:"left"}}>
                Applicants Name
                <br />
                <b>
                {props.name}
                </b>
            </Grid>
            <Grid item xs style={{textAlign:"left"}}>
                Research
                <br />
                <b>
                {props.research}
                </b>
            </Grid>
            <Grid item xs style={{textAlign:"left"}}>
                Requested On
                <br />
                <b>
                {props.date}
                </b>
            </Grid>
            <Grid item xs>
                <Button variant="contained" style={{backgroundColor:"#FE5B00", marginBottom: "20px"}} onClick={handleOpen}>
                View Profile
                </Button>
                <ApplicantInfo 
                    open={open} 
                    handleClose={handleClose} 
                    name={props.name} 
                    id={props.id}
                    email={props.email}
                    resume={props.resume}
                    major={props.major}
                    yearStudy={props.yearStudy}
                    classes={props.classes}
                    skills={props.skills}
                />
            </Grid>
            
        </Grid>
        
    );
}
