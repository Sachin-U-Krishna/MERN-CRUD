import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">CRUD</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/get">Get</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/update">Update</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/delete">Delete</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
