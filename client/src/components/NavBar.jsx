import React from 'react';
import { Link } from 'react-router-dom';
    
export default function NavBar () {
    return (
            <nav className='navbar'>
                <h1 className='nav-title'>CISC 3140 Lab5</h1>
                <div className='nav-links'>
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/cars" className='nav-link'>Cars</Link>
                    <Link to="/owners" className='nav-link'>Owners</Link>
                </div>
            </nav>
    );
}