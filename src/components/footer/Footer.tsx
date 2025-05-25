import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';

export default function Footer() {
  return (
    <footer className="h-48 mt-20 p-10 flex gap-10 flex-col items-center bg-dark-point">
      <h1 className="text-2xl">
        새로운 프로젝트나 협업 기회에 관심이 있으시다면 언제든지 연락주세요.
      </h1>
      <div>
        <Button>
          <Mail className="mr-2 h-4 w-4" /> 이메일 보내기
        </Button>
        <Button>
          <SiGithub size={24} color="#181717" /> GitHub
        </Button>
      </div>
    </footer>
  );
}
