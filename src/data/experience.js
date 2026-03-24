import {
  enchantedPieceWikiPreview1,
  enchantedPieceWikiPreview2,
  enchantedPieceWikiPreview3,
  op2misePreview1,
} from '../assets';

export const EXPERIENCE_DATA = {
  professional: [
    {
      id: 'prof-1',
      company: 'Op2mise',
      duration: '2022 - present',
      role: 'Full-Stack Developer',
      description:
        "I began my career at Op2mise as a Front End Developer, working on projects like Encore Monitoring, B2BME, TV Scheduling, and Media Planning. Over time, I've grown into a Full Stack Developer while also improving my communication and teamwork skills.",
      projects: [{ id: 'p1', title: 'Op2mise', image: op2misePreview1 }],
      url: 'https://op2mise.ai/',
    },
    // Add more professional jobs here
  ],
  personal: [
    {
      id: 'pers-1',
      company: 'Enchanted Piece Wiki',
      duration: '2025',
      role: 'Creator',
      description: `I created a wiki for a Enchanted Piece (originally known as Enchanted) on Roblox. Although it wasn't recognized by the game's owners, it evolved into an unofficial wiki that many players relied on as a source of information.`,
      projects: [
        { id: 'pp1', title: 'Landing Page', image: enchantedPieceWikiPreview1 },
        {
          id: 'pp2',
          title: 'Data Information',
          image: enchantedPieceWikiPreview2,
        },
        {
          id: 'pp3',
          title: 'Information Overview',
          image: enchantedPieceWikiPreview3,
        },
      ],
      url: 'https://slycksters.github.io/enchanted-wiki',
    },
  ],
};
