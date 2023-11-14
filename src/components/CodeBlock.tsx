import * as React from 'react';
import { Code } from 'bright';

export async function CodeBlock({
  children,
  language,
}: {
  children: React.ReactNode;
  language: string;
}) {
  Code.extensions = [
    // fileIcons,
  ];

  const asyncComponent: JSX.Element = await Code({
    lang: language,
    lineNumbers: true,
    title: language,
    children: children?.toString().trim(),
  });

  return (
    <>
      <React.Suspense>{asyncComponent}</React.Suspense>
    </>
  );
}

export const fence = {
  render: 'CodeBlock',
  attributes: {
    content: { type: String },
    language: {
      type: String,
    },
  },
};
