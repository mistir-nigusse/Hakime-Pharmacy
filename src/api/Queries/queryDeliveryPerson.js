import {useQuery,gql} from '@apollo/client'

export const GET_DELIVERY_PERSON = gql `
query GET_DELIVERY_PERSON {
  deliverers {
    address {
      city
      latitude
      location
      longitude
    }
    bank_information
    bank_info {
      bank_name
      account_number
    }
    email
    full_name
    id
    wallet
    profile_picture
    phone_number
  }
}

  
`