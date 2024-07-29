'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export default function Links() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            About
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/works">
            Works
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/pricing">
            Pricing
          </Link>
        </li>

        <li>
          <Link
            className={`link ${pathname === '/' ? 'active' : ''}`}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}