// import React, { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { SimpleGrid, Text } from "@chakra-ui/react";

// interface Game {
//   id: number;
//   name: string;
// }

// interface FetchGameResponse {
//   count: number;
//   results: Game[];
// }
// const GameGrid = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     apiClient
//       .get<FetchGameResponse>("/photos")
//       .then((res) => setGames(res.data.results))
//       .catch((err) => setError(err.message));
//   });
//   return (

//   );
// };

// export default GameGrid;
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []); // Added dependency array to ensure the effect runs only once
  console.log(games);
  return (
    <>
      <Text>Games fetched: {games.length}</Text>{" "}
      {/* This displays the length of games */}
      <Text>Error: {error}</Text> {/* Display the error if any */}
      {/* Rest of your component */}
    </>
  );

  // return (
  //   <>
  //     {error && <Text color="red">{error}</Text>}
  //     <SimpleGrid columns={3} spacing={5}>
  //       {/* {games.map((game) => (
  //         <Text key={game.id}>{game.name}</Text>
  //       ))} */}
  //     </SimpleGrid>
  //   </>
  // );
};

export default GameGrid;
