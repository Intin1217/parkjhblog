import Section from '@/components/ui/Section';
import TechCard from '@/features/TechCard';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
} from '@icons-pack/react-simple-icons';

const techs = [
  {
    title: 'JavaScript',
    icon: <SiJavascript size={35} />,
  },
  {
    title: 'TypeScript',
    icon: <SiTypescript size={35} />,
  },
  {
    title: 'React',
    icon: <SiReact size={35} />,
  },
  {
    title: 'Next.js',
    icon: <SiNextdotjs size={35} />,
  },
  {
    title: 'Tailwind CSS',
    icon: <SiTailwindcss size={35} />,
  },
  {
    title: 'Styled-Components',
    icon: <SiStyledcomponents size={35} />,
  },
];

export default function TechStack() {
  return (
    <Section className="mt-10 gap-6">
      <h1 className="text-center text-2xl">기술 스택</h1>
      <ul className="flex flex-wrap justify-between">
        {techs.map(({ title, icon }, index) => (
          <li key={`${title}-${index}`}>
            <TechCard title={title} icon={icon} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
