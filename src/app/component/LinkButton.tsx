'use client'
import { LuGithub } from "react-icons/lu";
import { IoLogoGitlab } from "react-icons/io5";
import { RiLinkedinBoxLine } from "react-icons/ri";
import Link from "next/link"

export default function LinkButton () {
    return (
        <div className="text-white">
            <div className="mx-auto flex flex-row gap-10 w-52">
            <Link href="https://github.com/Linaria64"><LuGithub className="w-10 h-10 " />Github</Link>
            <Link href="https://gitlab.com/Dorian66"><IoLogoGitlab className="w-10 h-10 "/>Gitlab</Link>
            <Link href="https://www.linkedin.com/in/dorian-soudan-000a6b1b5/"><RiLinkedinBoxLine className="w-10 h-10"/>Linkedin</Link>
            </div>
        </div>
    )
}   