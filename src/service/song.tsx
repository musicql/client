import { useQuery } from "react-query";
import { request, gql } from "graphql-request";
import client from "../utils/client";
function useSongs() {
  return useQuery("songs", async () => {
    const data = await client.request(
      gql`
          query {
            songs {
                id
                name
                imgUrl
                artist{
                  id
                  name
                }
            }
          }
        `
    );
    return data?.songs||[];
  });
}

export { useSongs }