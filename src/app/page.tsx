"use client"
import React from "react"
import { HeaderNav } from "./Navbar"
import { BigCard } from "./BigCard"

export default function Home() {
        const [liked, setLiked] = React.useState(false)

        return (
                <div className="flex flex-col">
                        <div className="relative">
                                <div className="absolute rounded-full animate-blob mix-blend-multiply filter blur-2xl opacity-70 -top-5 -right-2 w-72 h-72 bg-yellow-500" />
                                <div className="absolute rounded-full animate-blob animation-delay-2000 mix-blend-multiply filter blur-2xl opacity-70 top-0 -left-2 w-72 h-72 bg-indigo-500" />
                                <div className="absolute rounded-full animate-blob  mix-blend-multiply filter blur-2xl opacity-70 -bottom-20 left-20 w-72 h-72 bg-pink-500" />
                                <div className="w-screen max-h-screen">
                                        <HeaderNav />
                                        <BigCard />
                                </div>
                        </div>
                </div>
        )
}
