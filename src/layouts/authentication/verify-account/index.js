import React from "react";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";
import { VERIFY } from "api/mutations/verify";
import { useMutation } from "@apollo/client";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

export default function VerifyAccount(props) {

    const [code, setCode] = React.useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
       verify({ variables: { code:code , id:props.id } });
      
      }
      
    
      const[verify, {data,loading,error}] = useMutation(VERIFY);
       if (loading) return 'Submitting...';
       if (error) return `Submission error! ${error.message}`;
       if (data) return 'sucesss'
      

  return (
    <DashboardLayout>
      <DashboardNavbar/>
      
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Verify
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1} mx={2}>
               verify your email account, by entering the otp sent.
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={4}>
              <MDInput type="text" label="verification code" variant="standard" fullWidth onChange = {(e)=>setCode(e.target.value)}/>
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
                Verify
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      </DashboardLayout>

  );
}

