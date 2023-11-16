"use client";

import { AssignmentUTxO } from "@andamiojs/core";
import { resolvePaymentKeyHash } from "@meshsdk/core";
import { useAddress } from "@meshsdk/react";
import { useEffect, useState } from "react";
import StudentRemoveAssignmentModal from "../../../components/modals/course/StudentRemoveAssignmentModal";
import StudentUpdateAssignmentModal from "../../../components/modals/course/StudentUpdateAssignmentModal";

export default function LearnerActionButtons(props: { assignment: AssignmentUTxO }) {
  const address = useAddress();

  const [connectedPkh, setConnectedPkh] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (address) {
      const pkh = resolvePaymentKeyHash(address);
      setConnectedPkh(pkh);
    }
  }, [address]);

  return (
    <>
      {connectedPkh == props.assignment.data?.learnerPkh && (
        <div className="flex flex-row gap-3">
          {<StudentUpdateAssignmentModal assignment={props.assignment} />}
          {<StudentRemoveAssignmentModal assignment={props.assignment} />}
        </div>
      )}
    </>
  );
}
