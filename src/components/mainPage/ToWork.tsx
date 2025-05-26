import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';

export default function ToWork() {
  return (
    <section className="w-full h-56 mt-20 py-10 flex gap-10 flex-col items-center justify-center bg-primary dark:bg-dark-point">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl text-white">함께 일해보세요</h1>
        <p className="text-md text-dark-300">
          새로운 프로젝트나 협업 기회에 관심이 있으시다면 언제든지 연락주세요.
        </p>
      </div>
      <div className="flex gap-4">
        <Button>
          <Mail className="mr-2 h-4 w-4" /> 이메일 보내기
        </Button>
        <Button>
          <SiGithub size={24} color="#181717" /> GitHub
        </Button>
      </div>
    </section>
  );
}
