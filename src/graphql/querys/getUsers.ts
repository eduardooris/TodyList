import { gql } from "@apollo/client";

export default gql`
  query getUsers($isn_usuario: ID!) {
    getUsers(isn_usuario: $isn_usuario) {
      id
      username
      email
    }
  }
`;
