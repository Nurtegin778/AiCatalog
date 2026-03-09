"use client"


import { useEffect, useState } from "react"

export default function About() {
    const [data, setData] = useState<string>("")
    useEffect(() => {
        fetch("/api/hello")

            .then((res) => res.json())
            .then((data) => setData(data.message))
    }   , [])

    return (
        <div>
            <h1>About Page</h1>
            <ol>
                <li>1. This is the about page.</li>
                <li>2. The message from the API is: {data}</li>
            </ol>
        </div>
    )
}