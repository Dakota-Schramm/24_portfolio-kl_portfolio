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
       Contributed to the design and development of a comprehensive .NET payment integration project for a client
       That covered credit card payments and subscription management.
       Introduced Stripe as a new payment provider within the system architecture.
       Participated in triaging, fixing and adding new functionalitiesto multiple Azure powered APIs of the same client.
      </>,
      <>
        Worked as a Sitecore Backend on new{' '}
        <Link
          aria-label="Deloitte Digital AU"
          href="https://www.deloittedigital.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Deloitte Digital AU Site.
        </Link>
      </>,
      <>
        Udergone training for .NET Sitecore 10,
        Sitecore SXA and different topologies it provides.{' '} and Passed {' '}
        <Link
          aria-label="Sitecore 10 .NET Developer Certification"
          href="/certification/Lawingco-Sitecore 10 NET Developer Cert.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Sitecore 10 .NET Developer Certification.
        </Link>
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences["410Labs"],
]
