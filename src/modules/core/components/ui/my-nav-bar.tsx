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
import { IconHeart, IconMovie } from '@tabler/icons-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import SearchBtn from '@/modules/core/components/search-btn';
import AuthModal from './auth-modal';
import type { User } from '@supabase/supabase-js';
import SessionButton from './session-button';

export default function MyNavbar({ user }: { user: User | null }) {
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
      <NavbarContent
        className="flex items-center gap-5 max-lg:hidden"
        justify="center"
      >
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
        {user && (
          <NavbarMenuItem>
            <Button
              href="/favorites"
              as={Link}
              isIconOnly
              className="bg-danger rounded-sm"
            >
              <IconHeart className="fill-white stroke-white" size={25} />
            </Button>
          </NavbarMenuItem>
        )}
        <NavbarMenuItem>
          <SearchBtn />
        </NavbarMenuItem>
        <NavbarItem>
          {user ? <SessionButton email={user?.email} /> : <AuthModal />}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="gap-5 z-[90]">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="h-10 w-10"
        />
        <NavbarMenuItem>
          <SearchBtn />
        </NavbarMenuItem>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`${
                pathname === item.href &&
                'font-bold bg-white text-black transform rotate-2'
              } font-bold hover:bg-white hover:text-black transition-colors p-2 transform hover:rotate-2 rounded-sm`}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="flex items-center gap-2 flex-wrap sm:hidden">
          {user && (
            <NavbarMenuItem>
              <Button
                href="/favorites"
                as={Link}
                isIconOnly
                className="bg-danger rounded-sm"
              >
                <IconHeart className="fill-white stroke-white" size={25} />
              </Button>
            </NavbarMenuItem>
          )}
          {user ? <SessionButton email={user?.email} /> : <AuthModal />}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
