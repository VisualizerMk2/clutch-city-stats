import {
  jamesHardenStats,
  ericGordonStats,
  clintCapelaStats,
  chrisPaulStats,
  neneStats,
  austinRiversStats,
  imanShumpertStats,
  kennethFariedStats,
  pjTuckerStats,
  geraldGreenStats
} from '../rocketsData';

const mapStats = (combinedStatsArray, stat) => {
  let singleStatArray = [];
  switch (stat) {
    case 'ppg':
      singleStatArray = combinedStatsArray.map((season) => ({
        season: season.seasonYear,
        stat: parseInt(season.teams[0].ppg)
      }));
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'rpg':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseFloat(season.teams[0].rpg)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'apg':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseFloat(season.teams[0].apg)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'mpg':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseFloat(season.teams[0].mpg)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'topg':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseFloat(season.teams[0].topg)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'spg':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseFloat(season.teams[0].spg)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'bpg':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseFloat(season.teams[0].bpg)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'tpp':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseFloat(season.teams[0].tpp)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'ftp':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseFloat(season.teams[0].ftp)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'fgp':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseFloat(season.teams[0].fgp)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'assists':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].assists)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'blocks':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].blocks)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'steals':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].steals)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'turnovers':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].turnovers)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'offReb':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].offReb)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'defReb':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].defReb)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'totReb':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].totReb)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'fgm':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].fgm)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'fga':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].fga)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'tpm':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].tpm)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'tpa':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].tpa)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'ftm':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].ftm)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'fta':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].fta)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'pFouls':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].pFouls)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'points':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].points)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'gamesPlayed':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].gamesPlayed)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'gamesStarted':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].gamesStarted)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'plusMinus':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].plusMinus)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    case 'min':
      singleStatArray = combinedStatsArray.map((season) => {
        return {
          season: season.seasonYear,
          stat: parseInt(season.teams[0].min)
        };
      });
      singleStatArray.sort((a, b) => a.season - b.season);
      return singleStatArray;
    default:
      break;
  }
};

export const compileStats = (player = 'harden', statType = 'ppg') => {
  let regularSeasonStats;
  switch (player) {
    case 'harden':
      regularSeasonStats =
        jamesHardenStats.league.standard.stats.regularSeason.season;
      break;
    case 'paul':
      regularSeasonStats =
        chrisPaulStats.league.standard.stats.regularSeason.season;
      break;
    case 'capela':
      regularSeasonStats =
        clintCapelaStats.league.standard.stats.regularSeason.season;
      break;
    case 'gordon':
      regularSeasonStats =
        ericGordonStats.league.standard.stats.regularSeason.season;
      break;
    case 'tucker':
      regularSeasonStats =
        pjTuckerStats.league.standard.stats.regularSeason.season;
      break;
    case 'rivers':
      regularSeasonStats =
        austinRiversStats.league.standard.stats.regularSeason.season;
      break;
    case 'nene':
      regularSeasonStats = neneStats.league.standard.stats.regularSeason.season;
      break;
    case 'shumpert':
      regularSeasonStats =
        imanShumpertStats.league.standard.stats.regularSeason.season;
      break;
    case 'green':
      regularSeasonStats =
        geraldGreenStats.league.standard.stats.regularSeason.season;
      break;
    case 'faried':
      regularSeasonStats =
        kennethFariedStats.league.standard.stats.regularSeason.season;
      break;
    default:
      break;
  }

  let data = [];

  switch (statType) {
    case 'ppg':
      data = mapStats(regularSeasonStats, 'ppg');
      return data;
    case 'rpg':
      data = mapStats(regularSeasonStats, 'rpg');
      return data;
    case 'apg':
      data = mapStats(regularSeasonStats, 'apg');
      return data;
    case 'mpg':
      data = mapStats(regularSeasonStats, 'mpg');
      return data;
    case 'topg':
      data = mapStats(regularSeasonStats, 'topg');
      return data;
    case 'spg':
      data = mapStats(regularSeasonStats, 'spg');
      return data;
    case 'bpg':
      data = mapStats(regularSeasonStats, 'bpg');
      return data;
    case 'tpp':
      data = mapStats(regularSeasonStats, 'tpp');
      return data;
    case 'ftp':
      data = mapStats(regularSeasonStats, 'ftp');
      return data;
    case 'fgp':
      data = mapStats(regularSeasonStats, 'fgp');
      return data;
    case 'assists':
      data = mapStats(regularSeasonStats, 'assists');
      return data;
    case 'blocks':
      data = mapStats(regularSeasonStats, 'blocks');
      return data;
    case 'steals':
      data = mapStats(regularSeasonStats, 'steals');
      return data;
    case 'turnovers':
      data = mapStats(regularSeasonStats, 'turnovers');
      return data;
    case 'offReb':
      data = mapStats(regularSeasonStats, 'offReb');
      return data;
    case 'defReb':
      data = mapStats(regularSeasonStats, 'defReb');
      return data;
    case 'totReb':
      data = mapStats(regularSeasonStats, 'totReb');
      return data;
    case 'fgm':
      data = mapStats(regularSeasonStats, 'fgm');
      return data;
    case 'fga':
      data = mapStats(regularSeasonStats, 'fga');
      return data;
    case 'tpm':
      data = mapStats(regularSeasonStats, 'tpm');
      return data;
    case 'tpa':
      data = mapStats(regularSeasonStats, 'tpa');
      return data;
    case 'ftm':
      data = mapStats(regularSeasonStats, 'ftm');
      return data;
    case 'fta':
      data = mapStats(regularSeasonStats, 'fta');
      return data;
    case 'pFouls':
      data = mapStats(regularSeasonStats, 'pFouls');
      return data;
    case 'points':
      data = mapStats(regularSeasonStats, 'points');
      return data;
    case 'gamesPlayed':
      data = mapStats(regularSeasonStats, 'gamesPlayed');
      return data;
    case 'gamesStarted':
      data = mapStats(regularSeasonStats, 'gamesStarted');
      return data;
    case 'plusMinus':
      data = mapStats(regularSeasonStats, 'plusMinus');
      return data;
    case 'min':
      data = mapStats(regularSeasonStats, 'min');
      return data;
    default:
      break;
  }
};
