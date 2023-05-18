/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import { useQuery, useMutation } from "@apollo/client";
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { GET_APPOINTMENTS } from "api/Queries/queryAppointments";
import { GET_ORDERS } from "api/Queries/queryOrders";

const OrdersTable = ()=> {
 const columns  =  [
    { Header: "User", accessor: "user.full_name", width: "30%", align: "left" },
    { Header: "Pharmacy", accessor: "pharmacy.name", align: "left" },
    { Header: "Delivery_worker", accessor: "deliverer.full_name", align: "left" },
    { Header: "medcine", accessor: "medcine[0].1", align: "left" },
    { Header: "status", accessor: "status", align: "left" },
    { Header: "total_cost", accessor: "total_cost", align: "left" },

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

  const { loading, error, data } = useQuery(GET_ORDERS);

  if (loading) return <div><Progress color={"dark"} value={20}/><br/></div>;
  if (error) return <p>Error : {error.message}</p>;
  console.log( data)

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
      Medcine Orders
    </MDTypography>
  </MDBox>
  <MDBox pt={3}>
    <DataTable
      table={{ columns: columns, rows: data.orders }}
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

export default OrdersTable;
