import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiApollographql,
  SiReact,
  SiDocker,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSocketDotIo,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiRubyonrails,
  SiExpress,
  SiVuedotjs,
  SiXstate,
  SiCircleci,
  SiArgo,
  SiAirbrakedotio,
  SiTailwindcss,
  SiSass,
  SiNextdotjs,
  SiHeadlessui,
  SiShadcnui,
  SiStripe,
  SiRedux,
  SiCypress,
  SiJest,
  SiPlaywright,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSourcetree } from 'react-icons/fa'
import { IoLogoPwa } from 'react-icons/io5'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'testing'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'other'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'Node',
      icon: SiNodedotjs,
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'Ruby on Rails',
      icon: SiRubyonrails
    },
    {
      name: 'Express',
      icon: SiExpress
    }
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
    },
    {
      name: 'Apollo Graphql',
      icon: SiApollographql,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
    {
      name: 'VueJS',
      icon: SiVuedotjs,
    },
    {
      name: 'XState',
      icon: SiXstate,
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss
    },
    {
      name: 'Sass',
      icon: SiSass
    }
  ],
  testing: [
    {
      name: 'Cypress',
      icon: SiCypress
    },
    {
      name: 'Jest',
      icon: SiJest
    },
    {
      name: 'Playwright',
      icon: SiPlaywright
    }
  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'MsSQL',
      icon: SiMicrosoftsqlserver,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'Redis',
      icon: SiRedis,
    },
    {
      name: 'SocketIO',
      icon: SiSocketDotIo,
    },
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'CircleCI',
      icon: SiCircleci,
    },
    {
      name: 'Argo',
      icon: SiArgo,
    },
    {
      name: 'Airbrake',
      icon: SiAirbrakedotio
    }
  ],
  'ui frameworks': [
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'Headless UI',
      icon: SiHeadlessui
    },
    {
      name: 'ShadCN',
      icon: SiShadcnui
    }
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
  ],
  mobile: [
    {
      name: 'Web PWA',
      icon: IoLogoPwa,
    },
  ],
  other: [
    {
      name: 'Stripe',
      icon: SiStripe,
    }
  ]
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
