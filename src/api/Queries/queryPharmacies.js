import { useQuery, gql } from "@apollo/client";

export const GET_PHARMACIES = gql `
query GET_PHARMACIES {
  pharmacies(order_by: {created_at: desc}) {
    address {
      city
      latitude
      location
      longitude
    }
    close_time
    id
    license_image {
      url
    }
    license
    logo
    logo_image {
      id
    }
    name
    open_time
    orders {
      id
    }
    owner_information {
      full_name
      email
    }
    owner_info
    phone_number
    rate
    wallet
  
  }
}

  
`