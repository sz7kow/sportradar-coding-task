import {Competitor} from '@/types/vendors/sport-radar/competitor';
import {CompetitorQualifierEnum} from '@/types/vendors/sport-radar/competitor-qualifier-enum';
import {EventPlayerTypeEnum} from '@/types/vendors/sport-radar/event-player-type-enum';
import {EventTypeEnum} from '@/types/vendors/sport-radar/event-type-enum';
import {GenericEvent} from '@/types/vendors/sport-radar/generic-event';

interface Props {
  awayCompetitor: Competitor;
  event: GenericEvent;
  homeCompetitor: Competitor;
}

const getMessage = (
  event: GenericEvent,
  homeCompetitor: Competitor,
  awayCompetitor: Competitor
): {content?: string; heading: string} | undefined => {
  const {competitor, players = []} = event;

  const competitorName = competitor === CompetitorQualifierEnum.HOME ? homeCompetitor.name : awayCompetitor.name;

  const createGoalMessage = () => {
    const scorer = players.find(({type}) => type === EventPlayerTypeEnum.SCORER);
    const assistant = players.find(({type}) => type === EventPlayerTypeEnum.ASSIST);
    return `Goal! ${homeCompetitor.name} ${event.home_score}, ${awayCompetitor.name} ${event.away_score}.
    ${scorer ? `${scorer.name} (${competitorName}) scores.` : ''}
    ${assistant ? `Assisted by ${assistant.name}` : ''}`;
  };

  const createCardMessage = (cardColor: string): string => {
    const affectedPlayers = players.map(({name}) => `${name} (${competitorName})`);
    const arePlural = affectedPlayers.length > 1;
    return `${affectedPlayers.join(', ')} ${arePlural ? 'are' : 'is'} shown the ${cardColor} card.`;
  };

  const createSubstitutionMessage = (): string => {
    const substitutedIn = players.find(({type}) => type === EventPlayerTypeEnum.SUBSTITUTED);
    const substitutedOut = players.find(({type}) => type === EventPlayerTypeEnum.SUBSTITUTED_OUT);
    return `Substitution, ${competitorName}.
    ${substitutedIn && substitutedOut ? `${substitutedIn.name} replaces ${substitutedOut.name}.` : ''}`;
  };

  switch (event.type) {
    case EventTypeEnum.MATCH_STARTED:
      return {
        content: 'First Half begins.',
        heading: '⏱ Kick Off!',
      };
    case EventTypeEnum.MATCH_ENDED:
      return {
        content: 'Match ends.',
        heading: '⏱ Full-time',
      };
    case EventTypeEnum.BREAK_START:
      return {
        content: 'Half-time.',
        heading: '⏱ Half-time begins.',
      };
    case EventTypeEnum.SCORE_CHANGE:
      return {
        content: createGoalMessage(),
        heading: '⚽ Goal!',
      };
    case EventTypeEnum.YELLOW_CARD:
      return {
        content: createCardMessage('yellow'),
        heading: '🟨 Yellow Card!',
      };

    case EventTypeEnum.RED_CARD:
      return {
        content: createCardMessage('red'),
        heading: '🟥 Red Card!',
      };
    case EventTypeEnum.SUBSTITUTION:
      return {
        content: createSubstitutionMessage(),
        heading: '🔃 Substitution',
      };
    default:
      return undefined;
  }
};

export const EventTimelineItem: React.FC<Props> = ({awayCompetitor, event, homeCompetitor}) => {
  const {match_clock, match_time, stoppage_time_clock} = event;

  const message = getMessage(event, homeCompetitor, awayCompetitor);
  const matchTime = `${match_clock} ${stoppage_time_clock ? `+ ${stoppage_time_clock}` : ''}`;

  if (!message) return null;

  return (
    <li className="mb-3 ml-4">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
      {match_time && (
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{matchTime}</time>
      )}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{message.heading}</h3>
      {message.content && <p className="text-base font-normal text-gray-500 dark:text-gray-400">{message.content}</p>}
    </li>
  );
};
