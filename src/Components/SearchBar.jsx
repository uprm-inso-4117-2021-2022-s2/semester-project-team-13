import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBar(props) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.options}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label={props.label}/>}
      onChange={props.onChange}
    />
  );
}


