'use client';

import { LMSObjectMetadata } from '@andamiojs/core';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Accordion({
  moduleId,
  moduleTitle,
  pageList,
}: {
  moduleId: string;
  moduleTitle: string;
  pageList: LMSObjectMetadata[];
}) {
  const path = usePathname();

  return (
    <Disclosure>
      {({ open }) => (
        <>
          {path && (
            <>
              <Disclosure.Button
                className={`w-full mt-2 px-3 py-2 bg-primary text-primary-content hover:bg-primary-focus ${
                  path.includes(`/course/module/${moduleId}`)
                    ? 'bg-secondary text-secondary-content hover:bg-secondary'
                    : ''
                } ${open ? '' : ''}`}
              >
                <div className={`flex flex-row justify-between align-middle content-center`}>
                  <span className="text-left">
                    <text className="font-extrabold">{moduleId}:</text>{' '}
                    {moduleTitle}
                  </span>

                  <span className={`${open ? 'hidden' : ''}`}>
                    <ChevronDownIcon className="w-3 h-3" />
                  </span>
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm py-2">
                {pageList.map((page: LMSObjectMetadata) => (
                  <Link
                    href={`/course/module/${moduleId}/${page.slug}`}
                    key={`page-link-${page.slug}`}
                  >
                    <div
                      key={page.title}
                      className={`pl-5 pr-2 py-2 text-m font-medium hover:pl-6 ${
                        path.includes(`/course/module/${moduleId}/${page.slug}`)
                          ? 'bg-primary-focus text-primary-content font-bold pointer-events-none'
                          : ''
                      }`}
                    >
                      {page.title}
                    </div>
                  </Link>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </>
      )}
    </Disclosure>
  );
}
