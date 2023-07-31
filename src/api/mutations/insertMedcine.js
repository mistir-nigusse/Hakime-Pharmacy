
import {useMutation, gql} from '@apollo/client';


export const INSERT_MEDICINE = gql`
mutation INSERT_MEDICINE($description: String!, $image: Int!, $name: String!, $pharmacy_id: Int!, $must_prescribe: Boolean!, $price:Int!) {
  insert_medicine(objects: {description: $description, image: $image, must_prescribed: $must_prescribe, name: $name, pharmacy_id: $pharmacy_id, price: $price}) {
    returning {
      id
    }
  }
}

  

  `
  

