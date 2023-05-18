import {useMutation, gql} from '@apollo/client';

export const INSERT_SPECIALITY =gql`
mutation InsertSpeciality($specialityName:String!) {
    insert_speciallities(objects: {speciallity_name: $specialityName}) {
      returning {
        id
      }
    }
  }
  

  `

export const DELETE_SPECIALITY = gql`
mutation DeleteSpeciality($id:Int!) {
  delete_speciallities(where: {id: {_eq: $id}}){
    returning {
      id
    }
  }
}

`
 
