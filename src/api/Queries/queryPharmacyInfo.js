
import {useQuery, gql} from '@apollo/client';

export const GET_PHARMACY_INFO= gql`
query GET_PHARMACY_INFO($Id: Int = 10) {
    pharmacies(where: {id: {_eq: $Id}}) {
      wallet
      rate
      phone_number
      owner_information {
        email
        full_name
        phone_number
        profile_picture
        image {
          url
        }
      }
      orders {
        id
      }
      open_time
      name
      medicines {
        id
      }
      address {
        city
        latitude
        location
        longitude
      }
      close_time
      logo
      logo_image {
        url
      }
    }
  }
  `;
