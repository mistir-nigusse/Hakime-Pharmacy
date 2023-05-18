import {useMutation, gql} from '@apollo/client';
export const APPROVE_DOCTOR =gql`
mutation approveDoctor ($id: Int!){
    update_doctors(where: {id: {_eq: $id}}, _set: {is_approved: true}) {
      affected_rows
      returning {
        is_approved
      }
    }
  }
`;
export const SUSPEND_DOCTOR =gql`
mutation SuspendDoctor ($id: Int!){
    update_doctors(where: {id: {_eq: $id}}, _set: {is_suspended: true}) {
      affected_rows
      returning {
        is_suspended
      }
    }
  }
`;
export const UNSUSPEND_DOCTOR =gql`
mutation SuspendDoctor ($id: Int!){
    update_doctors(where: {id: {_eq: $id}}, _set: {is_suspended: false}) {
      affected_rows
      returning {
        is_suspended
      }
    }
  }
`;
export const DELETE_DOCTOR =gql`
mutation DeleteDoctor($id: Int!) {
    delete_doctors(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`;

  
