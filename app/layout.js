import './globals.css'

export const metadata = {
  title: 'Explore Istanbul',
  description: 'Explore Istanbul and find the best places to visit.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
