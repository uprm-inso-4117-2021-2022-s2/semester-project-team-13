import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ResearchInfo from './ResearchInfo';

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
export default function ResearchCard(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <Card sx={{ maxWidth: 345, height: "100%" }} style={{textAlign: "center"}}>
            <CardMedia
                component="img"
                height="140"
                image={props.imgPath}
                alt={props.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={style}>
                {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={styleDescription}>
                {props.briefDescription}
                </Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button variant="contained" style={{backgroundColor:"#FE5B00", marginBottom: "20px"}} onClick={handleOpen}>
                    Learn More
                </Button>
                <ResearchInfo 
                    open={open} 
                    handleClose={handleClose} 
                    name={props.name} 
                    description={props.description} 
                    studyArea={props.studyArea} 
                    pMajor={props.pMajor}
                    yearStudy={props.yearStudy}
                    classes={props.classes}
                    jobDescription={props.jobDescription}
                    requiredSkills={props.requiredSkills}
                />
            </CardActions>
        </Card>
    );
}
