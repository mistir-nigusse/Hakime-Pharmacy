
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import { useQuery, useMutation } from "@apollo/client";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


import DataTable from "examples/Tables/DataTable";
import {GET_MEDICINE} from "api/Queries/queryMedcine"

const MedcineTableData = ()=> {
 const columns  =  [
    { Header: "Medcine name", accessor: "full_name", width: "30%", align: "left" },
    { Header: "Price", accessor: "sex", align: "left" },
    { Header: "Quantity", accessor: "phone_number", align: "center" },
    // { Header: "email", accessor: "email", align: "center" },
    // { Header: "action", accessor: "action", align: "center" },
  ];
  const rows =  [
    {
      Full_name: "mistir nigusse",
      Sex: "female",
      Phone_no: "0922331422",
      Email : "mistir@gmail.com"
    },
 
    // {
    //   project: <Project image={logoInvesion} name="Invesion" />,
    //   budget: (
    //     <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //       $2,300
    //     </MDTypography>
    //   ),
    //   status: (
    //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //       done
    //     </MDTypography>
    //   ),
    //   completion: <Progress color="success" value={100} />,
    //   action: (
    //     <MDTypography component="a" href="#" color="text">
    //       <Icon>more_vert</Icon>
    //     </MDTypography>
    //   ),
    // },
  ];
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );


  // const { loading, error, data } = useQuery(GET_MEDCINE, {variables:{id:10}});
 const { loading, error, data } = useQuery(GET_MEDICINE);

  if (loading) return <div><Progress color={"dark"} value={20}/></div>;
  if (error) return <p>Error : {error.message}</p>;
  console.log("hello" +data)

  return (
  
<Grid item xs={12}>
<Card>
  <MDBox
    mx={2}
    mt={-3}
    py={3}
    px={2}
    variant="gradient"
    bgColor="info"
    borderRadius="lg"
    coloredShadow="info"
  >
    <MDTypography variant="h6" color="white">
       MEDCINES
    </MDTypography>
  </MDBox>
  <MDBox pt={3}>
    <DataTable
      table={{ columns: columns, rows: data.users }}
      isSorted={true}
      entriesPerPage={true}
      showTotalEntries={true}
      noEndBorder
    />
  </MDBox>
</Card>
</Grid> 
  );
}

export default MedcineTableData;
