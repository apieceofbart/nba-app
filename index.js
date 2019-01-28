const fetch = require("node-fetch");

const baseUrl = "http://data.nba.com/5s/json/cms/noseason/scoreboard";

const date = process.argv[2];

const getGamesFrom = async (date) => {
  const url = `${baseUrl}/${date}/games.json`;

  const resp = await fetch(url);
  const json = await resp.json();

  const games = json.sports_content.games.game;

  return games.length;
};

(async function() {
  const gamesOnDate = await getGamesFrom(date);
  console.log(gamesOnDate);
})();
