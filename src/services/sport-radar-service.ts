import {Season} from '@/types/vendors/sport-radar/season';
import {SeasonSchedule} from '@/types/vendors/sport-radar/season-schedule';
import {sleep} from '@/utils/time';

export class SportRadarService {
  static API_KEY = process.env.SPORT_RADAR_API_KEY;
  static DELAY_BETWEEN_CALLS = 1000;
  static URL_BASE = 'https://api.sportradar.us/soccer/trial/v4/en/';

  cache: Map<string, unknown>;
  queue: Array<string>;
  isLoading: boolean;

  constructor() {
    this.cache = new Map();
    this.queue = [];
    this.isLoading = false;
  }

  async makeRequest<T>(url: string, bodyTransformer: (data: any) => T): Promise<T> {
    if (this.cache.has(url)) {
      return this.cache.get(url) as T;
    }

    this.queue.push(url);

    while (!this.cache.has(url)) {
      if (this.queue[0] === url && !this.isLoading) {
        this.isLoading = true;

        const fullUrl = `${SportRadarService.URL_BASE}${url}?api_key=${SportRadarService.API_KEY}`;
        const response = await fetch(fullUrl);

        if (response.status !== 200) {
          const responseText = await response.text();
          throw new Error(`Resuests failed: Status ${response.status} - ${responseText}`);
        }

        const body = await response.json();

        this.cache.set(url, bodyTransformer(body));
        this.isLoading = false;
        this.queue = this.queue.filter((currentUrl) => currentUrl !== url);
      }

      await sleep(SportRadarService.DELAY_BETWEEN_CALLS);
    }

    return this.cache.get(url) as T;
  }

  async getSeasonSchedule(seasonId: string): Promise<SeasonSchedule[]> {
    return this.makeRequest(`seasons/${seasonId}/schedules.json`, (body) => body.schedules);
  }

  async getCompetitionSeasons(competitionId: string): Promise<Season[]> {
    return this.makeRequest(`competitions/${competitionId}/seasons.json`, (body) => body.seasons);
  }
}

export const sportRadarService = new SportRadarService();
