import { CourseModule, CourseReferenceInfo } from "@andamiojs/core";

export default function getAssignment(courseJSON: CourseModule, onChainModules: CourseReferenceInfo) {
  for (const moduleOnChain of onChainModules.utxos) {
    if (moduleOnChain.data?.moduleId == courseJSON.id) {
      return moduleOnChain.data.assignmentName;
    }
  }

  return "No Assignment Yet";
}
