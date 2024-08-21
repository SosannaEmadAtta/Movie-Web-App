import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./nav.css";
import { useWatchlist } from '../../../context/WatchlistContext';

function AppNavbar() {
    const { watchlist } = useWatchlist(); // Access watchlist from context

    return (
        <>
            <Navbar className="bar" expand="lg">
                <Container className="icons">
                    <Navbar.Brand className="brand" href="/">
                        {/* Your brand/logo SVG */}
                        Movie App
                    </Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="ms-auto d-flex align-items-center justify-content-between"
                            style={{ width: "150px" }}
                        >
                            <Link to={"./watchlist"} className="nav-link">
    Watchlist {watchlist.length}
</Link>

                            <Link to={"./favorites"} className="nav-link">
                                {/* Your heart SVG */}
                            </Link>
                            <Link />
                            <Link to="#language" className="nav-link">
                                En
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default AppNavbar;
