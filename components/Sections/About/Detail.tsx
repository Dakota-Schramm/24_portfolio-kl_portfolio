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
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiDocker,
  SiNodedotjs,
  SiNextdotjs,
  SiRubyonrails,
  SiTailwindcss,
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'green.300')
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2022

  return (
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
        What i do.
      </Heading>
      <Text variant="description">
        In my {professionalYears} years of working as a <b>Software Engineer</b>,
        my curiosity has led me to{' '}
        <Tooltip
          label="Ha!. Or more accurately TECH DEBT"
          aria-label="Tech Debt?"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b>wear many hats</b>
          </Text>
        </Tooltip>{' '}
        working on <b>frontend bits</b> like design systems and animation,{" "}
        <b>backend bits</b> like databases,{" "}
        <b>devops bits</b> like Github Actions,{" "}
        and <b>testing</b>.
        <br />
        I am deeply passionate about developer experience topics such as
        <b>code formatting and styling</b>, <b></b>
        <br /> <br />
        Here are some of the specific technologies I've worked with:{' '}
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTailwindcss} color={emphasis} fontSize="2em" />
            TailwindCSS
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiRubyonrails} color={emphasis} fontSize="2em" />
            Ruby on Rails
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiDocker} color={emphasis} fontSize="2em" />
            Docker
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full toolkit <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
