import { Link } from '@chakra-ui/react'

export type Company = '410Labs' 

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  "410Labs": {
    name: '410 Labs',
    // longName: 'Deloitte Consulthing Phils. Delivery Center',
    // subDetail: 'Consulthing Phils. Delivery Center',
    url: 'https://410labs.com/',
    position: 'Software Engineer',
    duration: 'Sep 2021 - Present',
    logo: {
      light: '/worked_at_logos/410labs/410labs_dark.svg',
      dark: '/worked_at_logos/410labs/410labs.png',
    },
    roles: [
      <>
       Contributed to the design and development of two prototypes for Mailstrom and
       Chuck.
       Implementation of Payments API (Stripe), Auth (Passwordless)
      </>,
      <>
        Worked on frontend prototype for Mailstrom using Nextjs and Tailwind.
      </>,
      <>
        Involved in every day maintenance of Mailstrom and Chuck, using CI/CD 
        (Github Action, CircleCI, ArgoCD, Airbrake, Dependabot)
        Demoing of material from staging
      </>,

    ],
  },
}

export const ExperiencesList = [
  Experiences["410Labs"],
]
