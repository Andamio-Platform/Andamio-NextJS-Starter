import { LMSObjectMetadata, SLT } from '@andamiojs/core';
import React from 'react';
import { getSLTList } from '../../../../../lib/course';

export default function ModulePageDetails({
  frontmatter,
}: {
  frontmatter: LMSObjectMetadata;
}) {
  const learningTargets = getSLTList({ sltIds: frontmatter.slt });

  return (
    <div className="">
      <div className="bg-primary text-primary-content text-p-4">
        <h2 className="text-lg font-semibold py-2">Title:</h2>
        <p className="py-2">{frontmatter.title}</p>

        <h2 className="text-lg font-semibold py-2">Description:</h2>
        <p className="py-2">{frontmatter.description}</p>

        <h2 className="text-lg font-semibold py-2">Type:</h2>
        <p className="py-2">{frontmatter.type}</p>

        <h2 className="text-lg font-semibold py-2">Author:</h2>
        <p className="py-2">{frontmatter.author}</p>

        <h2 className="text-lg font-semibold py-2">
          Student Learning Targets:
        </h2>
        {learningTargets.map((slt: SLT) => (
          <p className="py-2" key={slt.id}>
            {slt.id}: {slt.slt}
          </p>
        ))}

        <h2 className="text-lg font-semibold py-2">Video:</h2>
        <p className="py-2">{frontmatter.videoURL}</p>

        <h2 className="text-lg font-semibold py-2">Edited:</h2>
        <p className="py-2">{frontmatter.lastEdited}</p>
      </div>
    </div>
  );
}
