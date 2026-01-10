"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { THEME_NAME_LIST, THEMES } from '@/data/theme'
import { projectType } from '@/type/type'
import {Camera, Share2, ShareIcon, Sparkles} from 'lucide-react'
import { Share } from 'next/font/google'
import React, { useEffect, useState } from 'react'


type Props={
  projectDetail:projectType | undefined
}
const SettingSection = ({projectDetail}:Props) => {
const [selectedTheme, setSelectedTheme] = useState("AURORA_INK");
const [projectName, setProjectName] = useState(projectDetail?.projectName);
const [userNewsScreenInput, setUserNewsScreenInput] = useState<string> ();
  
useEffect(()=>{
projectDetail&&setProjectName(projectDetail?.projectName)
},[projectDetail])
 
  return (
    <div className='w-[300px] h-[90vh] p-5 border-r '>
    <h2 className='text-lg font-medium'> setting </h2>
       
       <div className='mt-3'> 
     <h2 className='text-sm mb-1'> project name</h2>
     <Input placeholder='Project Name' 
     onChange={(e)=>setProjectName(e.target.value)}/>
       </div>

       <div className='mt-5'>
         <h2 className='text-sm mb-1'> Generate New Screen</h2>
     <Textarea placeholder='Enter prompt to Generate new design using Ai'
     onChange={(e)=>setUserNewsScreenInput(e.target.value)} />
     <Button size={"sm"} className='mt-2 w-full'> <Sparkles/> Generate With Ai </Button>
       </div>
       
          <div className='mt-5 '> 
            <h2 className='mb-1 text-sm'>Themes </h2>
            <div className='h-[200px] overflow-auto'>
                <div>
                  {THEME_NAME_LIST.map((theme, index)=>(
              <div className={`p-3 border rounded-xl mb-3
               ${theme == selectedTheme && "border-primary bg-primary/20"}
              `} onClick={()=>setSelectedTheme(theme)} key={index}>
            <h2> {theme}</h2>
            <div className='flex gap-2 '>
                <div className={`h-4 w-4 rounded-full p-2`}
                style={{background: THEMES[theme].primary }}
                />
                <div className={`h-4 w-4 rounded-full p-2`}
                style={{background: THEMES[theme].secondary }}
                />
                <div className={`h-4 w-4 rounded-full p-2`}
                style={{background: THEMES[theme].accent }}
                />
                <div className={`h-4 w-4 rounded-full p-2`}
                style={{background: THEMES[theme].background }}
                />

            </div>
            </div> 
          ))}             
          </div>
          </div>
    </div>
        
        <div className='mt-5'>
         <h2 className='text-sm mb-1 font-bold'>Extras</h2>
         <div className='flex gap-4'>
     <Button size={"sm"} variant={"outline"} className='mt-2'> <Camera/> Screenshot </Button>
     <Button size={"sm"} variant={"outline"} className='mt-2'> <ShareIcon/> Share </Button>
       </div>
       </div> 
    </div>
  )
}

export default SettingSection