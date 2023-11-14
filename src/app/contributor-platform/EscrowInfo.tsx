import { EscrowInfo, queryEscrowsInfo } from "@andamiojs/core";
import { DataBox } from "../../components/ui/DataBox";
import { HeroBasic, HeroGrid, HeroSection } from "../../components/ui/Hero";
import { andamioConfig } from "../../andamio/config";
import Link from "next/link";
import { cache } from 'react'

export const revalidate = 30 // revalidate the data at most every 30s

const EscrowInfo = cache(async (contractToken?: string) => {
  let EscrowInfo: EscrowInfo;
  if (contractToken) {
    EscrowInfo = await queryEscrowsInfo(andamioConfig, contractToken);
  } else {
    EscrowInfo = await queryEscrowsInfo(andamioConfig);
  }
  return (
    <>
      {contractToken? null: <DataBox value={andamioConfig.escrows.length} label="Escrows" />}
      <DataBox value={EscrowInfo.numLiveCommitments} label="Live Commitments" />
      <DataBox
        value={EscrowInfo.lovelaceInCommitment / 1000000}
        label="Total ADA in Commiment"
      />
      <DataBox
        value={EscrowInfo.tokensInCommitment}
        label="Total tGimbals in Commitment"
      />
    </>
  );
});

export default EscrowInfo;
