import { queryCourseReferenceUTxObyModule } from "@andamiojs/core";
import { andamioConfig } from "../../../../../andamio/config";
import CommitToAssignmentModal from "../../../../../components/modals/course/CommitToAssignmentModal";

export default async function AssignmentOnChainInfo(props: { moduleId: string }) {
  try {
    const moduleReferenceUTxO = await queryCourseReferenceUTxObyModule(andamioConfig, props.moduleId);
    return (
      <div className="bg-success p-3">
        <pre>Module Hash:{moduleReferenceUTxO.data && moduleReferenceUTxO.data.moduleHash}</pre>
        <CommitToAssignmentModal selectedModuleUTxO={moduleReferenceUTxO} />
      </div>
    );
  } catch (error) {
    return <div className="bg-info p-3">This Module is not yet on-chain</div>;
  }
}
