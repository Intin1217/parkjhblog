import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PostCard from '@/components/card/PostCard';

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
    created_at: '2019-03-14T00:00:00.000Z',
  },
  {
    id: 3,
    tag: ['React', 'Next.js'],
    title: '임시 데이터 3번',
    description: 'Next.js Blog Mock Data3',
    created_at: '2019-03-14T00:00:00.000Z',
  },
];

export default function LatestPosts() {
  return (
    <section className="flex flex-col w-full h-96 mt-10 px-4 lg:px-72 mx-auto">
      <div className="flex items-center justify-between w-full px-10">
        <h1 className="text-2xl">최신 블로그 포스트</h1>
        <Link href="/" className="flex gap-2">
          모든 포스트 보기 <ArrowRight />
        </Link>
      </div>
      <div>
        <PostCard />
      </div>
    </section>
  );
}
