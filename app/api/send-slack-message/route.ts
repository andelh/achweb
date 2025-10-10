import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, projectType, projectDescription, canAfford } = body

    await axios.post(
      'https://hooks.slack.com/services/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',
      {
        text: `💸 New Lead!\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nCan afford investment: ${String(
          canAfford
        )}\nProject Description: ${projectDescription}`,
      }
    )

    return NextResponse.json({ status: 'success' }, { status: 200 })
  } catch (err: any) {
    console.log(err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
