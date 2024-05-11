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
          Where I studied.
        </Heading>
        <Text variant="description">
          I studied Mathematics at Columbia and fell in love with programming when I was 
          taking online courses during covid
          <br />
        </Text>
      </Stack>
    </>
  )
}

export default memo(EducationSection)
