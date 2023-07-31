import {useMutation,  gql} from '@apollo/client';

export const ADD_MEDICINE =gql`
mutation ADD_MEDICINE($medicine_id: _int4!, $order_id: Int!) {
    addMedicines(medicine_id: $medicine_id, order_id: $order_id) {
      id
    }
  }
  
  
`;

