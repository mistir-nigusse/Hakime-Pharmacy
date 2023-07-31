
  import {useQuery, gql} from '@apollo/client';

export const GET_PHOTO_PRESCRIPTION= gql`

query GET_PHOTO_PRESCRIPTION {
    orders(order_by: {created_at: desc}, where: {prescription_image: {_is_null: false}}) {
      id
        prescription_image
      prescription_paper_image {
        url
      }
    }
  }
  
  `;
