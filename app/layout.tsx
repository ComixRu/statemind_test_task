import './globals.css'
import React from "react";
import {StoreProvider} from "@/app/_store/store";

async function getData() {
    const res = await fetch(`${process.env.API_URL}/projects.json`)
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const clients = await getData()
  return (
    <html lang="en">
      <body>
      <StoreProvider initialState={{clients}}>
          <div className="w-11/12 sm:w-9/12 mx-auto">
            {children}
          </div>
      </StoreProvider>
      </body>
    </html>
  )
}
