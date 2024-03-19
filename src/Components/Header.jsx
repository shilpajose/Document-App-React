import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar className="bg-primary">
                <Container>
                    <Link to={'/'} style={{textDecoration:'none'}}>
                    <i class="fa-regular fa-clipboard fa-3x me-2"></i>
                        <Navbar.Brand className='fw-bolder fs-1 text-light'>Add Documents</Navbar.Brand>
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Header