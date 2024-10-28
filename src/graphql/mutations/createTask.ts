import { gql } from "@apollo/client";

export default gql`
  mutation addTask(
    $isn_usuario: ID!
    $title: String!
    $description: String
  ) {
    addTask(
      isn_usuario: $isn_usuario
      title: $title
      description: $description
    ) {
      id
      title
      isn_usuario
      description
      completed
    }
  }
`;
