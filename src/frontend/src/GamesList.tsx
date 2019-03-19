import * as React from "react";
import { GameData } from "../../backend/interfaces/nba.response.games";
import { BoxScore } from "../../backend/interfaces/nba.response.boxScore";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import List from "@material-ui/core/List";
import { GameDetails } from "./GameDetails";

import { Game } from "./Game";

export function GamesList({ games }: { games: GameData[] }) {
  const matches = useMediaQuery("(min-width:1100px)");
  const [selectedGameId, setSelectedGameId] = React.useState("");
  const [loadingGameDetails, setLoadingGameDetails] = React.useState(false);
  const [selectedGameDetails, setSelectedGameDetails] = React.useState<BoxScore | undefined>(undefined);

  async function fetchGamesDetails(selectedGameId: string) {
    setLoadingGameDetails(true);
    const boxScore: BoxScore = await fetch(`/api/game/${selectedGameId}`).then((r) => r.json());
    setLoadingGameDetails(false);
    setSelectedGameDetails(boxScore);
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
    if (selectedGameDetails) {
      return <GameDetails loading={loadingGameDetails} gameDetails={selectedGameDetails} />;
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
            gameDetails={!matches && showDetails()}
            onGameSelect={onGameSelect}
            selected={selectedGameId === game.id}
          />
        ))}
      </List>
      {matches && showDetails()}
    </div>
  );
}
