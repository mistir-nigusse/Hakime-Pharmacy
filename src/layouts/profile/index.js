
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Header from "layouts/profile/components/Header";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PHARMACY_INFO } from "api/Queries/queryPharmacyInfo";

function Overview() {

  const { loading, error, data } = useQuery(GET_PHARMACY_INFO)

  if (loading) return <p>loading</p>;
  if (error) return <p>Error : {error.message}</p>;
    


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
      <Card sx={{ height: "100%", boxShadow: "none" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Profile Information
        </MDTypography>
        <MDTypography  variant="body2" color="secondary">
          <Tooltip title="edit" placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        
        <MDBox opacity={0.3}>
          <Divider />
        </MDBox>
        <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              
              pharmacy phone
              </Grid>
              <Grid item xs={12} lg={6}>
  
          owner info
              </Grid>
              </Grid>
      </MDBox>
    </Card>
  
            
              <Divider orientation="vertical" sx={{ mx: 0 }} />
          
        
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
