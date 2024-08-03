'use client'
import { useEffect } from 'react';
import Image from "next/image";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import logo from "../../../public/Logo_lin-dev.png";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosLaptop } from "react-icons/io";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
 
export default function Links() {
  


 useEffect( () => {
  const element = document.getElementById('hover_element');

  const handleMouseEnter = () => {
    element?.classList.add('shadow-inner_shadow_nav');
  };

  const handleBeforeUnload = () => {
    element?.classList.remove('shadow-inner_shadow_nav');
  };

  element?.addEventListener('mouseenter', handleMouseEnter);
  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    element?.removeEventListener('mouseenter', handleMouseEnter);
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
})

  const pathname = usePathname()

  return (
    <>
    <div className="flex w-3/4 m-auto">
    <div className="my-10  w-full">
      <Image className="rounded-lg"
      src={logo}
      alt="Logo Lin_Dev Néon"
      width={125}
      height={125}
      />
    </div>

    <div className="bg-[#1B1B1E] rounded-lg mt-16 max-h-20 bg-opacity-50">
      <nav>
        <ul className="flex gap-8 p-2 items-center  text-white  ">
          <li id="hover_element" className="bg-[#333] rounded-lg p-2 hover:bg-opacity-30 hover:shadow-inner_shadow_nav">
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
              <IoPersonOutline  className="w-10 h-10"/>
            </Link>
          </li>
          <li id="hover_element" className="bg-[#333] rounded-lg p-2 hover:bg-opacity-30 hover:shadow-inner_shadow_nav">
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/works">
             <IoIosLaptop  className="w-10 h-10"/>
            </Link>
          </li>
          <li id="hover_element" className="bg-[#333] rounded-lg p-2 hover:bg-opacity-30 hover:shadow-inner_shadow_nav">
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/pricing">
            <MdOutlinePriceChange className="w-10 h-10" />
            </Link>
          </li>

          <li id="hover_element" className="bg-[#333] rounded-lg p-2 hover:bg-opacity-30 hover:shadow-inner_shadow_nav">
            <Link
              className={`link ${pathname === '/' ? 'active' : ''}`}
              href="/contact"
            >
              <IoChatbubblesOutline className="w-10 h-10" />
            </Link>
          </li>
          <li id="hover_element" className="bg-[#333] rounded-lg p-2 hover:bg-opacity-30 hover:shadow-inner_shadow_nav">
            <Link
              className={`link ${pathname === '/' ? 'active' : ''}`}
              href="/contact"
            >
              <MdOutlineFileDownload className="w-10 h-10"/>
            </Link>
          </li>

        </ul>
      </nav>
    </div>

    </div>
    </>
  )
}