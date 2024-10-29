import { gql } from "@apollo/client";

export default gql`
  mutation updateTask($id: ID!, $completed: Boolean!) {
    updateTask(id: $id, completed: $completed) {
      id
      isn_usuario
      title
      completed
      description
    }
  }
`;
