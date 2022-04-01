import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
   
      <TextField id="filled-basic" label="Search" variant="filled" />
     
    </Box>
  );
}