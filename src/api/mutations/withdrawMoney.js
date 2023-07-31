import {useMutation, gql} from '@apollo/client';

export const WITHDRAW_MONEY =gql`
mutation WITHDRAW_MONEY($pharmacy_id: Int!, $amount: Int!) {
    insert_withdrawals(objects: {amount: $amount, pharmacy_id: $pharmacy_id}) {
      returning {
        status
        id
      }
    }
  }
  `

  