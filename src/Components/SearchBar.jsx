import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBar(props) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.options}
      renderInput={(params) => <TextField required {...params} label={props.label}/>}
      onChange={props.onChange}
    />
  );
}


