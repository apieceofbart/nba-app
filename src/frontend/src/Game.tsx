import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import * as React from "react";
import { GameData } from "../../backend/interfaces/nba.response.games";
import { GameDetails } from "./GameDetails";

type GameProps = {
  game: GameData;
  onGameSelect: (id: string) => void;
  showDetails: boolean;
  selectedGameId: string;
};

export function Game({ game, onGameSelect, showDetails = false, selectedGameId }: GameProps) {
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
      <Collapse in={showDetails && selectedGameId === game.id}>
        <GameDetails home={game.home} visitor={game.visitor} />
      </Collapse>
    </div>
  );
}
