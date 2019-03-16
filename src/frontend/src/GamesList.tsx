import * as React from "react";
import { GameData } from "../../backend/interfaces/nba.response.games";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import List from "@material-ui/core/List";
import { GameDetails } from "./GameDetails";

import { Game } from "./Game";

export function GamesList({ games }: { games: GameData[] }) {
  const matches = useMediaQuery("(min-width:760px)");
  const [selectedGameId, setSelectedGameId] = React.useState("");
  function onGameSelect(id: string) {
    if (id === selectedGameId) {
      return setSelectedGameId("");
    }
    setSelectedGameId(id);
  }
  const selectedGame = games.find((game) => game.id === selectedGameId);
  return (
    <div style={{ display: "flex" }}>
      <List component="section">
        {games.map((game) => (
          <Game
            key={game.id}
            game={game}
            onGameSelect={onGameSelect}
            selectedGameId={selectedGameId}
            showDetails={!matches}
          />
        ))}
      </List>
      {matches && selectedGame ? <GameDetails home={selectedGame.home} visitor={selectedGame.visitor} /> : null}
    </div>
  );
}
