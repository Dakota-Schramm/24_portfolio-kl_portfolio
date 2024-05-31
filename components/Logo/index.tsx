import { memo } from 'react'
import { useColorMode, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import styles from './styles.module.css'
import { ThemeMode } from 'config/theme'

const Logo = () => {
  const { colorMode } = useColorMode()

  return (
    <AnimatePresence>
      <Link href="/" passHref>
        {colorMode === ThemeMode.Dark ? (
          <Text
            className={`${styles.logo} ${styles["logo--dark"]}`}>WDS
          </Text>
        ) : (
          <Text
            className={styles.logo}>WDS
          </Text>
        )}
      </Link>
    </AnimatePresence>
  )
}

export default memo(Logo)
