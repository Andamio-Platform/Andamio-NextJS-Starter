import { CourseModule, CourseReferenceInfo, CourseReferenceUTxO } from "@andamiojs/core";

export default function getOnchainCourseModule(
  courseJSON: CourseModule,
  onChainModules: CourseReferenceInfo
): CourseReferenceUTxO | undefined {
  for (const moduleOnChain of onChainModules.utxos) {
    if (moduleOnChain.data?.moduleId == courseJSON.id) {
      return moduleOnChain;
    }
  }

  return undefined;
}
