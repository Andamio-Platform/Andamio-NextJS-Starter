import { AndamioConfig } from '@andamiojs/core';

// Project Management
import { contributorMinter, contributorReference } from './contributor';
import { escrows } from './escrow';
import { treasury } from './treasury';

// Course Management
import { assignment } from './assignment';
import { courseReference } from './courseReference';
import { learnerReference } from './learnerReference';
import { learnerMintingReference } from './learnerMintingReference';
import { moduleMintingReference } from './moduleMintingReference';

// All Tokens
import tokens from './tokens.json';

export const andamioConfig: AndamioConfig = {
  title: 'Andamio PBL',
  baseAddress: '',
  enterpriseAddress: '',
  rewardAddress: '',
  // at the moment, each contract has a different reference UTxO Address - see individual contract configs
  // referenceScriptAddress: '',
  metadataKey: '',
  network: '0',
  tokens: tokens,
  treasury: treasury,
  escrows: escrows,
  contributorReference: contributorReference,
  contributorMinter: contributorMinter,
  courseReference: courseReference,
  moduleMintingReference: moduleMintingReference,
  learnerMintingReference: learnerMintingReference,
  learnerReference: learnerReference,
  assignment: assignment,
  nftArtwork: {
    learnerNFTURL: "https://www.andamio.io/andamio.png",
  }
};
