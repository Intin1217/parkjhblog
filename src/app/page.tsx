import Introduction from '@/components/mainPage/Introduction';
import LatestPosts from '@/components/mainPage/LatestPosts';
import LatestProjects from '@/components/mainPage/LatestProjects';
import ToWork from '@/components/mainPage/ToWork';
import TechStack from '@/components/mainPage/TechStack';

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
