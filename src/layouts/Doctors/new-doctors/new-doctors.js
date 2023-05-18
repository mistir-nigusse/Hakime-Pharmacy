
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Bill from "layouts/billing/components/Bill";
import { useQuery } from "@apollo/client";
import { GET_NEW_DOCTORS } from "api/Queries/queryNewDoctors";
import { useNavigate } from "react-router-dom";


function NewDoctors() {
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_NEW_DOCTORS);
  
  if (loading) return <p>loading</p>;
  if (error) return <p>Error : {error.message}</p>;
    

  return (
 
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          New Doctors
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
       { data.doctors.map((doctor) => {

         return(
          <div onClick={(event)=>{
           navigate(`/details/${doctor.id}`);
            }}>
          <Bill
          name={doctor.full_name}
          role={doctor.full_name}
          wallet={doctor.current_hospital}
          account={doctor.current_hospital}
          bank_name={doctor.current_hospital}

        />
        </div>
         )
    })
  }          
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default NewDoctors;
