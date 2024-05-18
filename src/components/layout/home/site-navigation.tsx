'use client';

import RealmRivals from '@/app/images/RealmRivals.png';
import { Button } from '@/components/ui/button';
import { Menubar } from '@/components/ui/menubar';
import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function SiteNavigation() {
  const { data: session } = useSession();

  return (
    <SessionProvider>
      <nav className='container border-b flex py-4 items-center'>
        <Link href={'/'}>
          <Image
            src={RealmRivals}
            width={30}
            height={25}
            alt='Realm Rivals Logo'
          />
        </Link>
        <div className='flex justify-end space-x-16 w-full items-center px-8'>
          <Link className='hover:underline' href='/team-management'>
            Manage Team
          </Link>
          {session ? (
            <Button onClick={() => signOut()}>Log Out</Button>
          ) : (
            <Button onClick={() => signIn()}>Log In</Button>
          )}
        </div>
      </nav>
    </SessionProvider>
  );
}
