import { Suspense } from "react";
import Loading from "../../../Loading";
import { andamioConfig } from "../../../../andamio/config";
import EscrowInfo from "../../EscrowInfo";
import { cache } from "react";

export const revalidate = 30; // revalidate the data at most every 30s

export default cache(async function EscrowStat({ params }: { params: { contractToken: string } }) {
  const EscrowHero = await EscrowInfo(params.contractToken);
  return (
    <div className="flex items-center w-full mx-auto">
      <div className="font-extrabold text-4xl mb-8">
        {andamioConfig.config.escrows
          .find((escrow) => escrow.contractTokenName === params.contractToken)
          ?.name.toUpperCase()}
      </div>
      <div className="mx-auto">
        <Suspense fallback={<Loading />}>{EscrowHero}</Suspense>
      </div>
    </div>
  );
});
