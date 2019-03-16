import * as React from "react";
import { GameDetails } from "../../backend/interfaces/nba.response.games";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export function GamesList({ games }: { games: GameDetails[] }) {
  return (
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
  );
}
