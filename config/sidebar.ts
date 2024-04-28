import { IconType } from 'react-icons'
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  // {
  //   label: 'Twitter',
  //   href: 'https://twitter.com/keysl1831',
  //   icon: FaTwitter,
  // },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/william-schramm-633350147/',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/Dakota-Schramm',
    icon: FaGithub,
  },
]
