"use client"
import React, { useEffect, useState } from 'react'
import ProjectHeader from './_components/ProjectHeader'
import SettingSection from './_components/SettingSection'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { projectType, ScreenConfig } from '@/type/type'
import { Loader2Icon } from 'lucide-react'



const ProjectCanvasPlayground = () => {
  const {projectId} = useParams();
const [projectDeatail, setProjectDeatail] = useState<projectType>();
const [screenConfig, setScreenConfig] = useState<ScreenConfig[]>([]);
const [loading, setLoading] = useState(true);
const [loadingmsg, setLoadingmsg] = useState("Loading");

  useEffect(()=>{
  projectId&&GetProjectDetails()
  },[projectId])
    
  const GetProjectDetails = async()=>{
    setLoading(true)
    setLoadingmsg('loading...')
    const result = await axios.get("/api/project?projectId="+projectId)
    console.log(result.data)
    setProjectDeatail(result.data?.projectDetail)
    setScreenConfig(result.data?.ScreenConfig)
  //  if(result.data.ScreenConfig?.length==0) {
  //   GenrateScreenConfig()
  //  }

   setLoading(false) 
  }
       useEffect(()=>{
        if(projectDeatail&&screenConfig&&screenConfig.length==0)
        {
          GenrateScreenConfig()
        }
        else {
          if(projectDeatail&&screenConfig ){
            GenerateScreenUIUX()
          }
        }
       },[ projectDeatail&&screenConfig])
       
   const GenrateScreenConfig = async()=>{
    // call api endpoints here(openrouter)
       setLoading(true)
       setLoadingmsg("Generating screen config")

       const result = await axios.post("/api/generate-config",{
        projectId :projectId,
        deviceType: projectDeatail?.device,
        userInput : projectDeatail?.userInput
       })
       console.log(result.data)
       GetProjectDetails()
setLoading(false)
   }

    const GenerateScreenUIUX = async()=>{
      setLoading(true);
      for(let index=0; index<screenConfig?.length; index++) {
        const screen = screenConfig[index];
        if(screen?.code) continue;
        setLoadingmsg("Genratind Screen" +index+1)
           
        const result = await axios.post("/api/generate-screen-ui",{
          projectId,
          screenId:screen?.screenId,
          screenName:screen?.screenName,
          purpose: screen?.purpose,
          screenDescription: screen?.screenDescription
        });
        console.log(result.data)
      }
      setLoading(false)
    }

  return (
    <div>
        <ProjectHeader/>
        <div>
        
      {loading && 
      <div className='p-3 absolute bg-blue-300/20 rounded-xl border-blue-400
          border left-1/2 top-20    '>
        <h2 className='flex items-center gap-3'><Loader2Icon className='animate-spin'/> {loadingmsg} </h2>
       </div>}

    </div>
  {/* settingSection */}
   <SettingSection projectDetail={projectDeatail} />
    {/* canvasSection */}

    </div>

 
  )
}

export default ProjectCanvasPlayground