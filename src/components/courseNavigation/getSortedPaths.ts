import { getModuleOverviewData } from '../../lib/getModuleOverviewData';

export async function getSortedPaths() {
  const moduleOverviewValues = await getModuleOverviewData();

  const sortedPaths: string[] = moduleOverviewValues.modules.flatMap(
    (moduleItem) => [
      // moduleItem.id,
      ...moduleItem.pages.map((page) => moduleItem.id + '/' + page.slug || ''),
    ],
  );

  // Remove empty strings (in case some pages don't have a slug)
  const filteredSortedPaths = sortedPaths.filter((path) => path !== '');

  // Now, filteredSortedPaths contains the desired paths

  return filteredSortedPaths;
}
