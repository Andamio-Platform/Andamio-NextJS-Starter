import { queryTreasuryInfo } from "@andamiojs/core";
import { DataBox } from "../../components/ui/DataBox";
import { andamioConfig } from "../../andamio/config";
import React from "react";
import { cache } from 'react'

export const revalidate = 30 // revalidate the data at most every 30s

const TreasuryInfo = cache(async () => {
  const TreasuryInfo = await queryTreasuryInfo(andamioConfig);
  return (
    <>
      <DataBox value={TreasuryInfo.totalLovelace / 1000000} label="Total ADA" />
      <DataBox value={TreasuryInfo.totalTokens} label="Total tGimbals" />
      <DataBox value={TreasuryInfo.numFundUTxOs} label="Fund UTxOs" />
      <DataBox
        value={TreasuryInfo.numContractTokenUTxOs}
        label="Contract Token UTxOs"
      />
    </>
  );
});

export default TreasuryInfo;
