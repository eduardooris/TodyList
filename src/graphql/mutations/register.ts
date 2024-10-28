import { gql } from "@apollo/client";

export default gql`
  mutation register($email: String!, $password: String!, $username: String!) {
    register(email: $email, password: $password, username: $username) {
      id
      token
      email
      username
    }
  }
`;
