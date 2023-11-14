import Markdoc from '@markdoc/markdoc';
import { LMSObjectMetadata } from '@andamiojs/core';
import { getPageContent } from '../../../../../lib/course';
import { parseMarkdocFrontmatter } from '../../../../../utils/markdown';

export type Props = {
  moduleId: string;
  modulePage: string;
};

export type TemplateProps = {
  frontmatter: LMSObjectMetadata;
  moduleId: string;
  page: string;
  children: React.ReactNode;
};

export function getFrontmatter(params: Props) {
  const content = getPageContent(params.moduleId, params.modulePage);
  const pageAST = Markdoc.parse(content);
  const frontmatter = parseMarkdocFrontmatter(pageAST);

  return frontmatter;
}