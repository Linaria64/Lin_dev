'use client'

import Link from "next/link"

export default function LinkButton () {
    return (
        <div>
            <Link href="/">Github</Link>
            <Link href="/">Gitlab</Link>
            <Link href="/">Linkedin</Link>
        </div>
    )
}