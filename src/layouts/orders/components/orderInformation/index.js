
import Card from "@mui/material/Card";
import { GET_REFUND_REQUEST } from "api/Queries/queryRefundRequests";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Bill from "layouts/billing/components/Bill";
import { GET_WITHDRAWAL_REQUEST } from "api/Queries/queryWithdrawalRequests";
import { useQuery } from "@apollo/client";
function OrderInformation() {

  const { loading, error, data } = useQuery(GET_WITHDRAWAL_REQUEST);
  const { loadingR, errorR, dataR } = useQuery(GET_REFUND_REQUEST);
  
  if (loading) return <p>loading</p>;
  if (error) return <p>Error : {error.message}</p>;
    
  if (loadingR) return <p>loading</p>;
  if (errorR) return <p>Error : {error.message}</p>;


  return (
    console.log(data.withdrawals),
 
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Withdrawal Request's
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
       { data.withdrawals.map((withdrawal) => {

         return(
          <Bill
          //name={"df"}
          name={withdrawal.doctor.full_name}
          role="Doctor"
          wallet={withdrawal.doctor.wallet}
          account={withdrawal.doctor.bank_informations[0].account_number}
          bank_name={withdrawal.doctor.bank_informations[0].bank_name}

        />
         )
    })
  }
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Refund Request's
        </MDTypography>
      </MDBox>
    { data.withdrawals.map((withdrawal) => {

return(

  <Bill
  name={withdrawal.doctor.full_name}
  role="Patients"
  wallet={withdrawal.doctor.wallet}
  account={withdrawal.doctor.bank_informations[0].account_number}
  bank_name={withdrawal.doctor.bank_informations[0].bank_name}
  id={withdrawal.id}
  amount={withdrawal.amount}
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
