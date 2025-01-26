"use client";

import { ArticleCard } from "../../components/article-card";
import { PaginationComponent } from "../../components/pagination";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "../../services/articles/fetchArticles";
import { Article } from "../../types/article";
import Link from "next/link";

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
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-black from-0%  via-gray-900 via-50% to-black to-100% h-screen text-white mb-8">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          Welcome to <span className="text-red-500">Gamatecha</span>
        </p>
        <h1 className="text-5xl font-extrabold text-center leading-snug mt-4">
          Your Gateway to <span className="text-red-500">Tech Insights</span>{" "}
          <br /> & Innovations
        </h1>
        <div className="mt-8">
          <button className="px-8 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all">
            Explore Articles
          </button>
        </div>
      </div>

      <div className="px-12 md:px-24">
        <div className=" items-center justify-items-center pb-20 gap-4 md:gap-2 font-[family-name:var(--font-geist-sans)]">
          <ArticleCard className="grid grid-cols- md:grid-cols-2 h-full w-full" />
        </div>

        <h2 className={`text-3xl font-bold mb-8`}>Latest News</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center pb-20 gap-4 font-[family-name:var(--font-geist-sans)]">
          <ArticleCard className="row-span-2 h-full w-full" />
          <ArticleCard className="row-span-2 h-full w-full" />
          <ArticleCard className="row-span-2 h-full w-full" />
          <ArticleCard className="row-span-2 h-full w-full" />
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
          {isLoading && <span>Loading...</span>}

          {data?.data?.map((article: Partial<Article>) => (
            <Link key={article.id} href={`/articles/${article.slug}`}>
              <ArticleCard
                key={article.id}
                title={`${article?.title?.slice(0, 50)}...`}
                description={`${article?.content?.slice(0, 100)}...`}
                imageUrl={article.mediaUrl}
                author={{
                  name: "John Doe",
                  avatar: "https://i.pravatar.cc/300",
                }}
                readTime={"5 min read"}
                status={article.status}
              />
            </Link>
          ))}
        </div>

        <PaginationComponent />
      </div>
    </>
  );
}
