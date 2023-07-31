
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import { useQuery, useMutation } from "@apollo/client";
import { Icon } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import DataTable from "examples/Tables/DataTable";
import {GET_MEDICINE} from "api/Queries/queryMedcine"
import DeleteMedicine from "layouts/authentication/AddMedcine/deleteMedcineButton";
import EditMedicineButton from "layouts/authentication/AddMedcine/editMedcineButton";

const MedcineTableData = ()=> {

const handleEdit=()=>{
   console.log('Edit')
}

const handleDelete=(value)=>{
  console.log('Delete'+ value)
}

 const columns  =  [
  // { Header: "Id", accessor: "id", width: "5%", align: "left" },
    { Header: "Medcine name", accessor: "name", width: "30%", align: "left" },
    { Header: "Price", accessor: "price", width:"10%", align: "left" },
    { 
      Header: "Must be prescribed", 
      width:"10%",
      accessor: "must_prescribed", 
      align: "center", 
      Cell: ({ value }) => value ? 'Yes' : 'No' 
    },
    { 
      Header: "Actions",
      accessor: "id",
      align: "center",
      Cell: ({ value }) => (
        <>
       
        <EditMedicineButton/>
        <DeleteMedicine medicineId={value} pharmacyId={13}/>

        {/* <DeleteMedicine medicineId={value} pharmacyId={localStorage.getItem('pharamacyId')}/> */}
      </>
      )
    }
  
  
  ];
  const { loading, error, data } = useQuery(GET_MEDICINE, {variables:{pharmacyId: 13}});

  if (loading) return <div>loading</div>;
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
      table={{ columns: columns, rows: data.medicine }}
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
