import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        // <header className="p-3 bg-dark text-white">
        //     <div className="mx-5">
        //         <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        //             <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        //                 <li><a href="/" className="nav-link px-2 text-white text-left">Home</a></li>
        //                 <li><a href="/" className="nav-link px-2 text-white">About</a></li>
        //             </ul>
        //         </div>
        //     </div>
        // </header>

        <header>
            <div className="collapse bg-dark" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className="text-white">About</h4>
                            <p className="text-muted">Moneygram is committed to helping increase the reach of small businesses and aspiring Instagram influencers through its innovative and technology backed process which would enable them to build the skills needed to succeed. We also compensate the audience with the equivalent of cash, the goal is to create a win-win situation for everyone.</p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4 className="text-white">Contact</h4>
                            <ul className="list-unstyled">
                                <li><a href="mailto:patilchirantan75@gmail.com" target="_blank" rel="noreferrer" className="text-white">Email me</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <FavoriteIcon className="mx-1" />
                        <strong>Insta Like</strong>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>
    )
}
