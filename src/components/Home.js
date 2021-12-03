import React from "react";
import image from "../Glencoe.png";

export default function Home() {
    return (
        <main>

            <img src={image} alt="Glencoe" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-9">
                <h1 className="text-6xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">Hello, I am David.</h1>
            </section>
        </main>
    
    
        )
}