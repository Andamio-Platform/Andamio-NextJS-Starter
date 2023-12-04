import { EscrowInfo, queryEscrowsInfo } from "@andamiojs/core";
import { DataBox } from "../../components/ui/DataBox";
import { HeroBasic, HeroGrid, HeroSection } from "../../components/ui/Hero";
import { andamioConfig } from "../../andamio/config";
import Link from "next/link";
import SelectEscrowModal from "../../components/modals/projects/SelectEscrowModal";
import { DataBoxWide } from "../../components/ui/DataBoxWide";

const EscrowInfo = async (contractToken?: string) => {
  let EscrowInfo: EscrowInfo;
  if (contractToken) {
    EscrowInfo = await queryEscrowsInfo(andamioConfig, contractToken);
  } else {
    EscrowInfo = await queryEscrowsInfo(andamioConfig);
  }
  return (
    <div className="card bg-secondary my-5 p-5 grid grid-cols-5 gap-5 content-center border border-primary">
      <div className="col-span-3 prose text-secondary-content my-auto">
        <h2 className="text-3xl pt-5 text-secondary-content">Andamio Escrow</h2>
        <p>Escrow validators are used to lock the commitments made by Contributors.</p>
      </div>
      <div className="col-span-2 grid grid-cols-1 gap-1">
        {contractToken ? null : <DataBoxWide value={andamioConfig.config.escrows.length} label="Escrows" />}
        <DataBoxWide value={EscrowInfo.numLiveCommitments} label="Live Commitments" />
        <DataBoxWide value={EscrowInfo.lovelaceInCommitment / 1000000} label="Total ADA in Commiment" />
        <DataBoxWide value={EscrowInfo.tokensInCommitment} label="Total tGimbals in Commitment" />
      </div>
      <div className="col-span-5 flex flex-row justify-between w-full mx-auto border-t border-primary pt-5">
        <SelectEscrowModal />

        <Link className="btn btn-wide btn-primary" href="/contributor-platform/escrow/commitments">
          Commitment List
        </Link>
      </div>
    </div>
  );
};

export default EscrowInfo;
