'use client'
import Link from 'next/link'
import { FaArrowUp } from "react-icons/fa";

export default function arrow () {
    return (
        <div className="relative">
            <Link href='/'>
                        <FaArrowUp  className="absolute w-10 h-10 right-0 fill-blue-950 border-2 border-white rounded-3xl"  />

            </Link>
        </div>
    )
}