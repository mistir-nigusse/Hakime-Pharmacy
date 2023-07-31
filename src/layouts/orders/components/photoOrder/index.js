
import Card from "@mui/material/Card";
import { GET_REFUND_REQUEST } from "api/Queries/queryRefundRequests";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Order from "layouts/orders/components/order";
import { GET_PHOTO_PRESCRIPTION } from "api/Queries/queryPhotoPrescription";
import { useQuery } from "@apollo/client";
import { Backdrop } from "@mui/material";
import CircularProgress from "@mui/material";
import { useMaterialUIController } from "context";
import { styled } from '@mui/system';
import AcceptButton from "./acceptButton";
import DeclineButton from "./declineButton";

function OrderInformation() {
  const ImageContainer = styled('div')({
    position: 'relative',
    width: 450,
    height: 250,
    overflow: 'hidden',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.5)',
    },
  });
  
  const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  });
  const handleClick = (url) => {
    window.open(url, '_blank');
  
  };

  const [controller] = useMaterialUIController();

  const { darkMode } = controller;
  const { loading, error, data } = useQuery(GET_PHOTO_PRESCRIPTION);
  
  if (loading) return <p>loading</p>;
  if (error) return <p>Error : {error.message}</p>;
    


  return (
    console.log("ZZZZ",data.orders),
 
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
             unconfirmied orders
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
       { data.orders.map((order) => {

         return(
        //   <Order

        //   order_code={order.order_code}
        //   status={order.status}
        //   total_cost={order.total_cost}
        //   //medicine_name={order.digital_prescription.prescribed_medcines[0].medicine_name}
        //   // dose={order.digital_prescription.prescribed_medcines[0].dose}
        //   // delivery_worker = {order.deliverer.full_name}
        //  // doctor_name={order.digital_prescription.doctor.full_name}
        //   // patient_name={order.digital_prescription.patient.full_name}
        //   // deliverer_phone = {order.deliverer.phone_number}
        //   // deliverer_photo = {order.deliverer.profile_picture.url}
        // />
        <MDBox
        
        bgColor={darkMode ? "transparent" : "grey-100"}
        borderRadius="lg"
        p={3}
        mt={2}
      >
        <ImageContainer>
          <Image src={order.prescription_paper_image.url} alt="prescrition paper" height={200} width={500} target="_blank" rel="noopener noreferrer" onClick={(e)=>{
             window.open(order.prescription_paper_image.url, '_blank');
        
          }}/>
        </ImageContainer>
        <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        bgColor={darkMode ? "transparent" : "grey-100"}
        borderRadius="lg"
        p={3}
        mt={2}
      >
      <AcceptButton orderId={order.id}/>
      <DeclineButton/>
       </MDBox>
      </MDBox>
         )
    })
  }
</MDBox>
      </MDBox>
    </Card>
  );
}

export default OrderInformation;
