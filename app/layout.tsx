import type { Metadata } from 'next'
import { Providers } from './providers'


export const metadata: Metadata = {
  title: 'Africash',
  description: 'Africash Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="./assets/css/clash-display.css" />
        <link rel="stylesheet" href="./assets/css/main.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
