"use client";

import { ArticleCard } from "../../components/article-card";
import { PaginationComponent } from "../../components/pagination";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "../../services/articles/fetchArticles";
import { Article } from "../../types/article";

export default function Article() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

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
      <Input
        className={`mb-8 bg-white/5 rounded-full`}
        placeholder="Search..."
      />
      <div className="flex flex-row justify-between gap-4 mb-8 overflow-scroll">
        <Button className="rounded-full">Semua</Button>
        <Button
          variant={"ghost"}
          className="rounded-full border border-neutral-200"
        >
          Kategori
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full border border-neutral-200"
        >
          Kategori
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full border border-neutral-200"
        >
          Kategori
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full border border-neutral-200"
        >
          Kategori
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full border border-neutral-200"
        >
          Kategori
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full border border-neutral-200"
        >
          Kategori
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full border border-neutral-200"
        >
          Kategori
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full border border-neutral-200"
        >
          Kategori
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full border border-neutral-200"
        >
          Kategori
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full border border-neutral-200"
        >
          Kategori
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full border border-neutral-200"
        >
          Kategori
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full border border-neutral-200"
        >
          Kategori
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-items-center pb-20 gap-4 md:gap-2 font-[family-name:var(--font-geist-sans)]">
        {data?.map((article: Partial<Article>) => (
          <ArticleCard
            key={article.id}
            title={`${article?.title?.slice(0, 50)}...`}
            description={`${article?.content?.slice(0, 100)}...`}
            imageUrl={article.mediaUrl}
            author={{ name: "John Doe", avatar: "https://i.pravatar.cc/300" }}
            readTime={"5 min read"}
            status={article.status}
          />
        ))}

        {/* <ArticleCard className={`row-span-2 h-full`} />
        <ArticleCard className={`row-span-2 h-full`} />
        <ArticleCard className={`row-span-2 h-full`} />
        <ArticleCard className={`row-span-2 h-full`} />
        <ArticleCard className={`row-span-2 h-full`} />
        <ArticleCard className={`row-span-2 h-full`} />
        <ArticleCard className={`row-span-2 h-full`} />
        <ArticleCard className={`row-span-2 h-full`} />
        <ArticleCard className={`row-span-2 h-full`} /> */}
      </div>

      <PaginationComponent />
    </>
  );
}
