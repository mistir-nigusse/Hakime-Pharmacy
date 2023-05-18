import {useMutation, gql} from '@apollo/client';

export const REGISTER_DELIVERY_PERSON =gql`
mutation REGISTER_DELIVERY_PERSON($city: String!, $email: String!, $full_name: String!, $latitude: Float!, $location: String! , $longitude: Float!, $phone_number: String!, $profile_picture: Int!) {
    delivererRegister(city: $city, email: $email, full_name: $full_name, latitude: $latitude, location: $location, longitude: $longitude, phone_number: $phone_number, profile_picture: $profile_picture){
      id
    }
  }
  
  

  `