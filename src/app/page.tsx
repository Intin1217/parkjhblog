import Introduction from '@/features/Introduction';
import LatestPosts from '@/features/LatestPosts';
import LatestProjects from '@/features/LatestProjects';
import ToWork from '@/features/ToWork';
import TechStack from '@/features/TechStack';

export default function Home() {
  return (
    <>
      <Introduction />
      <LatestProjects />
      <LatestPosts />
      <TechStack />
      <ToWork />
    </>
  );
}
