import {useMutation, gql} from '@apollo/client';



export const DELETE_USER =gql`
mutation DeleteUser($id: Int!) {
    delete_users(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`;

  