import * as nodeFetch from "node-fetch";
import * as express from "express";
import { getTodaysDate } from "./utils";

const app: express.Application = express.default();

const port = 3003;

const baseUrl = "http://data.nba.com/5s/json/cms/noseason/scoreboard";

const getGamesFrom = async (date: string) => {
  const url = `${baseUrl}/${date}/games.json`;

  const resp = await nodeFetch.default(url);
  const json = await resp.json();

  const games = json.sports_content.games.game;

  return games;
};

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/:date?", async (req, res) => {
  try {
    let { date } = req.params;
    if (!date) {
      date = getTodaysDate();
    }
    const gamesOnDate = await getGamesFrom(date);
    res.send(gamesOnDate);
  } catch (e) {
    console.error(e);
    res.status(500).send("ooops error!");
  }
});

app.listen(port, () => console.log(`express server listening on ${port}`));

export default app;
