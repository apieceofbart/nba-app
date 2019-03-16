import * as React from "react";
import * as ReactDOM from "react-dom";
import { GameData } from "../../backend/interfaces/nba.response.games";

import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { GamesList } from "./GamesList";

function App() {
  const [games, setGames] = React.useState<GameData[]>([]);
  const [loadingGames, setLoadingGames] = React.useState(false);

  async function fetchGames() {
    setLoadingGames(true);
    const gamesResponse: GameData[] = await fetch("/api/").then((r) => r.json());
    setLoadingGames(false);
    setGames(gamesResponse);
  }

  React.useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <CssBaseline />
      <section style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h4">NBA App</Typography>
        {loadingGames ? <CircularProgress /> : <GamesList games={games} />}
      </section>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
