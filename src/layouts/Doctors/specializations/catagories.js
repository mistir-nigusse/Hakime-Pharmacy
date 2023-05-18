
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";

import { useMaterialUIController } from "context";
import AddSpecialization from "./addSpecialization";
import { GET_SPECIALITIES } from "api/Queries/specialitiesQuery";
 import { useQuery } from "@apollo/client";
import DeleteSpeciality from "./deleteSpeciality";

function Catagories() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;


  const { loading, error, data } = useQuery(GET_SPECIALITIES);
      if (loading) return <p>loading...</p>;
      if (error) return <p>this</p>;
    
  return (
    <Card id="delete-account">
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Specializations
        </MDTypography>
       {/* buttonnnnn */}
       <AddSpecialization/>
      </MDBox>
      {
                data.speciallities.map(speciality =>{
                  return (
                    <MDBox p={2}>
        
                    <MDBox
                      borderRadius="lg"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      p={3}
                      sx={{
                        border: ({ borders: { borderWidth, borderColor } }) =>
                          `${borderWidth[1]} solid ${borderColor}`,
                      }}
                    >
                      <MDBox component="img" src={masterCardLogo} alt="master card" width="10%" mr={2} />
                      <MDTypography variant="h6" fontWeight="medium">
                        {speciality.speciallity_name}
                      </MDTypography> &nbsp; &nbsp;
                      <MDTypography variant="h6" fontWeight="light">
                        {speciality.doctors.length} Doctors
                      </MDTypography>
                      <MDBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
                       <DeleteSpeciality id={speciality.id}/>
                      </MDBox>
                    </MDBox>
                  
                
              
              </MDBox>
                  )
                })
      }
  
    </Card>
  );
}

export default Catagories;
