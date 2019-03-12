import * as React from "react";
import * as ReactDOM from "react-dom";
import { GameDetails } from "../../backend/interfaces/nba.response.games";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@material-ui/core";

function App() {
  const [games, setGames] = React.useState<GameDetails[]>([]);

  async function fetchGames() {
    const gamesResponse: GameDetails[] = await fetch("/api/").then((r) => r.json());
    setGames(gamesResponse);
  }

  React.useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <Typography variant="h1" style={{ textAlign: "center" }}>
        NBA App
      </Typography>
      <List component="ul">
        {games.map((game) => (
          <ListItem key={game.id}>
            <ListItemText
              primary={game.home.nickname}
              secondary={game.home.score}
              style={{ textAlign: "right", flex: "1 1 50%" }}
            />
            <ListItemText primary={game.visitor.nickname} secondary={game.visitor.score} style={{ flex: "1 1 50%" }} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
