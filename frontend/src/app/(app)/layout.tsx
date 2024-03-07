import { HeaderUser } from '@/components/header/header-user'
import type { Metadata } from 'next'
import '../globals.css'
import { Footer } from '@/components/footer'
import Avaliações from './avaliações/page'
import AvaliaçãoCliente from './avaliaçãoCliente/page'
import { Red_Hat_Display } from 'next/font/google' 
import { cn } from '@/lib/utils'

const redHatDisplay = Red_Hat_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={cn('min-h-screen', redHatDisplay.className)}>
        <HeaderUser />
        <AvaliaçãoCliente />
        <Footer />
      </body>
    </html>
  )
}
