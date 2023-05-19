import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export async function GET(request: Request) {
  return NextResponse.json({ hello: "world" })
}
