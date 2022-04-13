import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

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
  maxHeight: "80%"
};

export default function ResearchInfo(props) {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

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
                Research Application
                </Typography>
                <Divider/>
                <br/>
                <Typography id="modal-modal-description" variant="h6" style={{fontFamily: "Montserrat", color: "#212121"}}>
                    Research you want to apply
                </Typography>
                <Divider/>
                <br/>
                <Typography id="modal-modal-description" variant="body1" style={{fontFamily: "Montserrat", color: "#212121"}}>
                    {props.name}
                </Typography>
                <br/>
                 
                <Typography id="modal-modal-description" variant="h6" style={{fontFamily: "Montserrat", color: "#212121"}}>
                    Information
                </Typography>
                <Divider/>
                <br/>
                <Typography id="modal-modal-description" variant="body1" style={{fontFamily: "Montserrat", color: "#212121"}}>
                    The following information will be shared with the professor in charge of the research to which you want to apply.
                </Typography>

                <ul>
                    <li key="1">
                        <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }} style={{fontFamily: "Montserrat", margin: 0}}>
                            Your full name
                        </Typography>
                    </li>
                    <li key="2">
                        <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }} style={{fontFamily: "Montserrat", margin: 0}}>
                            Your email
                        </Typography>
                    </li>
                    <li key="3">
                        <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }} style={{fontFamily: "Montserrat", margin: 0}}>
                            Your student information, such as: <i>year of study, major, approved courses</i> 
                        </Typography>
                    </li>
                    <li key="4">
                        <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }} style={{fontFamily: "Montserrat", margin: 0}}>
                            Your resume
                        </Typography>
                    </li>
                    <li key="4">
                        <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }} style={{fontFamily: "Montserrat", margin: 0}}>
                            Your skills
                        </Typography>
                    </li>
                </ul>

                <br/>

                <div style={{textAlign: "center"}}>
                    <Button variant="contained" size="large" onClick={handleClick} style={{backgroundColor:"#22BCEA", marginRight:20}}>
                        Submit Application
                    </Button>
                    <Snackbar sx={{ height: "100%" }} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={4000} onClose={handleClose}>
                        <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%', backgroundColor:"#4BB543", fontSize:"25px", fontFamily: "Montserrat" }}>
                            Your application has been submitted successfully!
                        </Alert>
                    </Snackbar>
                    <Button variant="contained" size="large" onClick={props.handleClose} style={{backgroundColor:"#FE5B00"}}>
                        Cancel Application
                    </Button>
                </div>
            </Box>
        </Modal>
        </div>
    );
}
