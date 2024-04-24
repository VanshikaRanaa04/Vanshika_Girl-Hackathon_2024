import React from 'react';

const Hero = () => {
    return (
        <div className="bg-[#83A16C] text-white py-24 px-8 md:px-16 lg:px-32">
            <div className="max-w-6xl mx-auto text-center"> {/* Center alignment */}
                <p className="text-xl md:text-xl font-bold mb-4">
                    Explore, Click, Respond: Instantly Check for WILDFIRES and Navigate to Crisis Zones Swiftly!
                </p>
                <img
                    src="src/assets/image-removebg-preview.png"
                    alt="Real-Time Wildfire Map"
                    className="mx-auto rounded-lg shadow-lg mb-8 h-[600px] w-[700px]" 
                />
            </div>
        </div>
    );
};

export default Hero;

