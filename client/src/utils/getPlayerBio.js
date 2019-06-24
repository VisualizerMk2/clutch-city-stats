import {
  hardenBio,
  paulBio,
  tuckerBio,
  gordonBio,
  capelaBio,
  neneBio,
  riversBio,
  shumpertBio,
  greenBio,
  fariedBio
} from '../playerBios';

export const getPlayerBio = (playerName = 'harden') => {
  switch (playerName) {
    case 'harden':
      return hardenBio;
    case 'paul':
      return paulBio;
    case 'gordon':
      return gordonBio;
    case 'capela':
      return capelaBio;
    case 'rivers':
      return riversBio;
    case 'tucker':
      return tuckerBio;
    case 'nene':
      return neneBio;
    case 'green':
      return greenBio;
    case 'shumpert':
      return shumpertBio;
    case 'faried':
      return fariedBio;
    default:
      break;
  }
};
