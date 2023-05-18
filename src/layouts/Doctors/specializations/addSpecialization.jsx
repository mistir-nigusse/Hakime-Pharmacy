import * as React from 'react';
import Button from '@mui/material/Button';
import MDButton from 'components/MDButton';
import {Icon} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useMutation, } from '@apollo/client';
import { INSERT_SPECIALITY } from 'api/mutations/speciallityMutation';
import { GET_SPECIALITIES } from 'api/Queries/specialitiesQuery';

export default function AddSpecialization() {
  const [open, setOpen] = React.useState(false);

  const [specialityName, setSpecialityName] = React.useState("");



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(specialityName)
    insert_speciality({ variables: { specialityName:specialityName} });

 }
 const[insert_speciality, {data,loading,error}] = useMutation(INSERT_SPECIALITY,{
  refetchQueries:[
    {query: GET_SPECIALITIES},
    'GET_SPECIALITIES'
  ]
 });
 if (loading) return 'Submitting...';
 if (error) return `Submission error! ${error.message}`;
 if (data) return 'sucesss'

  return (
    //  setImgId(data.insert_images.returning[0].id),
    //  console.log(imgId),
    <div className='m-4 mt-12'>
      <Button  onClick={handleClickOpen}>
      <MDButton variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new Specialization
        </MDButton>
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogContent>
       <form >
              <TextField
             fullWidth
            autoFocus
            margin="dense"
            id="speciality"
            label="Speciality name"
            type="text"
            onChange = {(e)=>setSpecialityName(e.target.value)}

            variant="standard"
          /><br/><br/>
       </form>
              </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}