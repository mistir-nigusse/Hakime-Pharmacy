import {useQuery, gql} from '@apollo/client';

export const GET_NEW_DOCTORS = gql`
query Unapproved_doctors {
  doctors(where: {is_approved: {_eq: false}}) {
    bio
    created_at
    current_hospital
    date_of_birth
    email
    experience_year
    experiences {
      department
      designation
      hospital_name
      end_date
      start_date
    }
    full_name
    id
    profile_image {
      url
    }
  
    licence
    phone_number
    sex
    speciallities {
      speciallity_name
    }
   
  }
}

`;

