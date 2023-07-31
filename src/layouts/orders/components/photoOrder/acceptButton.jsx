import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useMutation, useQuery } from '@apollo/client';
import { Select, MenuItem } from '@mui/material';
import { TextField } from '@mui/material';
import { GET_WITHDRAWAL_REQUEST } from 'api/Queries/queryWithdrawalRequests';
import MDButton from 'components/MDButton';
import { useMaterialUIController } from "context";
import AddMedcineButton from './addMedcineButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { GET_MEDICINE_ID } from 'api/Queries/queryMedcine';
import { ADD_MEDICINE } from 'api/mutations/addMedicine';
import { GET_PHOTO_PRESCRIPTION } from 'api/Queries/queryPhotoPrescription';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 10.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



export default function AcceptButton(props) {

  const [medicineName, setMedicineName] = React.useState([]);
  const [medicineId, setMedicineId] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const selectedMedicineNames = typeof value === 'string' ? value.split(',') : value;

    // Find the corresponding IDs for the selected medicine names
    const selectedMedicineIds = data.medicine
      .filter((medicine) => selectedMedicineNames.includes(medicine.name))
      .map((medicine) => medicine.id);
  
    setMedicineName(selectedMedicineNames);
    setMedicineId(selectedMedicineIds);
    console.log("after ceh",selectedMedicineIds);
  };
const onProceed = (event) =>{
  console.log(props.orderId)
  console.log('proceed', medicineId.toString())
  event.preventDefault();
  acceptOrder({variables:{medicine_id:'{'+medicineId.join(',')+'}', order_id:props.orderId}})

    handleClose();

}

  const [controller] = useMaterialUIController();

  const { darkMode } = controller;

  const [open, setOpen] = React.useState(false);
 

 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
 const handleProceed = (event)=>{
  event.preventDefault();
  acceptOrder({variables:{medicine_id:medicineId, order_id:props.orderId}})

    handleClose();

 }



  
const{loading,error,data} = useQuery(GET_MEDICINE_ID, {variables:{pharmacyId: 13}})
const [acceptOrder,{loadingM, errorM, dataM} ]= useMutation(ADD_MEDICINE, {
  refetchQueries : [
    {query: GET_PHOTO_PRESCRIPTION}, // DocumentNode object parsed with gql
    'GET_PHOTO_PRESCRIPTION' // Query name
     
  ]
})
if (loading) return <p>loading</p>;
if (error) return <p>Error : {error.message}</p>;
  
  return (
   
    <div className=''>
            <MDButton onClick={handleClickOpen} variant="text" color={darkMode ? "white" : "dark"}>
    
         Accept Order
      </MDButton>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Add all available medcines</DialogTitle>
      
        <DialogContent>
        <div>
      <FormControl sx={{ m: 1, width: 300, height:50 }}>
        <InputLabel id="demo-multiple-checkbox-label" sx={{mt:2, mb:2}}>Medcines</InputLabel><br/>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={medicineName}
          onChange={handleChange}
          input={<OutlinedInput label="Medcines" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {data.medicine.map((medicine) => (
            <MenuItem key={medicine.id} value={medicine.name}>
              <Checkbox checked={medicineName.indexOf(medicine.name) > -1} />
              <ListItemText primary={medicine.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <MDButton variant="text" color="error" onClick={handleClose}>
              Cancel
            </MDButton>
            <MDButton onClick={onProceed} variant="text" color={darkMode ? "white" : "dark"}>
  
         Proceed
         {loadingM && <p>loading</p>}
         {errorM && <p>error</p>}
         {dataM && console.log("success")}
      </MDButton>

        </DialogActions>
      </Dialog>
    
    </div>
  );
}