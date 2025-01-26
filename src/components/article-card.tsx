import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import exampleImage from "../../public/assets/images/Black Laptop Computer Photo.jpg";
import { ArticleStatus } from "../enums/article-status.enum";
import { cn } from "../lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
  ...props
}: ArticleProps) {
  return (
    <Link href={`/articles/${props.slug}`}>
      <Card
        className={cn("hover:bg-white/5 hover:cursor-pointer", className)}
        {...props}
      >
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
          <CardDescription
            className={`line-clamp-3 text-justify text-xs`}
            dangerouslySetInnerHTML={{ __html: description || "" }}
          />
          <CardFooter className="p-0">
            <p>Article Footer</p>
          </CardFooter>
        </CardContent>
      </Card>
    </Link>
  );
}
