import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import img from '@/assets/tempimg.svg';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PostCardType } from '@/type/PostCard/PostCardType';
import { Badge } from '@/components/ui/badge';

//TODO 임시 타입

export default function PostCard({
  data,
  project = false,
}: {
  data: PostCardType;
  project?: boolean;
}) {
  if (!data) return null;

  const { id, tag, title, description } = data;

  return (
    <Card
      className={`${project ? 'w-full' : 'w-md'} flex flex-col h-96 p-0 justify-between hover:shadow-lg dark:bg-dark`}
    >
      <CardHeader className="p-0">
        <figure className="h-48">
          <Image
            src={img}
            alt={title}
            className="w-full h-full object-cover rounded-t-xl"
          />
        </figure>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div>
          <ul className="flex gap-2">
            {tag &&
              tag.map((item, index) => (
                <li key={`${id - index}`}>
                  <Badge
                    variant="secondary"
                    className="bg-primary text-white dark:bg-dark-point"
                  >
                    {item}
                  </Badge>
                </li>
              ))}
          </ul>
        </div>
        <CardTitle className="text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-3 mt-2">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="mt-auto mb-4">
        <Link href="/" className="flex gap-2">
          자세히 보기 <ArrowRight />
        </Link>
      </CardFooter>
    </Card>
  );
}
