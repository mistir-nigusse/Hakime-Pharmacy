
import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import WithdrawalRequest from "layouts/authentication/WithdrawalRequestForm"
function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Grid container spacing={3}>
                
                <Grid item xs={12} md={6} xl={6}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="Wallet"
                    description="currently available balance"
                    value="$2000"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="Total"
                    description="total revenue generated"
                    value="$43,455.00"
                  />
                </Grid>
               
                <Grid item xs={12} md={6} xl={6}>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item xs={12} lg={4}>
              <Invoices />
              
            </Grid> */}
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
            <WithdrawalRequest/>

              {/* <BillingInformation /> */}
            </Grid>
            <Grid item xs={12} md={6}>
              <Transactions />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
