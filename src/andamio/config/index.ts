import { AndamioConfig, CourseManagementConfig, ProjectManagementConfig } from "@andamiojs/core";

// Project Management
import { contributorMinter, contributorReference } from "./contributor";
import { escrows } from "./escrow";
import { treasury } from "./treasury";

// Course Management
import { assignment } from "./assignment";
import { courseReference } from "./courseReference";
import { learnerReference } from "./learnerReference";
import { learnerMintingReference } from "./learnerMintingReference";
import { moduleMintingReference } from "./moduleMintingReference";

// Tokens
import courseManagementTokens from './courseManagementTokens.json'
import projectManagementTokens from './projectManagementTokens.json'

export const andamioConfig: AndamioConfig<CourseManagementConfig & ProjectManagementConfig> = {
  title: "Andamio PBL",
  baseAddress: "",
  enterpriseAddress: "",
  rewardAddress: "",
  // at the moment, each contract has a different reference UTxO Address - see individual contract configs
  // referenceScriptAddress: '',
  metadataKey: "",
  network: "0",
  config: {
    assignment: assignment,
    courseReference: courseReference,
    learnerReference: learnerReference,
    learnerMintingReference: learnerMintingReference,
    moduleMintingReference: moduleMintingReference,
    courseManagementTokens: courseManagementTokens,
    coursemanagementNftArtwork: {
      // move to a file?
      learnerNFTURL: "https://www.andamio.io/andamio.png",
      courseModuleNFTURL: "https://www.andamio.io/andamio.png",
      courseCreatorNFTURL: "https://www.andamio.io/andamio.png",
      courseDeciderNFTURL: "https://www.andamio.io/andamio.png",
    },
    contributorMinter: contributorMinter,
    contributorReference: contributorReference,
    escrows: escrows,
    treasury: treasury,
    projectManagementTokens: projectManagementTokens,
  },
};
