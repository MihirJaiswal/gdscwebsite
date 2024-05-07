import React, { ReactNode } from 'react'

function RootLayout({children} : {children : ReactNode}) {
  return (
    <main className='bg-main bg-contain bg-center bg-repeat-space'>
      {children}
    </main>
  )
}

export default RootLayout