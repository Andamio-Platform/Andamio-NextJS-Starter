import { queryTreasuryInfo } from "@andamiojs/core";
import { DataBox } from "../../components/ui/DataBox";
import { andamioConfig } from "../../andamio/config";
import React from "react";
import FundNewUTxOModal from "../../components/modals/projects/FundNewUTxOModal";
import ManageAddProjectModal from "../../components/modals/projects/ManageAddProjectModal";
import Link from "next/link";
import { DataBoxWide } from "../../components/ui/DataBoxWide";

const TreasuryInfo = async () => {
  const TreasuryInfo = await queryTreasuryInfo(andamioConfig);
  return (
    <div className="card bg-secondary my-5 p-5 grid grid-cols-5 gap-5 content-center border border-primary ">
      <div className="col-span-3 prose text-secondary-content my-auto">
        <h2 className="text-3xl pt-5 text-secondary-content">Andamio Treasury</h2>
        <p>
          The Andamio Treasury is a governance tool. Admins and Deciders collaborate to define Projects and specify the evidence required for completion.
        </p>
      </div>
      <div className="col-span-2 grid grid-cols-1 gap-3">
        <DataBoxWide value={TreasuryInfo.totalLovelace / 1000000} label="Total ADA" />
        <DataBoxWide value={TreasuryInfo.totalTokens} label="Total tGimbals" />
        <DataBoxWide value={TreasuryInfo.numFundUTxOs} label="Fund UTxOs" />
        <DataBoxWide value={TreasuryInfo.numContractTokenUTxOs} label="Contract Token UTxOs" />
      </div>
      <div className="col-span-5 flex flex-row justify-between w-full mx-auto border-t border-primary pt-5">
        <Link className="btn btn-wide btn-primary" href="/contributor-platform/approved-projects">
          Approved Projects
        </Link>
        <ManageAddProjectModal />
        <FundNewUTxOModal />
      </div>
    </div>
  );
};

export default TreasuryInfo;
