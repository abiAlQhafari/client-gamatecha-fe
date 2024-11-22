import { ArticleCard } from "../components/article-card";
import { PaginationComponent } from "../components/pagination";

export default function Home() {
  return (
    <>
      <h2 className={`text-xl font-bold mb-8`}>Recent blog posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center pb-20 gap-4 md:gap-2 font-[family-name:var(--font-geist-sans)]">
        <ArticleCard className={`row-span-2 h-full`} />

        <ArticleCard className="grid grid-cols-1 md:grid-cols-2 h-full" />
        <ArticleCard className="grid grid-cols-1 md:grid-cols-2 h-full" />
      </div>

      <div className="pb-20">
        <ArticleCard className="grid grid-cols-1 md:grid-cols-2 h-1/2" />
      </div>

      <h2 className={`text-xl font-bold mb-8`}>All Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-items-center pb-20 gap-4 md:gap-2 font-[family-name:var(--font-geist-sans)]">
        <ArticleCard className={`row-span-2 h-full`} />
        <ArticleCard className={`row-span-2 h-full`} />
        <ArticleCard className={`row-span-2 h-full`} />
        <ArticleCard className={`row-span-2 h-full`} />
        <ArticleCard className={`row-span-2 h-full`} />
        <ArticleCard className={`row-span-2 h-full`} />
      </div>

      <PaginationComponent />
    </>
  );
}
