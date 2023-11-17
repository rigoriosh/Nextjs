import Link from 'next/link'
import React from 'react'
import estilos from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={estilos.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
    </nav>
  )
}
