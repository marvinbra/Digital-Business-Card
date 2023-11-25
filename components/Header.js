import React from "react"

export default function Header() {
    return (
        <header>
            <h2>Marvin Bopp</h2>
            <p>Frontend Developer</p>
            <p>marvinbopp.website</p>
            <div className="head-btn">
                <a href=""><i className="fa-solid fa-envelope i"></i>Email</a>
                <a href="" id="linked-a"><i className="fa-brands fa-linkedin i"></i>LinkedIn</a>
            </div>
        </header>
    )
}