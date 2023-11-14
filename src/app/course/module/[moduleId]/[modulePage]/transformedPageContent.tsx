import React from 'react';
import Markdoc from '@markdoc/markdoc';
import { CodeBlock, fence } from '../../../../../components/CodeBlock';

export function TransformedPageContent({ content }: { content: string }) {
  const pageAST = Markdoc.parse(content);
  const transformedContent = Markdoc.transform(pageAST, {
    nodes: {
      fence,
    },
  });
  const children = Markdoc.renderers.react(transformedContent, React, {
    components: {
      CodeBlock,
    },
  });

  return <div>{children}</div>;
}
