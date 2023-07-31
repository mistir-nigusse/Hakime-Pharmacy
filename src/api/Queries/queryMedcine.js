import {useQuery, gql} from '@apollo/client';
export const GET_MEDICINE= gql`
query GET_MEDICINE($pharmacyId: Int!) {
    medicine(where: {pharmacy_id: {_eq: $pharmacyId}}) {
      id
      name
      price
      must_prescribed
      description
      medicine_image {
        id
      }
    }
  }

  `;

  
  export const GET_MEDICINE_ID= gql`
  query GET_MEDICINE($pharmacyId: Int!) {
      medicine(where: {pharmacy_id: {_eq: $pharmacyId}}) {
        id
        name
      }
    }
  
    `;
    
    