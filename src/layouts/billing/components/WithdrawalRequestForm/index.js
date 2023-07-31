

// react-router-dom components
import { Link } from "react-router-dom";
import React from "react";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { Grid as MDGrid } from '@material-ui/core';
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import BasicLayout from "../../../authentication/components/BasicLayout";
// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { makeStyles } from '@material-ui/core/styles';
import { GET_PHARMACIES } from "api/Queries/queryPharmacies";
import { REGISTER_PHARMACY } from "api/mutations/registerPharmacy";
import { useMutation, } from '@apollo/client';

import VerifyAccount from "../../../authentication/verify-account";
import MDProgress from "components/MDProgress";


function Cover() {

  const [bankName, setBankName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [accountNo, setAccountNumber] = React.useState("");


 const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
  },
  content: {
    width: '80%', 
    maxWidth: '600px', 
    textAlign: 'center',
    height: '300px', 
    width: '50%', 
  },
});



  
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(specialityName)
  // register_pharmacy({ variables: { city:city , close_time:closeTime, email: email, latitude:latitude, license:license, location:location, logo:logo, name:pharmacyName,longitude:longtiude, o_full_name: ownerName, o_phone_number: phoneNo, o_profile_picture: profilePicture, open_time : openTime, phone_number: officePhone } });
  
  }
  
  const classes = useStyles();
  const[register_pharmacy, {data,loading,error}] = useMutation(REGISTER_PHARMACY,{
    refetchQueries:[
      {query: GET_PHARMACIES},
      'GET_PHARMACIES'
    ]
   });
   if (loading) return   <div className={classes.container}>
   <div className={classes.content}>
     <MDProgress value={10}/>
   </div>
 </div>;
   if (error) return  <p>{error.message}</p>

  
  return (

<Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={4}
          p={2}
          mb={1}
          textAlign="center"
          fullWidth
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Request Withdrawal
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter all the required fields to withdrawal money from your wallet
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          
  <MDBox component="form" role="form" >
   
        <MDBox mb={2}>
          <MDInput type="text" label="Bank name" variant="standard"  fullWidth onChange = {(e)=>setBankName(e.target.value)}/>
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="email" label="Account no" variant="standard" fullWidth onChange = {(e)=>setAccountNumber(e.target.value)}  />
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="text" label="Amount" variant="standard" fullWidth onChange = {(e)=>setAmount(e.target.value)}/>
        </MDBox>
       
      

       
    
  
    <MDBox mt={4} mb={1}>
      <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit} >
          Send
      </MDButton>
    </MDBox>
  </MDBox>
</MDBox>

      </Card>
 
  );
}

export default Cover;
