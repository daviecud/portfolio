import React from "react";
import {NavLink} from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {

    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-start">
                <nav className="flex">
                    <NavLink to="/" activeClassName=""  className="inflex-flex  py-6 px-3 mr-4 text-green-100 hover:text-blue-600 text-4xl font-bold cursive tracking-widest"
                    >
                        Home
                    </NavLink>
                </nav>
                <nav>
                    <NavLink to="/post"  className="inline-flex  py-3 px-3 my-6 rounded text-yellow-200 hover:text-blue-600"
                    activeClassName="text-green-100 bg-green-700">
                        Blog Posts
                    </NavLink>
                </nav>
                <nav>
                    <NavLink to="/project"  className="inline-flex  py-3 px-3 my-6 rounded text-yellow-200 hover:text-blue-600"
                    activeClassName="text-green-100 bg-green-700">
                        Projects
                    </NavLink>
                </nav>
                <nav>
                    <NavLink to="/about"  className="inline-flex  py-3 px-3 my-6 rounded text-yellow-200 hover:text-blue-600"
                    activeClassName="text-green-100 bg-green-700">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-6 px-10 my-1">
                    <SocialIcon url="https://linkedin.com/in/davidwcalderwood" className="mr-4" target="_blank" fgColor="#fff" style={{height: 40, width: 40}}/>
                    <SocialIcon url="https://linkedin.com/in/davidwcalderwood" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://linkedin.com/in/davidwcalderwood" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>

                    
                </div>
            </div>
            
        </header>
    )
}