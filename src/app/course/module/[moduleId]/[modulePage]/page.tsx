import { Props, getFrontmatter } from './common';
import { Metadata } from 'next';
import { getPageContent } from '../../../../../lib/course';
import { TransformedPageContent } from './transformedPageContent';

export async function generateMetadata({
  params,
}: {
  params: Props;
}): Promise<Metadata> {
  const frontmatter = getFrontmatter(params);

  if (frontmatter) {
    return {
      title: frontmatter.title,
      description: frontmatter.type,
    };
  } else {
    return {
      title: 'Module Page',
    };
  }
}

export default function Page({ params }: { params: Props }) {
  const content = getPageContent(params.moduleId, params.modulePage);

  return <div>{<TransformedPageContent content={content} />}</div>;
}
