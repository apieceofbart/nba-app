import * as React from "react";
import * as ReactDOM from "react-dom";
import { GameDetails } from "../../backend/interfaces/nba.response.games";

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
