import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import exampleImage from "../../public/assets/images/Black Laptop Computer Photo.jpg";
import { cn } from "../lib/utils";
import { ArrowUpRight } from "lucide-react";

export function ArticleCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <Card className={cn("hover:bg-white/5", className)} {...props}>
        <CardHeader className="p-0">
          <Image
            width={300}
            src={exampleImage}
            alt={`Card Image`}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardContent className="p-4 flex flex-col gap-4">
          <div className="flex justify-between">
            <CardTitle>UX review presentations</CardTitle>
            <ArrowUpRight />
          </div>
          <CardDescription className={`line-clamp-3 text-xs`}>
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </CardDescription>
          <CardFooter className="p-0">
            <p>Article Footer</p>
          </CardFooter>
        </CardContent>
      </Card>
    </>
  );
}
