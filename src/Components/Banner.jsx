import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Banner(props) {
  return (
    <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#252B42", margin:"0"}}>
              {props.title}
            </Typography>
            <Typography variant="h3" align="center" gutterBottom component="div" style={{fontFamily: "Montserrat", fontWeight: "bolder", color: "#22BCEA"}}>
              {props.accountType}
            </Typography>
            <Typography variant="subtitle1" align="center" gutterBottom component="div" style={{fontFamily: "Montserrat", color: "#737373"}}>
              {props.description}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" style={{backgroundColor:"#FE5B00", marginBottom: "20px"}} href={"/"+props.buttonLink}>{props.button}</Button>
            </Stack>
          </Container>
        </Box>
  );
}