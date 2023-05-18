import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";
import AddBannerButton from "./addBannerButton";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ADS } from "api/Queries/queryAds";
import DeleteBanner from "./deleteBanner";

function Ads() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const addBannerHandler = (event) =>{
        event.preventDefault()

  }
  const { loading, error, data } = useQuery(GET_ADS);
    
  if (loading) return <p>loading.....</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <Card id="delete-account">
    <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
      <MDTypography variant="h6" fontWeight="medium">
        Banners
      </MDTypography>
     
      <AddBannerButton/>
    </MDBox>
    { data.banners.map((banner)=>{
        return(
            <MDBox p={2}>
       
            <MDBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={13}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
                            <img src={banner.the_image.url} alt="banner" width="100%"  />

              {/* <MDBox component="img" src={banner.the_image.url} alt="banner" width="100%"  /> */}
              <MDTypography variant="h6" fontWeight="medium">
                {banner.business_name}<br/>
                {banner.start_date}<br/>
                {banner.end_date}<br/>
              </MDTypography>
              <MDBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
               <DeleteBanner/>
              </MDBox>
            </MDBox>
    
      </MDBox>
        );
     })}
  
    
    </Card>
  );
}

export default Ads;
