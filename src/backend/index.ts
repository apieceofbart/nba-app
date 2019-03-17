import * as nodeFetch from "node-fetch";
import * as express from "express";
import { getYesterdaysDate } from "./utils";
import { GamesResponse } from "./interfaces/nba.response.games";
import { BoxScoreResponse, BoxScore } from "./interfaces/nba.response.boxScore";
require("dotenv").config();

const app: express.Application = express.default();

const port = process.env.API_PORT || 3003;

const baseUrl = "http://data.nba.com/5s/json/cms/noseason/";
const gamesUrl = `${baseUrl}/scoreboard`;
const getBoxScoreUrl = (date: string, gameId: string) => `${baseUrl}/game/${date}/${gameId}/boxscore.json`;

const getGamesFrom = async (date: string) => {
  const url = `${gamesUrl}/${date}/games.json`;

  const resp = await nodeFetch.default(url);
  const json: GamesResponse = await resp.json();

  const games = json.sports_content.games.game;

  return games;
};

const getGameBoxScore = async (date: string, gameId: string) => {
  const url = getBoxScoreUrl(date, gameId);

  const resp = await nodeFetch.default(url);
  const json: BoxScoreResponse = await resp.json();

  const boxScore: BoxScore = json.sports_content.game;

  return boxScore;
};

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api/:date?", async (req, res) => {
  try {
    let { date } = req.params;
    if (!date) {
      date = getYesterdaysDate();
    }
    const gamesOnDate = await getGamesFrom(date);
    res.send(gamesOnDate);
  } catch (e) {
    console.error(e);
    res.status(500).send("ooops error!");
  }
});

app.get("/api/game/:gameId?/:date?", async (req, res) => {
  try {
    let { gameId, date } = req.params;
    console.log(gameId, date);
    if (!date) {
      date = getYesterdaysDate();
    }
    if (!gameId) {
      res.status(404).send("No gameId provided!");
    }
    const gamesDetails = await getGameBoxScore(date, gameId);
    res.send(gamesDetails);
  } catch (e) {
    console.error(e);
    res.status(500).send("ooops error!");
  }
});

app.listen(port, () => console.log(`express server listening on ${port}`));

export default app;
