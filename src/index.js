"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodeFetch = __importStar(require("node-fetch"));
const express = __importStar(require("express"));
const utils = require("./utils");
const app = express.default();
const port = 3003;
const baseUrl = "http://data.nba.com/5s/json/cms/noseason/scoreboard";
const getGamesFrom = async (date) => {
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
            date = utils.getTodaysDate();
        }
        const gamesOnDate = await getGamesFrom(date);
        res.send(gamesOnDate);
    }
    catch (e) {
        console.error(e);
        res.status(500).send("ooops error!");
    }
});
app.listen(port, () => console.log(`express server listening on ${port}`));
