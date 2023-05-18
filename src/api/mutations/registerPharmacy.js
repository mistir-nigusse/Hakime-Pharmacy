import {useMutation, gql} from '@apollo/client';

export const REGISTER_PHARMACY =gql`
mutation REGISTER_PHARMACY ($city: String!, $close_time: String!, $email: String! , $latitude: Float!, $license: Int!, $location: String!, $logo: Int! , $longitude: Float!, $name: String!, $o_full_name: String!, $o_phone_number: String!, $o_profile_picture: Int!, $open_time: String! , $phone_number: String!) {
    pharmacyRegister(city: $city, close_time: $close_time, email: $email, latitude: $latitude, license: $license, location: $location, logo: $logo, longitude: $longitude, name: $name, o_full_name: $o_full_name, o_profile_picture: $o_profile_picture, open_time: $open_time, phone_number: $phone_number, o_phone_number: $o_phone_number) {
      id
    }
  }
  
  

  `