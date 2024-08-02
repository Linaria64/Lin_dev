'use client'
import Image from "next/image";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import logo from "../../../public/Logo_lin-dev.png";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosLaptop } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
 
export default function Links() {
  

  const pathname = usePathname()

  return (
    <>
    <div className="flex w-3/4  mx-auto">
    <div className="w-100% my-10  w-full">
      <Image className="rounded-lg"
      src={logo}
      alt="Logo Lin_Dev Néon"
      width={150}
      height={150}
      />
    </div>

    <div className="bg-[#1B1B1E] rounded-lg my-10 max-h-20  max-w-1/2">
      <nav>
        <ul className="flex gap-8 p-2 text-center items-center h-20  text-white opacity-70">
          <li className="bg-blue-950 rounded-lg p-2">
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
              <IoPersonOutline  className="w-12 h-12"/>
            </Link>
          </li>
          <li className="bg-blue-950 rounded-lg p-2">
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/works">
             <IoIosLaptop  className="w-12 h-12"/>
            </Link>
          </li>
          <li className="bg-blue-950 rounded-lg p-2">
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/pricing">
            <IoHomeOutline className="w-12 h-12" />
            </Link>
          </li>

          <li className="bg-blue-950 rounded-lg p-2">
            <Link
              className={`link ${pathname === '/' ? 'active' : ''}`}
              href="/contact"
            >
              <IoChatbubblesOutline className="w-12 h-12" />
            </Link>
          </li>
          <li className="bg-blue-950 rounded-lg p-2">
            <Link
              className={`link ${pathname === '/' ? 'active' : ''}`}
              href="/contact"
            >
              <MdOutlineFileDownload className="w-12 h-12"/>
            </Link>
          </li>

        </ul>
      </nav>
    </div>

    </div>
    </>
  )
 

}