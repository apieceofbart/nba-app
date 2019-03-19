import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import * as React from "react";
import { GameData } from "../../backend/interfaces/nba.response.games";

type GameProps = {
  game: GameData;
  onGameSelect: (id: string) => void;
  selected: boolean;
  gameDetails: React.ReactElement | null | false;
};

export function Game({ game, onGameSelect, selected = false, gameDetails }: GameProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ListItem component="div" key={game.id} onClick={() => onGameSelect(game.id)} button={true}>
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
      {selected && <Collapse in={selected}>{gameDetails}</Collapse>}
    </div>
  );
}
