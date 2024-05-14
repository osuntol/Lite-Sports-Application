'use client'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"


export default function TextareaWithButton() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mb-6">
          <Textarea placeholder="Search your player here" />
      </div>
      <div className="">
          <Button>Search</Button>       
      </div>
    </div>
  )
}

