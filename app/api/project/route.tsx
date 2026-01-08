import { db } from "@/config/db";
import { ProjectTable, ScreenConfigTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export  async function POST(req: NextRequest) {
const {userInput, device, projectId} = await req.json();
const user = await currentUser()

// in order to insert project 
const result = await db.insert(ProjectTable).values({
    projectID: projectId,
    userId : user?.primaryEmailAddress?.emailAddress as string,
    device : device,
    userInput: userInput
}).returning();

return NextResponse.json(result[0])
}


export async function GET(req:NextRequest) {
    const projectId = await req.nextUrl.searchParams.get("projectId")
    const user = await currentUser();
 
  try {
    const result = await db.select().from(ProjectTable)
    .where(and(eq(ProjectTable.projectID,projectId as string),eq(ProjectTable.userId,user?.primaryEmailAddress?.emailAddress as string)))

  const ScreenConfig = await db.select().from(ScreenConfigTable)
  .where(eq(ScreenConfigTable.projectId, projectId as string))

    return NextResponse.json({
      projectDetail : result[0],
      ScreenConfig : ScreenConfig
    })
  }
  catch (e) {
 return NextResponse.json({msg: "error"})
  }
}