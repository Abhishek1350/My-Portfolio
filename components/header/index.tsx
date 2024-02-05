"use client"

import {
  Group,
  Button,
  Divider,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Container,
  useMantineColorScheme
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconSun,
  IconMoon,
} from '@tabler/icons-react';
import classes from './styles.module.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    title: 'About Us',
    link: '/about-us',
  },
  {
    title: 'Careers',
    link: '/careers',
  },
  {
    title: 'Blogs',
    link: '/blogs',
  },
  {
    title: 'Contact Us',
    link: '/contact-us',
  },
]

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const pathname = usePathname();

  const toggleTheme = () => {
    if (colorScheme === 'light') {
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }
    if (drawerOpened) closeDrawer();
  }

  useEffect(() => {
    closeDrawer();
  }, [pathname])

  return (
    <>
      <header className={`${classes.header} animate-from-top`}>
        <Container className={classes.cont} size="lg">
          <Group justify="space-between" h="100%">
            <Link href="/" className={classes.image}>
              ImAbhishek
            </Link>

            <Group h="100%" gap={0} visibleFrom="sm">
              {
                navLinks.map(({ title, link }) => (
                  <Link href={link} className={classes.link} key={title}>
                    {title}
                  </Link>
                ))
              }

              {
                colorScheme === 'light' ?
                  <Button onClick={() => toggleTheme()} variant='transparent'>
                    <IconMoon style={{ width: rem(24), height: rem(24) }} />
                  </Button>
                  :
                  <Button onClick={() => toggleTheme()} variant='transparent'>
                    <IconSun style={{ width: rem(24), height: rem(24) }} />
                  </Button>
              }
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="sm"
        title="FabWebStudio"
        hiddenFrom="sm"
        zIndex={1000000}
        closeOnClickOutside
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          {
            navLinks.map(({ title, link }) => (
              <Link href={link} className={classes.link} key={title}>
                {title}
              </Link>
            ))
          }

          <Group pb="xl" px="md">
            {
              colorScheme === 'light' ?
                <Button onClick={() => toggleTheme()}>
                  Dark Mode
                </Button>
                :
                <Button onClick={() => toggleTheme()}>
                  Light Mode
                </Button>
            }
          </Group>

        </ScrollArea>
      </Drawer>
    </>
  );
}