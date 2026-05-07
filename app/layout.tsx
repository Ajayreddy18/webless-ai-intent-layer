import "./globals.css"

export const metadata = {
  title: "Webless Intent Layer",
  description: "Adaptive AI-native websites",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}