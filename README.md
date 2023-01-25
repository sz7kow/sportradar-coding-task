# Sportradar Coding Task

This is a solution to the sport radar coding task.

## Table of contents

- [Sportradar Coding Task](#sportradar-coding-task)
  - [Table of contents](#table-of-contents)
  - [Notes](#notes)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Solution](#solution)
    - [Frontend](#frontend-1)
    - [Backend](#backend-1)
  - [Technologies](#technologies)
    - [Built with](#built-with)
    - [Installation](#installation)
      - [Setting up](#setting-up)
      - [Development](#development)
      - [Production](#production)
      - [Additional scripts](#additional-scripts)
  - [Links](#links)

## Notes

### Frontend

- Due to the api calls rate limit the app might lag / crash during development. Restarting and/or removing .next directory should help temporarily. Those problem should not occur while running the production build.
- Since Next.js crashed while using ids containing special characters as url parameters, the web part of the solution uses slugs instead. The slugs are created by replacing id's ':' with '-'. Example: sr:season:67233 -> sr-season-67233.

### Backend

- I am not sure what do you mean by 'Create data structure to store unique team names'. I think using native Set data structure is the most suitable approach.
- 'Prepare your method to handle very strange values given ( i.e 1000000 )' - since javascript's native .sort() method is already highly optimized, I did not see a point in creating a custom sorting function.

## Solution

### Frontend

Pages:

- /matches/[sport-event-id-slug] - page with details about a given sport event.
- /results/[season-id-slug] - page with schedule for a given seasons.
- /probable-results - page with results of the backend part of the challenge.

### Backend

Endpoints:

- /api/sport-event-predictions?count=number - returns an array of the most probable results. The count parameter is optional. The default value is 10.
- /api/sport-event-predictions/[competition-id]/competitor-names - returns an array of unique competitors for a given competition.
- /api/sport-event-predictions/competitor-names - returns an array of unique competitors.

## Technologies

### Built with

- react@18.2.0
- next@13.1.2
- typescript@4.9.4
- tailwindcss@3.2.4

### Installation

#### Setting up

- Create .env file in the project's root directory. The app requires a valid sportradar's api key with permissions to access soccer module:

```bash
SPORT_RADAR_API_KEY=PASTE_YOUR_KEY_HERE
```

#### Development

```bash
npm install
npm run prepare
npm run dev
```

#### Production

```bash
npm run install
npm run build
npm run start
```

#### Additional scripts

For code formatting use:

```bash
npm run format
```

For code linting use:

```bash
npm run lint
```

## Links

- Repository URL: [Link](https://github.com/sz7kow/sportradar-coding-task)
- Live Site URL: [Link](https://sport-radar-coding-task.sz7kow.com/)
