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
import { GET_ADS } from 'api/Queries/queryAds';
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";


export default function DeleteBanner(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 const handleBannerDelete = () =>{
  console.log(props.id)
  deleteBanner({variables:{id:props.id}})
  handleClose()

 }
 const [deleteBanner,{data,loading,error}] = useMutation(DELETE_BANNER,{
  refetchQueries:[
    {query: GET_ADS},
    'GET_BANNERS'
  ]
 });

  return (
    <div>
     <Tooltip title="Delete ad" placement="top">
      <Button onClick={handleClickOpen}>
      <Icon sx={{ cursor: "pointer" , color:"error"}}  fontSize="small">
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
          <Button variant='contained' color='error' onClick={handleBannerDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}