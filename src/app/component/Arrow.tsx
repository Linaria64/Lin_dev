'use client'
import Link from 'next/link'
import { FaArrowUp } from "react-icons/fa";

export default function arrow () {
    return (
        <div className="">
            <Link href='/'>
                        <FaArrowUp  className="w-20 h-20 fill-blue-950 border-2 border-white rounded-3xl"  />

            </Link>
        </div>
    )
}