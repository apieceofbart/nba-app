import * as React from "react";
import * as ReactDOM from "react-dom";
import { GameDetails } from "../../backend/interfaces/nba.response.games";

import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";
import { GamesList } from "./GamesList";

function App() {
  const [games, setGames] = React.useState<GameDetails[]>([]);
  const [loadingGames, setLoadingGames] = React.useState(false);

  async function fetchGames() {
    setLoadingGames(true);
    const gamesResponse: GameDetails[] = await fetch("/api/").then((r) => r.json());
    setLoadingGames(false);
    setGames(gamesResponse);
  }

  React.useEffect(() => {
    fetchGames();
  }, []);

  return (
    <section style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h1">NBA App</Typography>
      {loadingGames ? <CircularProgress /> : <GamesList games={games} />}
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
