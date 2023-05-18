

// react-router-dom components
import { Link } from "react-router-dom";
import React from "react";
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { Grid as MDGrid } from '@material-ui/core';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import BasicLayout from "../components/BasicLayout";
// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { makeStyles } from '@material-ui/core/styles';
import { GET_PHARMACIES } from "api/Queries/queryPharmacies";
import { REGISTER_PHARMACY } from "api/mutations/registerPharmacy";
import { useMutation, } from '@apollo/client';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import PharmaciesTableData from "layouts/tables/data/pharmaciesTableData";
import VerifyAccount from "../verify-account";
import Grid from "@mui/material/Grid";
import MDProgress from "components/MDProgress";


function Cover() {

  const [pharmacyName, setPharmacyName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [longtiude, setLongtiude] = React.useState("");
  const [closeTime, setCloseTime] = React.useState("");
  const [openTime, setOpenTime] = React.useState("");
  const [license, setLicense] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [logo, setLogo] = React.useState("");
  const [officePhone, setOfficePhone] = React.useState("");
  const [profilePicture, setProfilePicture] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [ownerName, setOwnerName] = React.useState("");

  const [errorSB, setErrorSB] = React.useState(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

 const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // optional, adjust as needed
  },
  content: {
    width: '80%', // optional, adjust as needed
    maxWidth: '600px', // optional, adjust as needed
    textAlign: 'center',
    height: '300px', // add height property
    width: '50%', // add width property
  },
});

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(specialityName)
   register_pharmacy({ variables: { city:city , close_time:closeTime, email: email, latitude:latitude, license:license, location:location, logo:logo, name:pharmacyName,longitude:longtiude, o_full_name: ownerName, o_phone_number: phoneNo, o_profile_picture: profilePicture, open_time : openTime, phone_number: officePhone } });
  
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
   if (error) return  <MDSnackbar
   color="error"
   icon="warning"
   title="Failed"
   content={`${error.message}`}
   dateTime="now"
   open={()=>{openErrorSB()}}
  onClose={()=>{window.location.reload()}}
   close={()=>{window.location.reload()}}
   bgWhite
 />;
   if (data) return <VerifyAccount id={data.pharmacyRegister.id}/>
  
  return (
 <DashboardLayout>
  <DashboardNavbar/> <br/>
  <MDGrid container spacing={2} > {/* Grid container with spacing */}
  <MDGrid items xs={12} md={8}>
    <Card>
    <PharmaciesTableData/>

    </Card>
  </MDGrid>
  {/* <MDGrid item xs={12} md={1}></MDGrid> */}
      <MDGrid item xs={12} md={4}  > {/* thrid column */}
<Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-4}
          p={2}
          mb={1}
          textAlign="center"
          fullWidth
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join Hakime
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter all the required fields to register a pharmacy
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          
  <MDBox component="form" role="form">
    <MDGrid container spacing={12}> {/* Grid container with spacing */}
      <MDGrid item xs={6} md={6}> {/* First column */}
        <MDBox mb={2}>
          <MDInput type="text" label="Pharmacy name" variant="standard"   onChange = {(e)=>setPharmacyName(e.target.value)}/>
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="email" label="Email" variant="standard" onChange = {(e)=>setEmail(e.target.value)}  />
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="text" label="City" variant="standard" onChange = {(e)=>setCity(e.target.value)}/>
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="time" label="Open Time" variant="standard" onChange = {(e)=>setOpenTime(e.target.value)}/>
        </MDBox>
      

       
      </MDGrid>
      <MDGrid item xs={12} md={6}> {/* Second column */}
        <MDBox mb={2}>
          <MDInput type="text" label="Owner full name" variant="standard" fullWidth onChange = {(e)=> setOwnerName(e.target.value)}/>
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="text" label="Owner phone" variant="standard" fullWidth     onChange = {(e)=>setPhoneNo(e.target.value)}/>
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="text" label="Office phone" variant="standard" fullWidth     onChange = {(e)=>setOfficePhone(e.target.value)}/>
        </MDBox>
        
        <MDBox mb={2}>
          <MDInput type="time" label="Close Time" variant="standard" fullWidth onChange = {(e)=>setCloseTime(e.target.value)}/>
        </MDBox>
       
        
       
      </MDGrid>
    </MDGrid>
      <MDBox mb={2}>
          <MDInput type="text" label="Location" variant="standard" fullWidth onChange = {(e)=>setLocation(e.target.value)} />
        </MDBox>
    <MDBox mb={2}>
          <MDInput type="text" label="Latitude" variant="standard"  onChange = {(e)=>setLatitude(e.target.value)}/>
        </MDBox>
    <MDBox mb={2}>
    <MDBox mb={2}>
          <MDInput type="text" label="Longtiude" variant="standard" onChange = {(e)=>setLongtiude(e.target.value)}/>
        </MDBox>
          <MDInput type="text" label="logo" variant="standard" fullWidth  onChange = {(e)=>setLogo(e.target.value)}/>
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="text" label="license" variant="standard" fullWidth  onChange = {(e)=>setLicense(e.target.value)} />
        </MDBox>
        <MDBox mb={2}>
          
          <MDInput type="text" label="owner profile image" variant="standard" fullWidth onChange = {(e)=>setProfilePicture(e.target.value)} />
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
