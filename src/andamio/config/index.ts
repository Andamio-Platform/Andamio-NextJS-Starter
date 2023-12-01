import { AndamioConfig, CourseManagementConfig, ProjectManagementConfig } from "@andamiojs/core";

// Project Management
// Not implemented

// Course Management
import assignment from "../cardano/plutus/assignment.json"
import courseReference from "../cardano/plutus/courseReference.json"
import learnerReference from "../cardano/plutus/learnerReference.json"
import learnerMintingReference from "../cardano/plutus/learnerMintingReference.json"
import moduleMintingReference from "../cardano/plutus/moduleMintingReference.json"

// Tokens
import courseManagementTokens from './courseManagementTokens.json'

export const andamioConfig: AndamioConfig<CourseManagementConfig> = {
  title: "Mesh PBL",
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
      learnerNFTURL: "ipfs://bafkreidqvxwum45zykyxnkcngdpasvcjwsawmevurd2yzrlziiaukhjdje",
      courseModuleNFTURL: "https://www.andamio.io/andamio.png",
      courseCreatorNFTURL: "ipfs://bafkreidly4pye2wiklnxohb76bxeewde3xa66mwms5a7saienzzcccx3wi",
      courseDeciderNFTURL: "ipfs://bafkreiasvwd3fcmrqpc5mmjhci2rmjg5hptgs46nf7xmmmhv7oz66xkfmu",
    },
  },
};
