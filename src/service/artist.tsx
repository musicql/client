import { useQuery } from "react-query";
import {  gql } from "graphql-request";
import clint from "../utils/client";
function useArtists() {
  return useQuery("artists", async () => {
    const data = await clint.request(
      gql`
          query {
            artists {
                id
                name
                imgUrl
            }
          }
        `
    );
    return data?.artists||[];
  });
}

export { useArtists }