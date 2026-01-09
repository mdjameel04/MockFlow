import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProjectHeader = () => {
  return (
    <div className='flex items-center justify-between p-3 shadow'>
         <div className="flex gap-2 items-center">
                <Image src={"/logo1.png"} alt="logo" width={40} height={60} />
                <h2 className="text-xl font-semibold ">
                  <span className="text-primary">UIUX</span> Mockup
                </h2>
              </div>
              <Button> <Save/> save</Button>
    </div>
  )
}

export default ProjectHeader