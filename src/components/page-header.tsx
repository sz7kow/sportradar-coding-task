import Image from 'next/image';
import {useState} from 'react';

import {useColorSchemeContext} from '@/contexts/color-scheme-context';
import IconHamburger from '@/svgs/icon-hamburger.svg';
import IconSun from '@/svgs/icon-sun.svg';
import IconMoon from '@/svgs/icon-moon.svg';

import {Container} from './container';
import {IconButton} from './icon-button';
import {PageNavigation} from './page-navigation';

export const PageHeader: React.FC = () => {
  const {prefersDarkScheme, toggleColorScheme} = useColorSchemeContext();

  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);

  const toggleNavigation = () => setIsNavigationOpen((isOpen) => !isOpen);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">
      <Container className="flex flex-wrap items-center justify-between py-3">
        <div className="flex items-center">
          <IconButton className="mr-3 md:hidden" onClick={toggleNavigation}>
            <span className="sr-only">Open main menu</span>
            <IconHamburger />
          </IconButton>
          <a
            className="custom-ring flex items-center gap-x-3 py-1"
            href="https://github.com/sz7kow/sportradar-coding-task"
          >
            <Image alt="" className="rounded-full" height={32} src="/avatar-sz7kow.png" width={32} />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
              Sportradar Task
            </span>
          </a>
        </div>
        <div className="flex items-center justify-end gap-x-1">
          <PageNavigation isOpen={isNavigationOpen} onClose={() => setIsNavigationOpen(false)} />
          <IconButton onClick={toggleColorScheme}>
            <span className="sr-only">Toggle color scheme</span>
            {prefersDarkScheme ? <IconSun /> : <IconMoon />}
          </IconButton>
        </div>
      </Container>
    </header>
  );
};
