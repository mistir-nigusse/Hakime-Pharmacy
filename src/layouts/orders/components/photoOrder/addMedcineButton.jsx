import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Updatewithdrawal } from 'api/mutations/makePayment';
import { useMutation } from "@apollo/client";
import { Select, MenuItem } from '@mui/material';
import { TextField } from '@mui/material';
import { GET_WITHDRAWAL_REQUEST } from 'api/Queries/queryWithdrawalRequests';
import MDButton from 'components/MDButton';
import { useMaterialUIController } from "context";

export default function AddMedcineButton(props) {
  const [controller] = useMaterialUIController();

  const { darkMode } = controller;

  const [open, setOpen] = React.useState(false);
 
  const [amount, setAmount] = React.useState(props.amount);
  const [beneficiaryName, setBeneficiaryName] = React.useState(props.name);
  const [accountNumber, setAccountNumber] = React.useState(props.account);
  const [id, setId] = React.useState(props.id);

  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (event) => {
    const selectedValues = event.target.value;
    setSelectedOptions(selectedValues);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
 const handlePayment = (event)=>{
  event.preventDefault();
    updateWithdrawal({ variables: { id: id } });
  
  //  pay({ variables: { account_number: accountNumber , amount:amount , beneficiary_name: beneficiaryName} });
    handleClose();

 }

// const[pay,{loading,error,data}] = useMutation(Payment
//   refetchQueries: [
//     {query: GET_NEW_DOCTORS}, // DocumentNode object parsed with gql
//   'Unapproved_doctors', // Query name
   
//   ],
// );
const [updateWithdrawal,{loading,error,data}] = useMutation(Updatewithdrawal,{
  refetchQueries :[
    {query: GET_WITHDRAWAL_REQUEST}, // DocumentNode object parsed with gql
  'withdrawalRequest' // Query name
   
  ]
}

  )

if (loading) return <p>loading</p>;
if (error) return <p>Error : {error.message}</p>;
if(data) return <p className='text-green-900 font-bold'>confirmed</p>
  
  return (
   
    <div className=''>
            <MDButton onClick={handleClickOpen} variant="text" color={darkMode ? "white" : "dark"}>
    
         Proceed
      </MDButton>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Add all available medcines</DialogTitle>
        <DialogContent>
        <div>
      <Select
        multiple
        value={selectedOptions}
        onChange={handleChange}
        renderValue={(selected) => selected.join(', ')}
      >
        <MenuItem value="us">United States</MenuItem>
        <MenuItem value="ca">Canada</MenuItem>
        <MenuItem value="gb">United Kingdom</MenuItem>
      </Select>
    </div>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <MDButton variant="text" color="error" onClick={handleClose}>
              Cancel
            </MDButton>
            <MDButton onClick={handlePayment} variant="text" color={darkMode ? "white" : "dark"}>
  
         Proceed
      </MDButton>

        </DialogActions>
      </Dialog>
    </div>
  );
}