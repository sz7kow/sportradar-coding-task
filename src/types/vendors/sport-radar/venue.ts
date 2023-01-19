export interface Venue {
  capacity?: number;
  changed?: boolean;
  city_name?: string;
  country_code?: string;
  country_name?: string;
  id: string;
  map_coordinates?: string;
  name: string;
  reduced_capacity?: string;
  reduced_capacity_max?: number;
  timezone?: string;
}
