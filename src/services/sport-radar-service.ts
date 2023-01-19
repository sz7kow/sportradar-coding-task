import {SeasonSchedule} from '@/types/vendors/sport-radar/season-schedule';

const API_KEY = process.env.SPORT_RADAR_API_KEY;

export const getSeasonSchedule = async (seasonId: string): Promise<SeasonSchedule[]> => {
  const scheduleUrl = `https://api.sportradar.us/soccer/trial/v4/en/seasons/${seasonId}/schedules.json?api_key=${API_KEY}`;
  const response = await fetch(scheduleUrl);
  const body = await response.json();

  return body.schedules;
};
