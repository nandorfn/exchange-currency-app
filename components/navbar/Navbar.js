import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary bg-gradient">
                <div className="container">
                    <Link className="navbar-brand fs-3 navBrand text-white" href="/">exchange</Link>
                    <button className="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon btn-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" href="/">Send Money</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" href="#" role="button" >
                                    Converter
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white">Currency API</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
