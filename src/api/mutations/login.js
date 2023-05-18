import {useMutation, gql} from '@apollo/client';

export const LOGIN =gql`

mutation LoginMutation($email:String!, $pswd:String!) {
    adminLogin(email: $email, password: $pswd) {
      
        token
      
      
    }
    
  }
  `