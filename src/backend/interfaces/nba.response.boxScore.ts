export interface BoxScoreResponse {
  sports_content: Sports_content;
}
interface Sports_content {
  sports_meta: Sports_meta;
  game: BoxScore;
}
interface Sports_meta {
  date_time: string;
  season_meta: Season_meta;
  next: Next;
}
interface Season_meta {
  calendar_date: string;
  season_year: string;
  stats_season_year: string;
  stats_season_id: string;
  stats_season_stage: string;
  roster_season_year: string;
  schedule_season_year: string;
  standings_season_year: string;
  season_id: string;
  display_year: string;
  display_season: string;
  season_stage: string;
  league_id: string;
}
interface Next {
  url: string;
}
export interface BoxScore {
  id: string;
  game_url: string;
  season_id: string;
  date: string;
  time: string;
  arena: string;
  city: string;
  state: string;
  country: string;
  home_start_date: string;
  home_start_time: string;
  visitor_start_date: string;
  visitor_start_time: string;
  previewAvailable: string;
  recapAvailable: string;
  notebookAvailable: string;
  tnt_ot: string;
  attendance: string;
  officials: OfficialsItem[];
  ticket: Ticket;
  broadcasters: Broadcasters;
  period_time: Period_time;
  visitor: Visitor;
  home: Home;
  lp: Lp;
  dl: Dl;
}
interface OfficialsItem {
  person_id: string;
  first_name: string;
  last_name: string;
  jersey_number: string;
}
interface Ticket {
  ticket_link: string;
}
interface Broadcasters {
  radio: Radio;
  tv: Tv;
}
interface Radio {
  broadcaster: BroadcasterItem[];
}
interface BroadcasterItem {
  scope: string;
  home_visitor: string;
  display_name: string;
}
interface Tv {
  broadcaster: BroadcasterItem[];
}
interface Period_time {
  period_value: string;
  period_status: string;
  game_status: string;
  game_clock: string;
  total_periods: string;
  period_name: string;
}
interface Visitor {
  id?: string;
  team_key?: string;
  city?: string;
  abbreviation?: string;
  nickname?: string;
  url_name?: string;
  team_code?: string;
  score?: string;
  linescores?: Linescores;
  Leaders?: Leaders;
  stats?: Stats;
  players?: Players;
  audio?: Audio;
  video?: Video;
}
interface Linescores {
  period: PeriodItem[];
}
interface PeriodItem {
  period_value: string;
  period_name: string;
  score: string;
}
interface Leaders {
  Points: Points;
  Assists: Assists;
  Rebounds: Rebounds;
}
interface Points {
  PlayerCount: string;
  StatValue: string;
  leader: LeaderItem[];
}
interface LeaderItem {
  PersonID: string;
  PlayerCode: string;
  FirstName: string;
  LastName: string;
}
interface Assists {
  PlayerCount: string;
  StatValue: string;
  leader: LeaderItem[];
}
interface Rebounds {
  PlayerCount: string;
  StatValue: string;
  leader: LeaderItem[];
}
export interface Stats {
  points: string;
  field_goals_made: string;
  field_goals_attempted: string;
  field_goals_percentage: string;
  free_throws_made: string;
  free_throws_attempted: string;
  free_throws_percentage: string;
  three_pointers_made: string;
  three_pointers_attempted: string;
  three_pointers_percentage: string;
  rebounds_offensive: string;
  rebounds_defensive: string;
  team_rebounds: string;
  assists: string;
  fouls: string;
  team_fouls: string;
  technical_fouls: string;
  steals: string;
  turnovers: string;
  team_turnovers: string;
  blocks: string;
  short_timeout_remaining: string;
  full_timeout_remaining: string;
}
interface Players {
  player: PlayerItem[];
}
interface PlayerItem {
  first_name: string;
  last_name: string;
  jersey_number: string;
  person_id: string;
  position_short: string;
  position_full: string;
  minutes: string;
  seconds: string;
  points: string;
  field_goals_made: string;
  field_goals_attempted: string;
  player_code: string;
  free_throws_made: string;
  free_throws_attempted: string;
  three_pointers_made: string;
  three_pointers_attempted: string;
  rebounds_offensive: string;
  rebounds_defensive: string;
  assists: string;
  fouls: string;
  steals: string;
  turnovers: string;
  team_turnovers: string;
  blocks: string;
  plus_minus: string;
  on_court: string;
  starting_position: string;
}
interface Home {
  id?: string;
  team_key?: string;
  city?: string;
  abbreviation?: string;
  nickname?: string;
  url_name?: string;
  team_code?: string;
  score?: string;
  linescores?: Linescores;
  Leaders?: Leaders;
  stats?: Stats;
  players?: Players;
  audio?: Audio;
  video?: Video;
}
interface Lp {
  lp_video: string;
  condensed_bb: string;
  visitor: Visitor;
  home: Home;
}
interface Audio {
  ENG: string;
  SPA: string;
}
interface Video {
  avl: string;
  onAir: string;
  archBB: string;
}
interface Dl {
  link: any[];
}
