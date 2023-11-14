import { Suspense } from "react";
import Loading from "../../Loading";
import LearnerCardList from "./LearnerCardLIst";

// Exploring choices for data caching and fetching. It might be this simple:
export const dynamic = "force-dynamic";
// export const revalidate = 30; // revalidate the data at most every 30s

export default async function LearnerListPage() {
  const learnerCardList = await LearnerCardList();

  return (
    <main className="flex flex-col font-semibold min-h-screen">
      <div>
        <Suspense fallback={<Loading />}>{learnerCardList}</Suspense>
      </div>
    </main>
  );
}
