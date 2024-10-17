import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="logo">Juan sebastian valenzuela</div>
            <ul className="Flex space-x-6">
                <li> <link rel="stylesheet" href="/" /></li>
                <li><a href="/about">Acerca de</a></li>
                <li><a href="/contact">Contacto</a></li>
                <li><a href="/projects">Proyectos</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
