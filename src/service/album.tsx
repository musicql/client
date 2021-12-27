import { useQuery } from "react-query";
import {  gql } from "graphql-request";
import client from "../utils/client";
function useAlbums() {
  return useQuery("albums", async () => {
    const data = await client.request(
      gql`
          query {
            albums {
                id
                name
                imgUrl
            }
          }
        `
    );
    return data?.albums||[];
  });
}

export { useAlbums }