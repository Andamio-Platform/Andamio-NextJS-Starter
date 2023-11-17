import { redirect } from "next/navigation";

export default function ContributorPlatformLayout({children} : {children: React.ReactNode}) {

  if (!process.env.NEXT_PUBLIC_EXPERIMENTAL_FEATURES?.split(',').includes('pm')) {
    redirect('/404')
  } 

  return (<>{children}</>);

}