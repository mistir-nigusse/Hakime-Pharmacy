import {useMutation, gql} from '@apollo/client';

export const deleteAppointments = gql `
mutation deleteAppointments {
    delete_appointments(where: {id: {_eq: 10}}) {
      affected_rows
    }
  }
`
export const CANCEL_APPOINTMENT = gql `
mutation Cancelappointment ($id: Int!) {
  update_appointments(where: {id: {_eq: $id}}, _set: {status: "cancelled"})
}
`

