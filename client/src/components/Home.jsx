import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='homepage'>
            <h1>Welcome to CISC 3140 Lab 5</h1>
            <h2>This lab allows you to stored and update data of cars.</h2>
            <div className='home-list'>
                <ul>
                    <li>Click on <Link to='/cars' className='body-link'>Cars</Link> you can see the car table. While there, you can:
                        <ul>
                            <li>See each car with year, model and make.</li>
                            <li>You can add and updating new cars.</li>
                        </ul>
                    </li>
                    <li> Click on <Link to='/owners' className='body-link'> Owners</Link> you can see the owner table. While there, you can:
                        <ul>
                            <li>See each owner with name and email.</li>
                            <li>You can add and updating new owners.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}