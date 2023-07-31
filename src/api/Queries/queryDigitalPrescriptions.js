
  import {gql} from '@apollo/client'

export const GET_DIGITAL_ORDERS = gql `
query GET_DIGITAL_ORDERS  {
    orders(order_by: {created_at: desc}, where: {digital_prescription_id: {_is_null: false}}) {

    deliverer {
        full_name
        phone_number
        profile_picture 
      }
      digital_prescription {
        prescribed_medicines {
          medicine_name
          dose
        }
        doctor {
          full_name
        }
        patient {
          full_name
          age
        }
      }
      order_code
      status
      total_cost
    }
  }

  
`
//  orders(order_by: {created_at: desc}, where: {digital_prescription_id: {_is_null: false}, deliverer_id: {_is_null: false}}) {
