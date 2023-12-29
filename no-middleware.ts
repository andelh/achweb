import { NextResponse } from "next/server"
import { withSplitter } from "splitter-gg/middleware"

export const middleware = withSplitter(() => {
  return NextResponse.next() // any nextjs middleware
})

export const config = {
  matcher: ["/"], // make sure this matches your a/b testing routes
}
