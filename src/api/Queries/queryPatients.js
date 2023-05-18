import {useQuery, gql} from '@apollo/client';

export const GET_PATIENTS = gql`
query AllPatients {
  users {
    email
    full_name
    id
    phone_number
    sex
    profile_image {
      url
    }
  }
  }`;
