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
import { INSERT_MEDICINE } from "api/mutations/insertMedcine";
import { useNavigate } from "react-router-dom";
import VerifyAccount from "../verify-account";
import MDProgress from "components/MDProgress";
import CircularProgress from '@mui/material/CircularProgress';

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MedcineTableData from "layouts/tables/data/medcinesTableData";
import { GET_MEDICINE } from "api/Queries/queryMedcine";

function Cover() {

  const [medcineName, setMedcineName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [brandName, setBrandName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [productionDate, setProductionDate] = React.useState("");
  const [expireDate, setExpireDate] = React.useState("");
  const [picture, setPicture] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [id, setId] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    // integrate to add medcine
  //     setId(insert_medicine({ variables: { } }));
    
  }
  

  const[insert_medicine, {data,loading,error}] = useMutation(INSERT_MEDICINE,{
    refetchQueries:[
      {query: GET_MEDICINE},
      'GET_MEDCINE'
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
          <MedcineTableData/>
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
            Add Medcine
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter all the required fields to add a medcine
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
  <MDBox component="form" role="form">
    
        <MDBox mb={2}>
          <MDInput type="text" label="Medcine Name" variant="standard"   onChange = {(e)=>setMedcineName(e.target.value)} fullWidth/>
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="email" label="Price" variant="standard" onChange = {(e)=>setPrice(e.target.value)} fullWidth />
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="text" label="Brand Name / Made In" variant="standard" onChange = {(e)=>setBrandName(e.target.value)} fullWidth />
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="text" label="Description" variant="standard" onChange = {(e)=>setDescription(e.target.value)} fullWidth/>
        </MDBox>
       
        <MDBox mb={2}>
          <MDInput type="text" label="Production date" variant="standard"   onChange = {(e)=>setProductionDate(e.target.value)} fullWidth/>
        </MDBox>
       
        <MDBox mb={2}>
          <MDInput type="text" label="Expire Date" variant="standard" fullWidth onChange = {(e)=>setExpireDate(e.target.value)} />
        </MDBox>
      

        <MDBox mb={2}>
          
          <MDInput type="text" label="image" variant="standard" fullWidth onChange = {(e)=>setPicture(e.target.value)} />
        </MDBox>
    <MDBox mt={4} mb={1}>
      <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit} >
        Add Medcine
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
