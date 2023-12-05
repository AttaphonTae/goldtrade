import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const res = await fetch('https://data.mongodb-api.com/', {
      next: { revalidate: 60 }, 
      headers: {
        'Content-Type': 'application/json',
        // 'API-Key': process.env.DATA_API_KEY,
      },
    })
    const data = await res.json()
   
    return Response.json(data)
}