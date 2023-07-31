import {useMutation,  gql} from '@apollo/client';

export const DELETE_MEDICINE =gql`
mutation DELETE_MEDICINE($pharmacyId: Int!, $medicineId: Int!) {
    delete_medicine(where: {pharmacy_id: {_eq: $pharmacyId}, id: {_eq: $medicineId}}) {
      returning {
        id
      }
    }
  }
  
  
`;



  