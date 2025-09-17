import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';

export default function TechCard({
  title,
  icon,
}: {
  title: string;
  icon: ReactNode;
}) {
  return (
    <Card className="w-40 h-36 items-center justify-center dark:bg-transparent hover:shadow-lg">
      <CardHeader className="items-center justify-center">{icon}</CardHeader>
      <CardTitle>{title}</CardTitle>
    </Card>
  );
}
