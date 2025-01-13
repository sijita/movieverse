'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from '@nextui-org/react';
import { IconMovie, IconUser } from '@tabler/icons-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import SearchBtn from '@/modules/core/components/search-btn';

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Películas',
      href: '/movies',
    },
    {
      label: 'Series',
      href: '/series',
    },
  ];

  return (
    <Navbar
      className="p-3 bg-black flex"
      classNames={{
        menu: 'flex flex-col items-center justify-center top-0 bg-black',
        wrapper: 'max-w-full',
      }}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
        />
        <NavbarBrand className="grow-0">
          <Button
            className="font-bold text-inherit text-2xl transform -rotate-2 hover:rotate-0 bg-primary p-2 rounded-sm text-black"
            href="/"
            as={Link}
            startContent={
              <IconMovie
                className="flex-shrink-0 transform rotate-6"
                size={25}
              />
            }
          >
            MovieVerse
          </Button>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="flex items-center gap-5" justify="center">
        {navItems.map((item, i) => (
          <Link
            key={i}
            className={`${
              pathname === item.href &&
              'font-bold bg-white text-black transform rotate-2'
            } font-bold hover:bg-white hover:text-black transition-colors p-2 transform hover:rotate-2 rounded-sm`}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarMenuItem>
          <SearchBtn />
        </NavbarMenuItem>
        <NavbarItem>
          <Button
            color="primary"
            className="text-black bg-primary rounded-sm font-bold transform hover:rotate-2 hover:scale-105 transition-transform"
            onPress={() => {}}
            endContent={<IconUser stroke={2.5} size={17} />}
          >
            Iniciar sesión
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <SearchBtn />
        </NavbarMenuItem>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`${
                pathname.includes(item.href)
                  ? 'text-primary font-semibold'
                  : 'text-white'
              } text-lg`}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
