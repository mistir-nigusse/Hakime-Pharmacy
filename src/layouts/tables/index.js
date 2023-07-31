

import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";


import AppointmentTable from "./data/appointmentTableData";
import DeliveryPersonTableData from "./data/medcinesTableData";
import PharmaciesTableData from "./data/pharmaciesTableData";
import OrdersTable from "./data/allordersTableData";

function Tables() {
 

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
         
         <OrdersTable/>
         <PharmaciesTableData/>
          <AppointmentTable/>
         
          <DeliveryPersonTableData/>

        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
