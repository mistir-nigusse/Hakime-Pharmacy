import {useQuery, gql} from '@apollo/client';

export const GET_ORDERS = gql`
   query GET_ORDERS {
        orders {
            id
          user {
            full_name
          }
          pharmacy {
            name
            medicines {
              name
            }
          }
          deliverer {
            full_name
          }
          order_code
          status
          total_cost
        }
      

  }`;

  