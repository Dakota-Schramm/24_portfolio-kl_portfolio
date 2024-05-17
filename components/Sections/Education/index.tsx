import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
} from '@chakra-ui/react'

const EducationSection = () => {
  return (
    <>
      <Stack
        width={{ base: '100%', lg: '70%' }}
        spacing={{ base: 6, xl: 8 }}
        as="section"
      >
        <Heading
          as="h4"
          size="2xl"
          letterSpacing={1.8}
          style={{
            fontVariantCaps: 'small-caps',
          }}
        >
          Where i studied.
        </Heading>
        <Text variant="description">
          I started my time at Columbia as someone who was deeply interested in
          science, taking courses in Biology, Physics and Mathematics.
          <br />
        </Text>
        <Text variant="description">
          I fell in love with programming when I was taking online courses
          during covid and decided to try out some basic online courses with{' '}
          <a href="#">freeCodeCamp</a>.
          <br />
        </Text>
        <br />
        <Text variant="description">
          <br />
        </Text>
      </Stack>
    </>
  )
}

export default memo(EducationSection)
