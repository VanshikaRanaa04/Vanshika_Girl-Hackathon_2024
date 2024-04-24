import React, { useState, useEffect } from 'react';

const ScrollToKnowMore = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Hide the "Know More" section when the user scrolls
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 bg-[#bac89c8a] text-white transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button className="text-center text-white hover:underline focus:outline-none">
                Scroll to know more 
            </button>
        </div>
    );
};

const AboutUs = () => {
    return (
        <div className="bg-[#83A16C]">
            <div className="container mx-auto py-16">
                {/* First Image */}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                        <h2 className="text-5xl font-semibold mb-4">ABOUT US</h2>
                        <p className="text-xl text-black-1900 leading-7">
                            Revolutionizing wildfire management with cutting-edge drone technology. Our rapid mapping and real-time monitoring solutions offer unprecedented insights into fire behavior, ensuring timely intervention for maximum impact. By leveraging data-driven techniques, we're pioneering new standards in fire detection, segmentation, and modeling, leading the way to safer, more resilient forests.
                        </p>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-1 md:order-2">
                        <img src="src\assets\image.png" alt="Image" className="w-full rounded-lg mb-4 md:mb-0" />
                    </div>
                </div>

                {/* Second Image */}
                <div className="mt-16 flex flex-col md:flex-row-reverse items-center">
                    <div className="md:w-1/2 md:pl-8 order-2 md:order-1">
                        <h2 className="text-3xl font-semibold mb-4">WHAT WE AIM TO OFFER?</h2>
                        <ul className="list-disc list-inside">
                            <li className="text-black-1900 mb-4">
                                Utilizing deep learning models to predict wildfires, enabling early identification via drones, and immediate alerting of authorities.
                            </li>
                            <li className="text-black-1900 mb-4">
                                Providing the shortest path to areas affected by disasters for swift relief efforts.
                            </li>
                            <li className="text-black-1900 mb-4">
                                Mapping areas with active fires and delivering real-time updates.
                            </li>
                            <li className="text-black-1900 mb-4">
                                Implementing advanced analytics to analyze historical fire data and forecast future fire risks.
                            </li>
                            <li className="text-black-1900 mb-4">
                                Collaborating with local communities to raise awareness about fire prevention and safety measures.
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 md:pr-8 order-1 md:order-2">
                        <img src="src/assets/Screenshot 2024-04-24 035526.png" alt="Image 2" className="w-full rounded-lg mb-4 md:mb-0" />
                    </div>
                </div>

                {/* Scroll to Know More */}
                <ScrollToKnowMore />
            </div>
        </div>
    );
};

export default AboutUs;
