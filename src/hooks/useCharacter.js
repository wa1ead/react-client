import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        name
        episode
      }
    }
  }
`;

export function useCharacter(id) {
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });
  return { data, loading, error };
}
