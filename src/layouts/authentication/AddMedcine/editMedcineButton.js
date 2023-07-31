import * as React from 'react';
import Button from '@mui/material/Button';
import { useQuery, useMutation } from '@apollo/client';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Icon, Tooltip } from '@mui/material';
import MDButton from 'components/MDButton';
// import UploadImageButton from './uploadImage';
export default function EditMedicineButton() {
  const [open, setOpen] = React.useState(false);
  const [start_date, setStart_date] = React.useState("");
  const [end_date, setEnd_date] = React.useState("");
  const [bussinessName, setBussinessName] = React.useState("");
  const [imgId, setImgId] = React.useState("");



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 


  return (
    //  setImgId(data.insert_images.returning[0].id),
    //  console.log(imgId),
    <div className='m-4 mt-12'>
      <Tooltip title="edit Medicine" placement="top">
      <Button onClick={handleClickOpen}>
      <Icon sx={{ cursor: "pointer" , color:"error"}}  fontSize="medium">
                    edit
                  </Icon>
      </Button>
               
                </Tooltip>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Upload a new Banner</DialogTitle>
        <DialogContent>
       
      
        {/* <UploadImageButton/> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button variant='contained' onClick={handleSubmit}>Submit</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}