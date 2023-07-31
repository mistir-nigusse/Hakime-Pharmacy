
import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import OrderInformation from "layouts/orders/components/orderInformation";
import PhotoOrder from "layouts/orders/components/photoOrder";

function Orders() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
       
        <MDBox mb={3}>
        <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              
              <OrderInformation />
              </Grid>
              <Grid item xs={12} lg={6}>
  
         <PhotoOrder/>
              </Grid>
              </Grid>
      
       
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Orders;
