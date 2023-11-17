'use client'

import { redirect, usePathname } from "next/navigation";

export default function CourseManagementLayout({children} : {children: React.ReactNode}) {
  const path = usePathname()

  if (!process.env.NEXT_PUBLIC_EXPERIMENTAL_FEATURES?.split(',').includes('cm') && path !== "/course-management/roles/learner/dashboard") {
    redirect('/404')
  } 

  return (<>{children}</>);

}