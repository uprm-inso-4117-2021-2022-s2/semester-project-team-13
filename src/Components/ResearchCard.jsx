import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ResearchInfo from './ResearchInfo';

export default function ResearchCard(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <Card sx={{ maxWidth: 345}} style={{textAlign: "center"}}>
            <CardMedia
                component="img"
                height="140"
                image={props.imgPath}
                alt={props.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.briefDescription}
                </Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button variant="contained" style={{backgroundColor:"#FE5B00", marginBottom: "20px"}} onClick={handleOpen}>
                    Learn More
                </Button>
                <ResearchInfo open={open} handleClose={handleClose} name={props.name} description={props.description} />
            </CardActions>
        </Card>
    );
}
