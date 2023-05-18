import {useQuery, gql} from '@apollo/client';

export const GET_APPOINTMENTS = gql`
query GET_APPOINTMENTS {
  appointments {
    date
    doctor {
      full_name
    }
    price
    patient {
      full_name
    }
    status
  }
}
`;

// export const GET_UPCOMING_APPOINTMENTS = gql`
// query queryConfirmedAppointments   {
//   appointments(where: {status: {_eq: "confirmed"}}) {
//     id
//     doctor {
//       full_name
//     }
//     patient {
//       full_name
//     }
//     time
//     status
//     price
//   }
// }
// `
// export const GET_PENDING_APPOINTMENTS = gql`
// query queryPendingAppointments @cached{
//   appointments(where: {status: {_eq: "pending"}}) {
//     id
//     doctor {
//       full_name
//     }
//     patient {
//       full_name
//     }
//     time
//     status
//     price
//   }
// }

// `;
// export const GET_CANCELLED_APPOINTMENTS = gql`
// query queryPendingAppointments {
//   appointments(where: {status: {_eq: "cancelled"}})  {
//     id
//     doctor {
//       full_name
//     }
//     patient {
//       full_name
//     }
//     time
//     status
//     price
//   }
// }

// `;
