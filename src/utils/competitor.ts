import {CompetitorBasic} from '@/types/models/competitor-basic';
import {Competitor} from '@/types/vendors/sport-radar/competitor';
import {CompetitorQualifierEnum} from '@/types/vendors/sport-radar/competitor-qualifier-enum';

export const mapToCompetitorBasic = ({country, id, name, qualifier}: Competitor): CompetitorBasic => ({
  country: country as string,
  id,
  name,
  qualifier: qualifier as CompetitorQualifierEnum,
});
