/* created using example data and https://transform.now.sh/json-to-ts-interface/ */
export type GamesResponse = GameData[];
export interface GameData {
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
  buzzerBeater: string;
  ticket: Ticket;
  period_time: Period_time;
  lp: Lp;
  dl: Dl;
  broadcasters: Broadcasters;
  visitor: Visitor;
  home: Home;
}
interface Ticket {
  ticket_link: string;
}
interface Period_time {
  period_value: string;
  period_status: string;
  game_status: string;
  game_clock: string;
  total_periods: string;
  period_name: string;
}
interface Lp {
  lp_video: string;
  condensed_bb: string;
  visitor: Visitor;
  home: Home;
}
interface Visitor {
  audio?: Audio;
  video?: Video;
  id?: string;
  team_key?: string;
  city?: string;
  abbreviation?: string;
  nickname?: string;
  url_name?: string;
  team_code?: string;
  score?: string;
  linescores?: Linescores;
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
interface Home {
  audio?: Audio;
  video?: Video;
  id?: string;
  team_key?: string;
  city?: string;
  abbreviation?: string;
  nickname?: string;
  url_name?: string;
  team_code?: string;
  score?: string;
  linescores?: Linescores;
}
interface Dl {
  link: LinkItem[];
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
interface Linescores {
  period: PeriodItem[];
}
interface PeriodItem {
  period_value: string;
  period_name: string;
  score: string;
}
interface LinkItem {
  name: string;
  long_nm: string;
  code: string;
  url: string;
  mobile_url: string;
  home_visitor: string;
}
