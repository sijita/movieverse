'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import { IconMovie, IconSearch, IconUser } from '@tabler/icons-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Peliculas',
      href: '/movies',
    },
    {
      label: 'Series',
      href: '/series',
    },
    {
      label: 'Explorar',
      href: '#',
    },
  ];

  return (
    <Navbar
      className="p-5 bg-transparent absolute flex"
      classNames={{
        menu: 'flex flex-col items-center justify-center top-0 bg-default rounded-b-2xl',
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
        <NavbarBrand className="flex items-center gap-3">
          <IconMovie className="text-primary" />
          <Link className="fontt-bold text-inherit" href="/">
            <p className="font-bold text-inherit text-2xl">MovieVerse</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden lg:flex gap-5 px-10 rounded-full bg-default"
        justify="center"
      >
        {navItems.map((item, i) => (
          <NavbarItem key={i} isActive={item.href === pathname}>
            <Link
              className={`text-lg hover:text-primary ${
                pathname.includes(item.href)
                  ? 'text-primary font-semibold'
                  : 'text-white'
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Button radius="full" isIconOnly>
            <IconSearch className="text-primary" size={20} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="primary"
            className="text-black"
            radius="full"
            onPress={() => {}}
            isIconOnly
          >
            <IconUser size={20} />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Button radius="full" fullWidth>
            <IconSearch size={20} />
          </Button>
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
