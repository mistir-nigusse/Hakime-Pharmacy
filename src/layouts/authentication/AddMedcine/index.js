
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
import { useMutation, } from '@apollo/client';
import { INSERT_MEDICINE } from "api/mutations/insertMedcine";

import CircularProgress from '@mui/material/CircularProgress';
import {Backdrop} from "@material-ui/core";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MedcineTableData from "layouts/tables/data/medcinesTableData";
import { GET_MEDICINE } from "api/Queries/queryMedcine";
import { UPLOAD_IMG } from "api/mutations/uploadImg";
function Cover() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
    
  function encodeImageFileAsURL(element) {
    console.log("encode")
    var file = element.target.files[0];
    var reader = new FileReader();
    reader.onloadend = async function() {
      
     console.log('RESULT', reader.result.toString().split("base64,")[1]);
      const response = await upload_image({ variables: { img:reader.result.toString().split("base64,")[1] } });
       console.log("here is ur id",response.data.uploadImage.id);
       setImgId(parseInt(response.data.uploadImage.id))
      //  props.getId(response.data.uploadImage.id)
      console.log(imgId)
       setImg(reader.result.toString().split("base64,")[1]);
  
      }
    reader.readAsDataURL(file);
  
   
  
  
  }
  
   
 
  const [medcineName, setMedcineName] = React.useState("");
  const [price, setPrice] = React.useState("");
  // const [brandName, setBrandName] = React.useState("");
  const [description, setDescription] = React.useState("");
  // const [productionDate, setProductionDate] = React.useState("");
  // const [expireDate, setExpireDate] = React.useState("");
  const [img, setImg] = React.useState("");
  const [imgId, setImgId] = React.useState("");

  // const [phoneNo, setPhoneNo] = React.useState("");
   const [pharmacyId, setPharmacyId] = React.useState("");
  // const navigate = useNavigate();


  const handleSubmit = (e) =>{
    e.preventDefault();
    // integrate to add medcine
    console.log("iddd", localStorage.getItem('pharmacyId'), imgId)
    setPharmacyId(localStorage.getItem('pharmacyId'))

   insert_medicine({variables:{pharmacy_id: localStorage.getItem('pharmacyId'), description:description, image:imgId, name:medcineName, must_prescribe:true , price:price}})     
  }
  

  const[insert_medicine, {data,loading,error}] = useMutation(INSERT_MEDICINE,{
    refetchQueries:[
      {query: GET_MEDICINE},
      'GET_MEDICINE'
    ]
   });
   const[upload_image, {dataM, loadingM, errorM}] = useMutation(UPLOAD_IMG)
   
   if (error) return `Submission error! ${error.message}`;
  
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
          {data &&  <MDTypography display="block" variant="button" color="white" my={1}>
            You have successfully added a new Medcine
          </MDTypography>}
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
        {/* <MDBox mb={2}>
          <MDInput type="text" label="Brand Name / Made In" variant="standard" onChange = {(e)=>setBrandName(e.target.value)} fullWidth />
        </MDBox> */}
        <MDBox mb={2}>
          <MDInput type="text" label="Description" variant="standard" onChange = {(e)=>setDescription(e.target.value)} fullWidth/>
        </MDBox>
       
        {/* <MDBox mb={2}>
          <MDInput type="text" label="Production date" variant="standard"   onChange = {(e)=>setProductionDate(e.target.value)} fullWidth/>
        </MDBox>
     
        <MDBox mb={2}>
          <MDInput type="text" label="Expire Date" variant="standard" fullWidth onChange = {(e)=>setExpireDate(e.target.value)} />
        </MDBox>
      
 */}
        <MDBox mb={2}>
   

          <MDInput type="file" label="image" variant="standard" fullWidth   onChange = {(e)=>{
      encodeImageFileAsURL(e)
    }}/>
      {img? (<img src={img}/>):(<div></div>)}
        </MDBox>
    <MDBox mt={4} mb={1}>
      <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit} >
        Add Medcine
      </MDButton>
    

      {loading &&     <Backdrop
   sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
   open={open}
   onClick={handleClose}
 >
  <CircularProgress color="white"/>
  </Backdrop>}
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
