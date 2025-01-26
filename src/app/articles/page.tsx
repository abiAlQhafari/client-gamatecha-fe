"use client";

import { Categories } from "@/src/components/categories";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ArticleCard } from "../../components/article-card";
import { PaginationComponent } from "../../components/pagination";
import { Input } from "../../components/ui/input";
import { fetchArticles } from "../../services/articles/fetchArticles";

export default function Article() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(0);
  const [page, setPage] = useState(1);

  const { data, isError, error } = useQuery({
    queryKey: ["articles", { search, category, page }],
    queryFn: () => fetchArticles({ search, categories_id: category, page }),
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
        value={search}
        onChange={(e) => {
          const search = e.target.value;
          setSearch(search);
        }}
      />

      <Categories selected={category} setSelected={setCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-items-center pb-20 gap-4 md:gap-2 font-[family-name:var(--font-geist-sans)]">
        {data?.data?.map((article) => (
          <ArticleCard
            key={article.id}
            slug={article.slug}
            title={`${article?.title?.slice(0, 50)}...`}
            description={`${article?.content?.slice(0, 100)}...`}
            imageUrl={article.mediaUrl}
            author={{ name: "John Doe", avatar: "https://i.pravatar.cc/300" }}
            readTime={"5 min read"}
            status={article.status}
          />
        ))}
      </div>

      <PaginationComponent
        currentPage={data?.meta.page || 1}
        totalPage={data?.meta.totalPage || 1}
        setPage={setPage}
      />
    </>
  );
}
