import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
  maxHeight: "80%"
};

export default function ApplicantInfo(props) {

    const [open, setOpen] = React.useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const accept = () => {
        setOpen(true);
    }

    const onDownload = () => {
        const link = document.createElement("a");
        link.download = props.resume;
        link.href = './' + props.resume;
        link.click();
    };

    var tempKeyNum = 0

    return (
        <div>
        
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title"  variant="h4" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#212121"}}>
                    Applicant Information
                </Typography>
                <Divider/>
                <Typography id="modal-modal-description" variant="subtitle1" style={{fontFamily: "Montserrat", color: "#212121"}}>
                    This is all the information provided by the applicant.
                </Typography>  
                <br/>
                <Grid container spacing={3}>
                    <Grid item xs style={{textAlign:"left"}}>

                        <Typography id="modal-modal-description" variant="subtitle1" style={{fontFamily: "Montserrat", color: "#212121"}}>
                            <Button
                                variant="outlined"
                                component="label"
                                onClick={onDownload}
                                startIcon={<FileDownloadIcon />}
                                >
                                Download Resume
                            </Button>
                            <br/>
                            <br/>
                            <b>Name:</b> {props.name}
                            <br/>
                            <b>Email:</b> {props.email}
                            <br/>
                            <b>Major:</b> {props.major}
                            <br/>
                            <b>Year of study:</b> {props.yearStudy}
                            <br/>
                        </Typography>
                        <br/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs style={{textAlign:"left"}}>
                        <Typography id="modal-modal-description" variant="h6" style={{fontFamily: "Montserrat", color: "#212121"}}>
                        Classes
                        </Typography>
                        <Divider/>
                    
                            <ul>
                                {props.classes.map(aClass =>{
                                    tempKeyNum = tempKeyNum + 1
                                        return(
                                            <li key={tempKeyNum + props.id}>
                                                <Typography id="modal-modal-description" variant="body2" style={{fontFamily: "Montserrat"}}>
                                                    {aClass}
                                                </Typography>
                                            </li>
                                        )
                                    }
                                )}
                            </ul>
                
                        <br/>
                    </Grid>
                    <Grid item xs style={{textAlign:"left"}}>
                        <Typography id="modal-modal-description" variant="h6" style={{fontFamily: "Montserrat", color: "#212121"}}>
                        Skills
                        </Typography>
                        <Divider/>
                    
                            <ul>
                                {props.skills.map(skill =>{
                                    tempKeyNum = tempKeyNum + 1
                                        return(
                                            <li key={tempKeyNum + props.id}>
                                                <Typography id="modal-modal-description" variant="body2" style={{fontFamily: "Montserrat"}}>
                                                    {skill}
                                                </Typography>
                                            </li>
                                        )
                                    }
                                )}
                            </ul>
                
                        <br/>
                    </Grid>
                </Grid>
                
        
                
                <div style={{textAlign: "center"}}>
                    <Button variant="contained" size="large" style={{backgroundColor:"#22BCEA", marginRight:10}} endIcon={<CheckIcon />} onClick={accept}>
                        Accept
                    </Button>
                    <Snackbar sx={{ height: "100%" }} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={4000} onClose={handleClose}>
                        <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%', backgroundColor:"#4BB543", fontFamily: "Montserrat" }}>
                        Your decision has been successfully submitted and shared!
                        </Alert>
                    </Snackbar>
                    <Button variant="contained" size="large" style={{backgroundColor:"#FE5B00", borderColor:"#FE5B00"}} endIcon={<ClearIcon />}>
                        Decline
                    </Button>
                </div>

            </Box>
        </Modal>
        </div>
    );
}
