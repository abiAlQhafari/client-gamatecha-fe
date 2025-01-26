import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import exampleImage from "../../public/assets/images/Silver iMac iPhone Photo.jpg";
import { cn } from "../lib/utils";
import { ArrowUpRight } from "lucide-react";
import { ArticleStatus } from "../enums/article-status.enum";

interface ArticleProps {
  className?: string;
  title?: string;
  slug?: string;
  description?: string;
  imageUrl?: string;
  author?: {
    name?: string;
    avatar?: string;
  };
  status?: ArticleStatus;
  readTime?: string;
}

export function ArticleCard({
  className,
  title,
  description,
  imageUrl,
  author,
  readTime,
  status,
  ...props
}: ArticleProps) {
  return (
    <>
      <Card className={cn("hover:bg-white/5 border-0", className)} {...props}>
        <CardHeader className="p-0">
          <Image
            width={300}
            height={200}
            src={imageUrl || exampleImage}
            alt={`Card Image`}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardContent className="p-4 flex flex-col gap-4">
          <div className="flex justify-between">
            <CardTitle>{title || ""}</CardTitle>
            <ArrowUpRight />
          </div>
          <CardDescription className={`line-clamp-3 text-xs`}>
            {description || ""}
          </CardDescription>
          <CardFooter className="p-0">
            <p>Article Footer</p>
          </CardFooter>
        </CardContent>
      </Card>
    </>
  );
}
