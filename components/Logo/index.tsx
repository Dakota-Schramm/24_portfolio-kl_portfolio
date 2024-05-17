import { memo, useState } from 'react'
import { useColorMode, Image, useBreakpointValue, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './styles.module.css'
import { ThemeMode, mobileBreakpointsMap } from 'config/theme'
import { simpleOpacity } from 'config/animations'

const Logo = () => {
  const { colorMode } = useColorMode()
  const MotionImage = motion(Image)
  const isMobile = useBreakpointValue(mobileBreakpointsMap)

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
