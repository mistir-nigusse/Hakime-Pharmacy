
import Card from "@mui/material/Card";
import { GET_REFUND_REQUEST } from "api/Queries/queryRefundRequests";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Order from "layouts/orders/components/order";
import { GET_DIGITAL_ORDERS} from "api/Queries/queryDigitalPrescriptions";
import { useQuery } from "@apollo/client";
import { Backdrop } from "@mui/material";
import CircularProgress from "@mui/material";

function OrderInformation() {

  // const { loading, error, data } = useQuery(GET_DIGITAL_ORDERS,{
  //   variables:{ pharmacyId: localStorage.getItem('pharmacyToken')},
  //   pollInterval:5000,
  // });
  const { loading, error, data } = useQuery(GET_DIGITAL_ORDERS,{
    
    pollInterval:5000,
  });
  
  if (loading) return <p>loading</p>;
  if (error) return <p>Error : {error.message}</p>;
    


  return (
    console.log(data.orders),
 
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
             Upcoming orders
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
       { data.orders.map((order) => {

         return(
          <Order

          order_code={order.order_code}
          status={order.status}
          total_cost={order.total_cost}
          prescribed_medicines={order.digital_prescription.prescribed_medicines}
         // dose={order.digital_prescription.prescribed_medicines[0].dose}
          // delivery_worker = {order.deliverer.full_name}
         doctor_name={order.digital_prescription.doctor.full_name}
           patient_name={order.digital_prescription.patient.full_name}
          // deliverer_phone = {order.deliverer.phone_number}
          // deliverer_photo = {order.deliverer.profile_picture.url}
        />
         )
    })
  }
</MDBox>
      </MDBox>
    </Card>
  );
}

export default OrderInformation;
