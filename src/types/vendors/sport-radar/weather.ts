import {WeatherOverallConditionsEnum} from './weather-overall-conditions-enum';
import {WeatherPitchConditionsEnum} from './weather-pitch-conditions-enum';

export interface Weather {
  overall_conditions?: WeatherOverallConditionsEnum;
  pitch_conditions?: WeatherPitchConditionsEnum;
}
