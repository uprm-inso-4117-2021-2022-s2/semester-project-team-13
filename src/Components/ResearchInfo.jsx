import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

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

export default function ResearchInfo(props) {

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
                {props.name}
                </Typography>
                <Divider/>
                <Typography id="modal-modal-description" variant="subtitle1" style={{fontFamily: "Montserrat", color: "#212121"}}>
                    <br/>
                    <b>Research Study Area:</b> {props.studyArea}
                    <br/>
                    <b>Preferred Major:</b> {props.pMajor}
                    <br/>
                    <b>Preferred Year of Study:</b> {props.yearStudy}
                    <br/>
                    <b>Required Classes:</b> {props.classes}
                    <br/>
                </Typography>
                <br/>
                <Typography id="modal-modal-description" variant="h6" style={{fontFamily: "Montserrat", color: "#212121"}}>
                    Project Description
                </Typography>
                <Divider/>
                <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }} style={{fontFamily: "Montserrat", textAlign: "justify"}}>
                    {props.description}
                </Typography>
                <br/>
      
                <Typography id="modal-modal-description" variant="h6" style={{fontFamily: "Montserrat", color: "#212121"}}>
                    Job Description
                </Typography>
                <Divider/>
                <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }} style={{fontFamily: "Montserrat", textAlign: "justify"}}>
                    {props.jobDescription}
                </Typography>
                <br/>
                <Typography id="modal-modal-description" variant="h6" style={{fontFamily: "Montserrat", color: "#212121"}}>
                    Required skills
                </Typography>
                <Divider/>
                <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }} style={{fontFamily: "Montserrat"}}>
                    <ul>
                        {props.requiredSkills.map(skill =>
                            <li>
                                {skill}
                            </li>
                        )}
                    </ul>
                </Typography>
                <br/>
                
                <div style={{textAlign: "center"}}>
                    <Button variant="contained" size="large" style={{backgroundColor:"#22BCEA"}}>
                        Apply Now
                    </Button>
                </div>

            </Box>
        </Modal>
        </div>
    );
}
