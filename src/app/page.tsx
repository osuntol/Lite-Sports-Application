'use client'
import NavigationBar from "@/components/header";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"


export default function TextareaWithButton() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-center space-x-16">
      <NavigationBar />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-xs">
          <div className="mb-4">
            <Textarea placeholder="Search your player here" />
          </div>
          <div className='flex items-center justify-center'>
          <Button>Search</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

