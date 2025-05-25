import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PostCard from '@/components/card/PostCard';
import { PostCardType } from '@/type/PostCard/PostCardType';
import Section from '@/components/ui/Section';

const mockData = [
  {
    id: 1,
    tag: ['React', 'Next.js'],
    title: '임시 데이터 1번',
    description: 'Next.js Blog Mock Data',
    created_at: '2019-03-14T00:00:00.000Z',
  },
  {
    id: 2,
    tag: ['React', 'Next.js'],
    title: '임시 데이터 2번',
    description: 'Next.js Blog Mock Data2',
    created_at: '2019-03-17T00:00:00.000Z',
  },
  {
    id: 3,
    tag: ['React', 'Next.js'],
    title: '임시 데이터 3번',
    description: 'Next.js Blog Mock Data3',
    created_at: '2019-03-19T00:00:00.000Z',
  },
] as PostCardType[];

export default function LatestPosts() {
  return (
    <Section className="gap-6 h-auto mt-10">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl">최신 블로그 포스트</h1>
        <Link href="/" className="flex gap-2">
          모든 포스트 보기 <ArrowRight />
        </Link>
      </div>
      <div>
        <ul className="flex flex-col gap-2 lg:flex-row items-center justify-between">
          {mockData.map((item) => (
            <li key={item.id}>
              <PostCard data={item} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
