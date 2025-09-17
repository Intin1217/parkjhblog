import Section from '@/components/ui/Section';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PostCard from '@/features/PostCard';

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
];

export default function LatestProjects() {
  return (
    <Section className="gap-6 h-auto mt-10">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl">주요 프로젝트</h1>
        <Link href="/" className="flex gap-2">
          모든 프로젝트 보기 <ArrowRight />
        </Link>
      </div>
      <div>
        <ul className="flex gap-4">
          {mockData.map((item) => (
            <li key={item.id} className="flex justify-center w-full">
              <PostCard data={item} project={true} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
