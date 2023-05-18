import {useQuery, gql} from '@apollo/client';

export const GET_OVERVIEWS= gql`
query overviewQueries {
  doctors {
    id
  }
 
  appointments{
    id
  }
  withdrawals {
    id
  }
  users {
    id
  }
 
}

  `;

 // refunds {
  //   id
  // }