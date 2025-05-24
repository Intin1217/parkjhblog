import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import img from '@/assets/tempimg.svg';
import Image from 'next/image';

export default function PostCard() {
  return (
    <Card className="w-80">
      <CardHeader>
        <Image src={img} alt="postCard" />
      </CardHeader>
      <CardContent>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
        <div>123</div>
      </CardContent>
    </Card>
  );
}
