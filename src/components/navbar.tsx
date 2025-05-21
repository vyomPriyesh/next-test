// components/Navbar.tsx
'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
    const pathname = usePathname()
    const idMatch = pathname.match(/^\/([^\/]+)$/)
    const id = idMatch ? idMatch[1] : null

    return (
        <nav style={{ padding: '10px', background: '#ddd' }}>
            {id && (
                <Link href={`/${id}`} style={{ marginRight: '10px' }} />
            )}
            <Link href="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link href="/about" style={{ marginRight: '10px' }}>About</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    )
}
