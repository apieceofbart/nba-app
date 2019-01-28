const fetch = require("node-fetch");
const express = require("express");

const app = express();

const port = 3003;

const baseUrl = "http://data.nba.com/5s/json/cms/noseason/scoreboard";

const date = process.argv[2];

const getGamesFrom = async (date) => {
  const url = `${baseUrl}/${date}/games.json`;

  const resp = await fetch(url);
  const json = await resp.json();

  const games = json.sports_content.games.game;

  return games;
};

app.get("/:date?", async (req, res) => {
  try {
    const { date } = req.params;
    if (!date) {
      return res.status(404).send("You forgot the date pal");
    }
    const gamesOnDate = await getGamesFrom(date);
    res.send(gamesOnDate);
  } catch (e) {
    console.error(e);
    res.status(500).send("ooops error!");
  }
});

app.listen(port, () => console.log(`express server listening on ${port}`));
