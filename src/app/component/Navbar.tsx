'use client'
import Image from "next/image";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import logo from "../../../public/Logo_lin-dev.png";
 
export default function Links() {
  

  const pathname = usePathname()

  return (
    <>
    <div className="flex w-2/4 mx-auto">
      
    <div className="w-full my-10">
      <Image className="rounded-lg"
      src={logo}
      alt="Logo Lin_Dev Néon"
      width={80}
      height={80}
      />
    </div>

    <div className="bg-[#1B1B1E] rounded-lg my-10">
      <nav>
        <ul className="flex gap-8 p-5">
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
    </div>

    </div>
    </>
  )
 

}