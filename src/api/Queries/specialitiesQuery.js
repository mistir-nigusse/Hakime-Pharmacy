import {useQuery, gql} from '@apollo/client';

export const GET_SPECIALITIES= gql`
query SpecialitiyQuery {
    speciallities {
      speciallity_name
      id
      doctors{
        id
      }
    }
  }
  

  `;



