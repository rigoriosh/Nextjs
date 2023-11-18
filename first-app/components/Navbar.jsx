// import Link from 'next/link'
import React from 'react'
import estilos from "./Navbar.module.css";
import { ActivLink } from './ActivLink';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={estilos['menu-container']}>
      {/* <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link> */}
      {/* <ActivLink href="/" text="Home"/>
      <ActivLink href="/about" text="About"/>
      <ActivLink href="/contact" text="Contact"/> */}
      {
        menuItems.map(({text, href}) => <ActivLink key={href} href={href} text={text}/>)
      }
    </nav>
  )
}
