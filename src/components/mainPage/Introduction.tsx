import Image from 'next/image';
import img from '@/assets/tempimg.svg';
import Link from 'next/link';

export default function Introduction() {
  return (
    <section className="flex flex-col items-center lg:flex-row w-full lg:px-72 mx-auto px-4 bg-light dark:bg-dark-900">
      <div className="w-1/2 flex flex-col items-start justify-center py-20 px-10 gap-6">
        <h1 className="text-4xl">
          안녕하세요, 프론트엔드 개발자 <br />
          <span className="text-dark-900 dark:text-point">박주호</span>입니다.
        </h1>
        <p className="text-lg">
          프론트엔드 개발자로서 사용자 경험을 향상시키는 웹을 구현하는 것을
          좋아합니다.
        </p>
        <nav className="flex gap-6">
          <Link
            href="/"
            className="py-2 px-2 rounded-sm bg-primary hover:bg-primary/90 text-white dark:bg-point dark:hover:bg-hover-point dark:text-light"
          >
            프로젝트 보기
          </Link>
          <Link
            href="/"
            className="py-2 px-2 rounded-sm bg-white text-black border border-dark-200 hover:bg-dark-200 dark:bg-dark dark:hover:bg-dark-hover dark:border-dark-line dark:text-white"
          >
            블로그 읽기
          </Link>
        </nav>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center py-20 px-10 gap-6">
        <figure className="w-64 h-64 rounded-full border border-gray-200 bg-white p-1 shadow-xl">
          <Image className="rounded-full" src={img} alt="프로필 사진" />
        </figure>
      </div>
    </section>
  );
}
