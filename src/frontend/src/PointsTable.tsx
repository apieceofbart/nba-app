import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { BoxScore, Stats } from "../../backend/interfaces/nba.response.boxScore";

const firstCellStyle = {
  left: 0,
  position: "sticky" as "sticky",
  background: "#dedede"
};

export function PointsTable({ data }: { data: BoxScore["home"] }) {
  return (
    <div style={{ overflowX: "auto", maxWidth: "80vw" }}>
      <Table padding="dense">
        <TableHead>
          <TableRow>
            <TableCell key="player" style={firstCellStyle}>
              Player
            </TableCell>
            <TableCell key="points">Points</TableCell>
            <TableCell key="assists">Assists</TableCell>
            <TableCell key="steals">Steals</TableCell>
            <TableCell key="drebounds">D. Rebounds</TableCell>
            <TableCell key="orebounds">O. Rebounds</TableCell>
            <TableCell key="threes">Three Points</TableCell>
            <TableCell key="blocks">Blocks</TableCell>
            <TableCell key="plusminus">+ / -</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.players!.player.map((p, i) => {
            return (
              <TableRow key={i}>
                <TableCell key="player" style={firstCellStyle}>
                  {p.first_name} {p.last_name}
                </TableCell>
                <TableCell key="points">
                  <strong>{p.points}</strong>
                </TableCell>
                <TableCell key="assists">{p.assists}</TableCell>
                <TableCell key="steals">{p.steals}</TableCell>
                <TableCell key="drebounds">{p.rebounds_defensive}</TableCell>
                <TableCell key="orebounds">{p.rebounds_offensive}</TableCell>
                <TableCell key="threes">
                  {p.three_pointers_made} / {p.three_pointers_attempted}
                </TableCell>
                <TableCell key="blocks">{p.blocks}</TableCell>
                <TableCell key="plusminus">{p.plus_minus}</TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell key="total" style={firstCellStyle}>
              Total
            </TableCell>
            <TableCell key="points">{data.stats!.points}</TableCell>
            <TableCell key="assists">{data.stats!.assists}</TableCell>
            <TableCell key="steals">{data.stats!.steals}</TableCell>
            <TableCell key="drebounds">{data.stats!.rebounds_defensive}</TableCell>
            <TableCell key="orebounds">{data.stats!.rebounds_offensive}</TableCell>
            <TableCell key="threes">
              {data.stats!.three_pointers_made} / {data.stats!.three_pointers_attempted}
            </TableCell>
            <TableCell key="blocks">{data.stats!.blocks}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
