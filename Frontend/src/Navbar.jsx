import React from 'react';

const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#BAC89C] p-10 text-white">
            <div className="flex items-center">
                <img 
                    src="src/assets/logo2.png" 
                    alt="logo" 
                    className="w-32 h-auto mr-4"  
                    style={{ maxHeight: '90px' }} 
                />
            </div>
            <button className="px-5 py-3 bg-[#264915] text-white rounded-md hover:bg-[#264915e0]">Login/Signup</button>
        </div>
    );
};

export default Navbar;
