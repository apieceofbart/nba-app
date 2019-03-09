import * as React from "react";
import * as ReactDOM from "react-dom";
import { GameDetails } from "../../backend/interfaces/nba.response.games";

async function fetchGames(setGamesCallback: React.Dispatch<React.SetStateAction<GameDetails[]>>) {
  const gamesResponse: GameDetails[] = await fetch("/api/").then((r) => r.json());
  setGamesCallback(gamesResponse);
}

function App() {
  const [games, setGames] = React.useState<GameDetails[]>([]);

  React.useEffect(() => {
    fetchGames(setGames);
  }, []);

  return (
    <>
      <h1>NBA App</h1>
      <ul>
        {games.map((game) => (
          <li>
            {game.home.nickname} - {game.visitor.nickname}
          </li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
