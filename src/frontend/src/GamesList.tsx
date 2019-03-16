import * as React from "react";
import { GameDetails } from "../../backend/interfaces/nba.response.games";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export function GamesList({ games }: { games: GameDetails[] }) {
  return (
    <List component="ul" style={{ width: "480px", maxWidth: "100%" }}>
      {games.map((game) => (
        <ListItem key={game.id}>
          <ListItemText
            secondary={`${game.home.city} ${game.home.nickname}`}
            primary={game.home.score}
            style={{ textAlign: "right", flex: "1 1 50%" }}
          />
          <ListItemText
            secondary={`${game.visitor.city} ${game.visitor.nickname}`}
            primary={game.visitor.score}
            style={{ flex: "1 1 50%" }}
          />
        </ListItem>
      ))}
    </List>
  );
}
