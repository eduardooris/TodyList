import { gql } from "@apollo/client";

export default gql`
  query getTasks($isn_usuario: ID!) {
    getTasks(isn_usuario: $isn_usuario) {
      id
      isn_usuario
      title
      completed
      description
      comments {
        id
        isn_usuario
        comment
        dsc_annex
        date
      }
    }
  }
`;
