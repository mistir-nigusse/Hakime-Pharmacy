import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useMutation } from '@apollo/client';
import { DELETE_BANNER } from 'api/mutations/advertisementMutations';
import { DELETE_MEDICINE } from 'api/mutations/deleteMedcine';
import { GET_ADS } from 'api/Queries/queryAds';
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import { GET_MEDICINE } from 'api/Queries/queryMedcine';


export default function DeleteMedicine(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 const handleMedicineDelete = () =>{
  console.log(props.id)
  deleteMedicine({variables:{medicineId: props.medicineId, pharmacyId: props.pharmacyId}})
  handleClose()

 }
 const [deleteMedicine,{data,loading,error}] = useMutation(DELETE_MEDICINE,{
  refetchQueries:[
    {query: GET_MEDICINE},
    'GET_MEDICINE'
  ]
 });

  return (
    <div>
     <Tooltip title="Delete Medicine" placement="top">
      <Button onClick={handleClickOpen}>
      <Icon sx={{ cursor: "pointer" , color:"error"}}  fontSize="medium">
                    delete
                  </Icon>
      </Button>
               
                </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
           Are you sure you want to delete?
          </DialogContentText>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' color='error' onClick={handleMedicineDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}