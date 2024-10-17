import React, { ReactNode } from 'react';
import Navbar from '../components/nadvar'; 

interface LayoutProps {
    children: ReactNode; 
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col' >
            <header className='bg-gray-900 text-white py-6 px-4'>
               <div>
               <h1 className='text-3xl font-bold'>Portfolio</h1>
                </div>
            
            <Navbar />
            </header>
            <main>{children}</main>
            
        </div>
    );
};

export default Layout;
