import { LMSObjectMetadata } from '@andamiojs/core';
import { Node } from '@markdoc/markdoc';

export const parseMarkdocFrontmatter = (ast: Node) => {
  try {
    return ast.attributes.frontmatter
      ? (JSON.parse(ast.attributes.frontmatter) as LMSObjectMetadata)
      : undefined;
  } catch (error) {
    console.error('Error parsing JSON frontmatter:', error);
    return undefined;
  }
};
