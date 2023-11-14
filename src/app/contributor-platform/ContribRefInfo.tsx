import {
  numCompletedCommitments,
  queryContribRefInfo,
  queryContribRefUTxOs,
} from "@andamiojs/core";
import { DataBox } from "../../components/ui/DataBox";
import { HeroBasic, HeroGrid, HeroSection } from "../../components/ui/Hero";
import Link from "next/link";
import { andamioConfig } from "../../andamio/config";
import { cache } from 'react'

export const revalidate = 30 // revalidate the data at most every 30s

const ContribRefInfo = cache(async () => {
  const ContribRefUTxOs = await queryContribRefInfo(andamioConfig);
  return (
    <>
      <DataBox value={ContribRefUTxOs.utxos.length} label="Contributors" />
      <DataBox
        value={ContribRefUTxOs.numCompletedCommitments}
        label="Completed Commitments"
      />
    </>
  );
});

export default ContribRefInfo;
