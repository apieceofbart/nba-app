import * as React from "react";
import { GameData } from "../../backend/interfaces/nba.response.games";
import { BoxScore } from "../../backend/interfaces/nba.response.boxScore";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import List from "@material-ui/core/List";
import { GameDetails } from "./GameDetails";

import { Game } from "./Game";
import { CircularProgress } from "@material-ui/core";

export function GamesList({ games }: { games: GameData[] }) {
  const matches = useMediaQuery("(min-width:760px)");
  const [selectedGameId, setSelectedGameId] = React.useState("");
  const [loadingGameDetails, setLoadingGameDetails] = React.useState(false);
  const [selectedGame, setSelectedGame] = React.useState<BoxScore | null>(null);

  async function fetchGamesDetails(selectedGameId: string) {
    setLoadingGameDetails(true);
    const boxScore: BoxScore = await fetch(`/api/game/${selectedGameId}`).then((r) => r.json());
    setLoadingGameDetails(false);
    setSelectedGame(boxScore);
  }

  React.useEffect(() => {
    if (selectedGameId) {
      fetchGamesDetails(selectedGameId);
    }
  }, [selectedGameId]);
  function onGameSelect(id: string) {
    if (id === selectedGameId) {
      return setSelectedGameId("");
    }
    setSelectedGameId(id);
  }
  function showDetails() {
    if (matches) {
      if (loadingGameDetails) {
        return <CircularProgress />;
      }
      if (selectedGame) {
        return <GameDetails home={selectedGame.home} visitor={selectedGame.visitor} />;
      }
      return null;
    }
    return null;
  }

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
      {showDetails()}
    </div>
  );
}
