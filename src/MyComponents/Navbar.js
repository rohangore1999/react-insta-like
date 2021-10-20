import React from 'react'

export default function Navbar() {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    </a>

                    <ul className="nav nav-pills">
                        <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
                        <li><a href="/" className="nav-link px-2 text-white">About</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
