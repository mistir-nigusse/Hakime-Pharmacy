import {useMutation,  gql} from '@apollo/client';

export const UPLOAD_IMG =gql`
mutation UploadImg($img: String!) {
    uploadImage(base64: $img) {
      id
      url
    }
  }
  
  
`;

