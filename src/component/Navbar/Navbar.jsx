'use client'
import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const Navbar = () => {
  const { data: session } = useSession();

  const links = [
    { name: '', href: '/' },
    { name: 'Login', href: '/login' },
    { name: 'Sign up', href: '/register' }
  ];

  return (
    <>
      <div className={styles.con}>
        <img style={{ marginLeft: '20px', height: '85px' }} src="/dribbble-removebg-preview.png" alt="" />

        <div className={styles.linksCon}>
          <input type="search" name="search" id="" placeholder='Search' />

          {!session ? (
            links.map((link, index) => (
              <Link href={link.href} className={styles.link} key={index}>{link.name}</Link>
            ))
          ) : (
            links.map((link, index) => (
              <Link href={link.href} className={styles.link} key={index}>{link.name}</Link>
            ))
          )}

          {session && <Image src={session.user.image} width={20} height={20} style={{ borderRadius: "50%" }} />}
        </div>
      </div>
    </>
  );
};

export default Navbar;