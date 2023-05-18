import {useMutation, gql} from '@apollo/client';

export const VERIFY =gql`
mutation Verify($code: String!, $id: Int!) {
    verify(code: $code, id: $id) {
      id
      is_verified
    }
  
    
  }
  `

  