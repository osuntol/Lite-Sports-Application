'use client'
import React from "react"
import {
  Menubar,
} from "@/components/ui/menubar"
import Link from "next/link"


export default function NavigationBar() {
  return (

    <Menubar>
      <div className="flex items-center justify-center space-x-16">
      <Link href="/teamManagement/">TeamManagement</Link>
      <Link href="/register/">Register</Link>
      <Link href="/login/">Login</Link>
      </div>
    </Menubar>

  )
}