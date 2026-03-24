// BIO imports
import { uzuiChibiFace } from '../assets';

// Tech-Stack imports
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiMaterializecss } from 'react-icons/di';
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaVuejs,
} from 'react-icons/fa';
import { TbBrandCSharp, TbBrandLinqpad, TbBrandTailwind } from 'react-icons/tb';
import { SiDotnet, SiJavascript } from 'react-icons/si';

export const BIO_CONTENT = {
  avatar: uzuiChibiFace,
  name: 'Slyckster',
  aka: 'Zazel',
  location: 'Tarlac, Philippines',
  jobTitle: 'Full-Stack Developer',
  paragraphs: [
    <>
      Hi, I'm <strong>Ronald</strong> — a web developer based in Tarlac,
      Philippines. I started coding in 2018 and have been continuously learning
      and improving my skills ever since.
    </>,
    // <>
    //   When Im not building web applications, I unwind with games like League of
    //   Legends, Mobile Legends, and Roblox, and enjoy music—especially
    //   piano—playing through in-game instruments in Sky: Children of the Light
    //   and Heartopia.
    // </>,
  ],
  quote: {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: 'Cory House',
  },
};

export const TECH_STACK = {
  core: [
    { name: 'React', Icon: FaReact, colorClass: 'reactColor' },
    { name: 'C Sharp', Icon: TbBrandCSharp, colorClass: 'csharpColor' },
    { name: 'HTML', Icon: FaHtml5, colorClass: 'htmlColor' },
    { name: 'CSS', Icon: FaCss3Alt, colorClass: 'cssColor' },
    { name: 'JavaScript', Icon: SiJavascript, colorClass: 'javascriptColor' },
  ],
  additional: [
    { name: 'Dotnet', Icon: SiDotnet, colorClass: 'dotnetColor' },
    { name: 'Vue', Icon: FaVuejs, colorClass: 'vueColor' },
    { name: 'Angular', Icon: FaAngular, colorClass: 'angularColor' },
    {
      name: 'Postgres SQL',
      Icon: BiLogoPostgresql,
      colorClass: 'postgresqlColor',
    },
    { name: 'Linq', Icon: TbBrandLinqpad, colorClass: 'linqColor' },
    { name: 'Bootstrap CSS', Icon: FaBootstrap, colorClass: 'bootstrapColor' },
    {
      name: 'Tailwind CSS',
      Icon: TbBrandTailwind,
      colorClass: 'tailwindColor',
    },
    {
      name: 'Materialize CSS',
      Icon: DiMaterializecss,
      colorClass: 'materializeColor',
    },
  ],
};
