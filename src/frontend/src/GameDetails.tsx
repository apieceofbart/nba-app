import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Typography } from "@material-ui/core";
import { BoxScore } from "../../backend/interfaces/nba.response.boxScore";

const firstCellStyle = {
  left: 0,
  position: "sticky" as "sticky",
  background: "#dedede"
};

export function GameDetails({ gameDetails, loading }: { gameDetails: BoxScore; loading: boolean }) {
  const { home, visitor } = gameDetails;

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "16px", position: "relative" }}
    >
      <Typography variant="subtitle2">Game Details</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <div style={{ overflowX: "auto", maxWidth: "80vw" }}>
          <Table padding="dense">
            <TableHead>
              <TableRow>
                <TableCell key="team" style={firstCellStyle}>
                  Team
                </TableCell>
                {home.linescores!.period.map((p) => (
                  <TableCell key={p.period_name}>{p.period_name}</TableCell>
                ))}
                <TableCell key="total">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell key="team" style={firstCellStyle}>
                  {home.nickname}
                </TableCell>
                {home.linescores!.period.map((p) => (
                  <TableCell key={p.period_name}>{p.score}</TableCell>
                ))}
                <TableCell key="score">{home.score}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell key="team" style={firstCellStyle}>
                  {visitor.nickname}
                </TableCell>
                {visitor.linescores!.period.map((p) => (
                  <TableCell key={p.period_name}>{p.score}</TableCell>
                ))}
                <TableCell key="score">{visitor.score}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
