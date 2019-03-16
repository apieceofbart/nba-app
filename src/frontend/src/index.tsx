import * as React from "react";
import * as ReactDOM from "react-dom";
import { GameDetails } from "../../backend/interfaces/nba.response.games";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";

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
      {loadingGames ? (
        <CircularProgress />
      ) : (
        <List component="ul">
          {games.map((game) => (
            <ListItem key={game.id}>
              <ListItemText
                primary={game.home.nickname}
                secondary={game.home.score}
                style={{ textAlign: "right", flex: "1 1 50%" }}
              />
              <ListItemText
                primary={game.visitor.nickname}
                secondary={game.visitor.score}
                style={{ flex: "1 1 50%" }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
