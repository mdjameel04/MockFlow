
import { openrouter } from "@/config/openroute";
import { APP_LAYOUT_CONFIG_PROMPT } from "@/data/Prompt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const {userInput, deviceType, projectId} = await req.json();

const airesult = await openrouter .chat.send({
  model: "google/gemini-2.5-flash-lite-preview-09-2025",
  messages: [
    {
   "role" :"system",
   "content" : [
    {
        "type" : "text",
        "text":APP_LAYOUT_CONFIG_PROMPT.replace('{deviceType}',deviceType)
    }
   ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": userInput
        },
      ]
    }
  ],
  stream: false
});
 
const JSONAiResult = JSON.parse(airesult?.choices[0]?.message?.content as string)
// once we get details we need to save to database
  console.log(airesult)
   return NextResponse.json(JSONAiResult)
}