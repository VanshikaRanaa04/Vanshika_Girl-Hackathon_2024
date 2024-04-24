import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#BAC89C] text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-lg font-semibold">Contact Us</p>
                <p className="text-base">Mobile - 9XXXXX0789</p>
                <p className="text-base">G-mail - <a href="https://www.wildfire.com" className="text-blue-400 hover:underline">www.wildfire.com</a></p>
                <p className="text-base">Linked In - <a href="https://www.linkedin.com/in/wildfire-co8" className="text-blue-400 hover:underline">wildfire/co8</a></p>
            </div>
        </footer>
    );
};

export default Footer;


