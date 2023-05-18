/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";
import React from "react";
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { Box, Grid as MDGrid } from '@material-ui/core';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import BasicLayout from "../components/BasicLayout";
// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import { useMutation, } from '@apollo/client';
import { GET_DELIVERY_PERSON } from "api/Queries/queryDeliveryPerson";
import { REGISTER_DELIVERY_PERSON } from "api/mutations/registerDeliveryPerson";
import { useNavigate } from "react-router-dom";
import VerifyAccount from "../verify-account";
import MDProgress from "components/MDProgress";
import CircularProgress from '@mui/material/CircularProgress';

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DeliveryPersonTableData from "layouts/tables/data/deliveryPersonTableData";

function Cover() {

  const [fullName, setFullName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [longtiude, setLongtiude] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [profilePicture, setProfilePicture] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [id, setId] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(specialityName)
       setId(register_delivery_person({ variables: { city:city, email:email, full_name: fullName, latitude: latitude, longitude:longtiude , phone_number: phoneNo, profile_picture:profilePicture, location:location} }));
    // navigate('/authentication/verify-account')
  }
  

  const[register_delivery_person, {data,loading,error}] = useMutation(REGISTER_DELIVERY_PERSON,{
    refetchQueries:[
      {query: GET_DELIVERY_PERSON},
      'GET_DELIVERY_PERSON'
    ]
   });
   if (loading) return  <div style={{
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    marginTop:"45vh"
  }}><CircularProgress color="success" value={25}/></div> ;
   if (error) return `Submission error! ${error.message}`;
   if (data) return <VerifyAccount id={data.delivererRegister.id}/>
  
  return (
    <DashboardLayout>
      <DashboardNavbar/><br/>
      <MDGrid container spacing={1}>
        
     <MDGrid item xs={6} md={8}>

     <Card>
          <DeliveryPersonTableData/>
         </Card>

     </MDGrid>
     <MDGrid item xs={6} md={4}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
          fullWidth
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join Hakime
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter all the required fields to register a Delivery person
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
  <MDBox component="form" role="form">
    
        <MDBox mb={2}>
          <MDInput type="text" label="Full name" variant="standard"   onChange = {(e)=>setFullName(e.target.value)} fullWidth/>
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="email" label="Email" variant="standard" onChange = {(e)=>setEmail(e.target.value)} fullWidth />
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="text" label="Phone no" variant="standard" onChange = {(e)=>setPhoneNo(e.target.value)} fullWidth />
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="text" label="City" variant="standard" onChange = {(e)=>setCity(e.target.value)} fullWidth/>
        </MDBox>
       
        <MDBox mb={2}>
          <MDInput type="text" label="Longitude" variant="standard"   onChange = {(e)=>setLongtiude(e.target.value)} fullWidth/>
        </MDBox>
       
        <MDBox mb={2}>
          <MDInput type="text" label="Location" variant="standard" fullWidth onChange = {(e)=>setLocation(e.target.value)} />
        </MDBox>
      
       
        <MDBox mb={2}>
          <MDInput type="text" label="Latitude" variant="standard" fullWidth onChange = {(e)=>setLatitude(e.target.value)}/>
        </MDBox>

        <MDBox mb={2}>
          
          <MDInput type="text" label="profile image" variant="standard" fullWidth onChange = {(e)=>setProfilePicture(e.target.value)} />
        </MDBox>
    <MDBox mt={4} mb={1}>
      <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit} >
        Register
      </MDButton>
    </MDBox>
  </MDBox>
</MDBox>

      </Card>
      </MDGrid>
      </MDGrid>
    </DashboardLayout>
  );
}

export default Cover;
