import DarkModeToggleButton from '@/components/ui/DarkModeToggleButton';
import Link from 'next/link';

export default function Topbar() {
  return (
    <header className="flex items-center justify-between p-4 w-full fixed top-0 border-b border-lightline dark:border-dark-point bg-white dark:bg-dark">
      <div>
        <h1 className="text-lg">PJH</h1>
      </div>
      <nav className="flex items-center gap-2">
        <div>
          <DarkModeToggleButton />
        </div>
        <ul className="flex items-center gap-2">
          <li>
            <Link href="/">홈</Link>
          </li>
          <li>
            <Link href="/">블로그</Link>
          </li>
          <li>
            <Link href="/">프로젝트</Link>
          </li>
          <li>
            <Link href="/">소개</Link>
          </li>
          <li>
            <Link href="/">연락처</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
