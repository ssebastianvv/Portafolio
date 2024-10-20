import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaGitAlt } from "react-icons/fa";



export const Footer : React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© 2024 Mi Portafolio | recordar poner redes etc</p>
        <CiInstagram size={40}/>  
        <FaGitAlt />
      </div>
      
    </footer>
    
  );
};