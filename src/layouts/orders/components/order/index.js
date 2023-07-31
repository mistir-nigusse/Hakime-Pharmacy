
import PropTypes from "prop-types";


import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useMaterialUIController } from "context";

import PayButton from "./acceptButton";
import DeclineButton from "./declineButton";


function Order({ order_code, status, total_cost, deliverer_phone, deliverer_photo, prescribed_medicines, dose, delivery_worker, doctor_name,  patient_name }) {
  const [controller] = useMaterialUIController();

  const { darkMode } = controller;
  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mt={2}
    >
      <MDBox width="100%" display="flex" flexDirection="column">
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={1}
        >
          
          <MDTypography variant="caption" color="text">
            Order Code:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {order_code}
            </MDTypography>
          </MDTypography>
          <MDTypography variant="caption" color="text">
            Status:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {status}
            </MDTypography>
          </MDTypography>
          
          {/* <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
                <PayButton id={id} name={name} account={account} amount={amount}/>
            </MDBox>
            <DeclineButton/>
         
          </MDBox> */}
        </MDBox>
        
        <MDBox mb={2} lineHeight={0}>
          <MDTypography variant="caption" color="text">
            Total Cost:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {total_cost}
            </MDTypography>
          </MDTypography>
        </MDBox>
        <MDBox mb={2} lineHeight={0}>
          <MDTypography variant="caption" color="text">
            Delivery Worker:<br/> &nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" color="text">
            name:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {delivery_worker} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </MDTypography>
          </MDTypography>
          <MDTypography variant="caption" color="text">
            phone_number:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {deliverer_phone}
            </MDTypography>
          </MDTypography>
          </MDTypography>
        </MDBox>
        <MDBox mb={2} lineHeight={0}>
          <MDTypography variant="caption" color="text">
            Medicines:
          {prescribed_medicines.map(medcine =>{
            return(
              <div>
              <br/> &nbsp;&nbsp;&nbsp;
              <MDTypography variant="caption" color="text">
              name:&nbsp;&nbsp;&nbsp;
              <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                {medcine.medicine_name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </MDTypography>
            </MDTypography>
            <MDTypography variant="caption" color="text">
              dose:&nbsp;&nbsp;&nbsp;
              <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                {medcine.dose}
              </MDTypography>
            </MDTypography>
              
           </div>
            )
           
           })
           }
          </MDTypography>
        </MDBox>
        <MDBox mb={2} lineHeight={0}>
          <MDTypography variant="caption" color="text">
            Doctor:<br/> &nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" color="text">
            name:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {doctor_name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </MDTypography>
          </MDTypography>
          <MDTypography variant="caption" color="text">
            phone_number:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {deliverer_phone}
            </MDTypography>
          </MDTypography>
          </MDTypography>
        </MDBox>
        <MDBox mb={2} lineHeight={0}>
          <MDTypography variant="caption" color="text">
            Patient:<br/> &nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" color="text">
            name:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {patient_name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </MDTypography>
          </MDTypography>
          <MDTypography variant="caption" color="text">
            phone_number:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {deliverer_phone}
            </MDTypography>
          </MDTypography>
          </MDTypography>
        </MDBox>
 
      
  
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of Order

// Typechecking props for the Order
// Order.propTypes = {
//   order_code: PropTypes.string.isRequired,
//   status: PropTypes.string.isRequired,
//   total_cost: PropTypes.string,
//   medicine_name: PropTypes.string.isRequired,
//   dose: PropTypes.string.isRequired,
//   delivery_worker: PropTypes.string.isRequired,
//   doctor_name: PropTypes.string,
//   patient_name: PropTypes.string.isRequired,
//   deliverer_phone: PropTypes.string,
// //  deliverer_photo: PropTypes.string.isRequired
// };

export default Order;

