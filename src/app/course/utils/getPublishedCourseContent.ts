import { CourseModule, ModuleOverview } from "@andamiojs/core";

export default function getPublishedCourseContent(
  courseJSON: CourseModule,
  publishedContent: ModuleOverview[]
): ModuleOverview | undefined {
  for (const published of publishedContent) {
    if (published.id == courseJSON.id) {
      return published;
    }
  }

  return undefined;
}
