// components/Navbar.tsx
'use client'

import Link from 'next/link'

export default function Navbar() {

    return (
        <nav style={{ padding: '10px', background: '#ddd' }}>
            <Link href="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link href="/about" style={{ marginRight: '10px' }}>About</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    )
}
