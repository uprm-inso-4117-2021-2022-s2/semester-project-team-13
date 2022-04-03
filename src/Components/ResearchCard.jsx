import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ResearchCard(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image={props.imgPath}
            alt="research image"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.briefDescription}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="contained" style={{backgroundColor:"#FE5B00"}} href={props.researchPage} onClick={props.handleOpen}>
                Learn More
            </Button>
            <ResearchInfo open={open} />
        </CardActions>
        </Card>
    );
}
