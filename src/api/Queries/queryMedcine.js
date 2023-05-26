import {useQuery, gql} from '@apollo/client';
export const GET_MEDICINE= gql`
query GET_MEDICINE($id: Int) {
    medicine(where: {pharmacy_id: {_eq: $id}}) {
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
  