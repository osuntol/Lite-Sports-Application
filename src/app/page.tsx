'use client'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useSession } from "next-auth/react"

export default function TextareaWithButton() {

const {data: session, status} = useSession()

  return (
    
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex space-x-9 grid-auto-rows">
        <div className="mb-6">
          <Textarea placeholder="Search your player here" />
          <div className='flex justify-center pt-3'>
            <Button>Search</Button>
          </div>
        </div>
        <div className="mb-6">
          <Textarea placeholder="Search your player here" />
          <div className='flex justify-center pt-3'>
            <Button>Search</Button>
          </div>
        </div>
      </div>
      <p>
        Welcome to RealmRivals where you can not only search NBA players both current and old but also compare their statistics.
      </p>
    </div>
  
  )
}

