

import { useState } from "react";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CircularProgress from '@mui/material/CircularProgress';

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Backdrop } from "@mui/material";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import SignIn from "layouts/authentication/sign-in"

// Images
import bgImage from "assets/images/pharmacist.jpg";
import { LOGIN } from "api/mutations/login";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router";

function Basic() {
  const [login,{loading,error,data}] = useMutation(LOGIN);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
 
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword ] = useState("");
  const [token , setToken] = useState ("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loginHandler = async (e) => {
    handleOpen()
    e.preventDefault();
    
   // console.log("login", email, password);
    try {
      const token = await login({ variables: { email: email , password: password}});
     // console.log(token)
      localStorage.setItem('token',token.data.pharmacylogin.token)
      localStorage.setItem('pharmacyId', token.data.pharmacylogin.id )
      navigate("/");
     // console.log("tokennn",localStorage.getItem('token'))
      //console.log("iddd", localStorage.getItem('pharmacyId'))
   
    }
    catch (error){
      console.log("error", {error})
     setErrorMessage("please make sure ur email and password is correct")
    }


    }
//    if (loading) return <p>loading</p>
// ;
//    if (error) return "error";

  return (

    <BasicLayout image={bgImage}>
      
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mb={2} mt={2} ml={1} mr={1}>
            Welcome to Hakime
          </MDTypography>
          <MDTypography variant="h6" fontWeight="medium" color="white" p={1}>
            Sign In
          </MDTypography>
         
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
          {error &&         <MDBox p={1}>  <MDTypography variant="caption"   color="error">
{errorMessage}</MDTypography>
</MDBox>}
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth  onChange={ e=> setEmail(e.target.value)}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth onChange = { e=> setPassword(e.target.value)} />
            </MDBox>
           
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={loginHandler}>
                sign in
              </MDButton>
            </MDBox>
          
          </MDBox>
        </MDBox>
      </Card>
  {loading &&     <Backdrop
   sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
   open={open}
   onClick={handleClose}
 >
  <CircularProgress color="white"/>
  </Backdrop>}
    </BasicLayout>
  
  );
}

export default Basic;
