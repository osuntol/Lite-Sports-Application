'use client'
import React from "react"
import {
  Menubar,
} from "@/components/ui/menubar"
import Link from "next/link"
import { Button } from "./ui/button"

export default function NavigationBar() {
  return (


    <Menubar>
      <img
        src="src/app/images/RealmRivals.svg"
        className="w-1/2 h-auto object-cover flex justify-start px-8"
      />
      <div className="flex justify-end space-x-16 w-full items-center px-8">
        <Link href="/team-management">Manage Team</Link>
          <Button>Login</Button> 
      </div>
    </Menubar>


  )
}