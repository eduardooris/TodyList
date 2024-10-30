import { gql } from "@apollo/client";

export default gql`
  mutation deleteTask($id: ID!) {
    deleteTask(id: $id) {
      isn_usuario
      title
    }
  }
`;
