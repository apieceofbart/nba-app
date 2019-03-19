import * as React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { BoxScore } from "../../backend/interfaces/nba.response.boxScore";

import { PointsTable } from "./PointsTable";

export function GameDetails({ gameDetails, loading }: { gameDetails: BoxScore; loading: boolean }) {
  const [team, setTeam] = React.useState<"home" | "visitor">("home");
  const { home, visitor } = gameDetails;

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "16px", position: "relative" }}
    >
      <Typography variant="subtitle2">Box Score</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Tabs style={{ width: "100%" }} variant="fullWidth" value={team} onChange={(_, value) => setTeam(value)}>
            <Tab value="home" label={home.nickname} />
            <Tab value="visitor" label={visitor.nickname} />
          </Tabs>
          <PointsTable players={gameDetails[team].players!} />
        </>
      )}
    </div>
  );
}
