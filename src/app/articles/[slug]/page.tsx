"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { FaCircle } from "react-icons/fa";
import { data } from "./data";
import { Button } from "../../../components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Article() {
  const router = useRouter();
  return (
    <>
      <div className="h-dvh">
        <div className="mb-8">
          <Button variant={"ghost"} onClick={router.back}>
            <ArrowLeft className="h-6 w-6" />
            Back
          </Button>
        </div>

        <Card
          style={{
            backgroundImage: `url(${data.data.cover})`,
          }}
          className={`bg-cover bg-center h-1/2 flex flex-col justify-end`}
        >
          <div className="flex flex-col justify-between backdrop-blur h-2/5 p-2 sm:p-4">
            <CardHeader className="p-0">
              <div className="flex gap-3">
                {data.data.categories.map((category) => (
                  <span
                    key={category}
                    className="text-violet-600 text-sm bg-white/75 rounded-full px-1 py sm:px-2 sm:py-1"
                  >
                    <FaCircle className="h-4 w-4 inline-block mr-2" />
                    {category}
                  </span>
                ))}
              </div>
            </CardHeader>
            <CardTitle className="flex-1 text-xl sm:text-3xl">
              {data.data.title}
            </CardTitle>
            <CardFooter className="p-0 flex-1">
              <div>
                <span className="text-white">{data.data.publishedAt}</span>
              </div>
            </CardFooter>
          </div>
        </Card>

        <article className="prose prose-lg sm:prose-xl max-w-none py-6 space-y-6">
          {data.data.description.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </div>
    </>
  );
}
