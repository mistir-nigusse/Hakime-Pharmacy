import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Updatewithdrawal } from 'api/mutations/makePayment';
import { useMutation } from "@apollo/client";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AddIcon from '@mui/icons-material/Add';
import { Label } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { GET_WITHDRAWAL_REQUEST } from 'api/Queries/queryWithdrawalRequests';
import MDButton from 'components/MDButton';
import { useMaterialUIController } from "context";
import Icon from "@mui/material/Icon";

export default function DeclineButton(props) {
  const [controller] = useMaterialUIController();

  const { darkMode } = controller;

  const [open, setOpen] = React.useState(false);
 
  const [amount, setAmount] = React.useState(props.amount);
  const [beneficiaryName, setBeneficiaryName] = React.useState(props.name);
  const [accountNumber, setAccountNumber] = React.useState(props.account);
  const [id, setId] = React.useState(props.id);

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
if (error) return <p>Error : {error.message}</p>;

// if(data) return <p className='text-green-900 font-bold'>confirmed</p>
  
  return (
   
    <div className=''>
         <MDButton variant="text" color="error">

<Icon>cancel</Icon>&nbsp;Decline
</MDButton>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Fill out the form</DialogTitle>
        <DialogContent>
         <form onSubmit={handlePayment}>
         <TextField
            fullWidth
            margin="dense"
            id="beneficiary name"
            label="Beneficiary name"
            type="text"
            variant="standard"
            required
            value={beneficiaryName}
            onChange = {(e)=>setBeneficiaryName(e.target.value)}
            error = {!beneficiaryName}
            helperText= {
              !beneficiaryName? 'Required' : " "
            }
          /><br/><br/>
        <TextField
            fullWidth
            margin="dense"
            id="account"
            label="Account Number"
            type="text"
            variant="standard"
            required
            value={accountNumber}
            onChange = {(e)=>setAccountNumber(e.target.value)}
            error = {!accountNumber}
            helperText= {
              !accountNumber? 'Required' : " "
            }
          /><br/><br/>
            <TextField
            fullWidth
            margin="dense"
            id="name"
            label="amount"
            type="text"
            variant="standard"
            required
            
            value={amount}
            onChange = {(e)=>setAmount(e.target.value)}
            error = {!amount}
            helperText= {
              !amount? 'Required' : " "
            }
          /><br/><br/>
           
       
          
       
        </form> 
      

        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <MDButton onClick={handlePayment} variant="text" color={darkMode ? "white" : "dark"}>
  
         Cancel
      </MDButton>
          <MDButton variant="text" color="error" onClick={handleClose}>
              Decline
            </MDButton>
            

        </DialogActions>
      </Dialog>
    </div>
  );
}