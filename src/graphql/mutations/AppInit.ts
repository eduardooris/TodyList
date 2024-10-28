import { gql } from "@apollo/client";

export default gql`
    mutation getAppInit($token: String!) {
        getAppInit(token: $token) {
            id
            username
            email
            token
        }
    }
`