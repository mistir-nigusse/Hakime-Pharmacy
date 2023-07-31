import {useMutation, gql} from '@apollo/client';

export const LOGIN =gql`
mutation LOGIN($email: String!, $password: String!) {
    pharmacylogin(password: $password, email: $email) {
      id
      token
      user_name
    }
  }
  
  `