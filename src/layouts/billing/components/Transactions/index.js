
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Transaction&apos;s
        </MDTypography>
        <MDBox display="flex" alignItems="flex-start">
          <MDBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </MDBox>
          <MDTypography variant="button" color="text" fontWeight="regular">
              This month
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox pt={3} pb={2} px={2}>
        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            Newest
          </MDTypography>
        </MDBox>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
         
          <Transaction
            color="success"
            icon="expand_less"
            name="Medcine delivery, Amoxcilinr"
            description="27 March 2020, at 04:30 AM"
            value="+ 200 ETB"
          />
        </MDBox>
        <MDBox mt={1} mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            yesterday
          </MDTypography>
        </MDBox>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="expand_less"
            name="Medicine Delivery, tramadol"
            description="26 March 2020, at 13:45 PM"
            value="+ 75 ETB"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Medicne Delivery, panadol"
            description="26 March 2020, at 12:30 PM"
            value="+ 10 ETB"
          />

        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Transactions;
