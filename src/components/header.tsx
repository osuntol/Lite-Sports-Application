'use client'
import React from "react"
import {
  Menubar,
} from "@/components/ui/menubar"
import Link from "next/link"
import { Button } from "./ui/button"
import RealmRivals from "@/app/images/RealmRivals.png"
import Image from "next/image"
import { signIn, signOut, useSession, SessionProvider } from "next-auth/react"


export default function NavigationBar() {

const { data: session} = useSession()

  return (

    <SessionProvider>

    
    <div>
      

      {session ? (
        <Menubar>
          <Image
            src={RealmRivals}
            className=" items-center h-auto object-cover flex justify-start px-8"
            width={95}
            height={25}
            alt="Realm Rivals Logo"
          />
          <div className="flex justify-end space-x-16 w-full items-center px-8">
            <Link href="/team-management">Manage Team</Link>
            <Button onClick={() => signIn()}>Login</Button>
            <Button onClick={() => signOut()}>Log Out</Button>
          </div>
        </Menubar>
      ) : (<Menubar>
        <Image
          src={RealmRivals}
          className=" items-center h-auto object-cover flex justify-start px-8"
          width={95}
          height={25}
          alt="Realm Rivals Logo"
        />
        <div className="flex justify-end space-x-16 w-full items-center px-8">
          <Link href="/team-management">Manage Team</Link>
          <Button onClick={() => signIn()}>Login</Button>
        </div>
      </Menubar>
      )}

    </div>
    </SessionProvider>
  )
}


