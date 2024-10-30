import { gql } from "@apollo/client";

export default gql`
  mutation addComment($id: ID!, $isn_usuario: ID!, $comment: String!) {
    addComment(id: $id, isn_usuario: $isn_usuario, comment: $comment) {
      isn_usuario
    }
  }
`;
