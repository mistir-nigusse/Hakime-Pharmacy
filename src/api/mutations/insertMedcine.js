
import {useMutation, gql} from '@apollo/client';


export const INSERT_MEDICINE = gql`
mutation INSERT_MEDICINE($medcineName:String!, $price:String!, $brandName:String!, $description:String!, $expireDate:String!, $productionDate:String!, $image:String!, $must_prescribed:Boolean! ) {
    insert_medicine(objects: {medcineName: $medcineName, price: $price, brandName:$brandName, description:$description, expireDate: $expireDate, productionDate: $productionDate, image:$image , must_prescribed:$ must_prescribed}) {
        returning {
          id
        }
      }
  }
  

  `
  

