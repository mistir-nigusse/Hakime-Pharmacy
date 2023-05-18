import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Tooltip, Icon } from '@mui/material';
import { useMutation } from '@apollo/client';

import { DELETE_SPECIALITY } from 'api/mutations/speciallityMutation';
import { GET_SPECIALITIES } from 'api/Queries/specialitiesQuery';
export default function DeleteSpeciality(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 const handleSpecialityDelete = () =>{
  console.log(props.id)
  deleteSpeciality({variables:{id:props.id}})
  handleClose()

 }
 const [deleteSpeciality,{data,loading,error}] = useMutation(DELETE_SPECIALITY,{
  refetchQueries:[
    {query: GET_SPECIALITIES},
    'GET_SPECIALITIES'
  ]
 });

  return (
    <div>
      <Button  onClick={handleClickOpen}>
         <Tooltip title="Delete speciality" placement="top">
                          <Icon sx={{ cursor: "pointer" }} fontSize="small">
                            delete
                          </Icon>
                        </Tooltip>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
           Are you sure you want to delete?
          </DialogContentText>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' color='error' onClick={handleSpecialityDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}