import {useQuery, gql} from '@apollo/client';
export const GET_SPECIALLITIES = gql`
query QuerySpeciallities {
    speciallities {
      id
      speciallity_name
    }
  }
`;

export const GET_SPECIALITIES_BY_NAME = gql `
query SpecialityByName ($speciality_name : String!) {
  speciallities(where: {speciallity_name: {_eq: $speciality_name}}) {
    doctors {
      experience_year
      full_name
      id
      phone_number
    }
    id
  }
}
`
  