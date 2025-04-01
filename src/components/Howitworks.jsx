import React, { useState, useEffect } from "react";
import '../App.css';
import dashboard from "../assets/Employee 1.png";

function Howitworks() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    
    // Check if screen is mobile sized
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initial check
        checkScreenSize();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    
    // Steps data
    const steps = [
        {
            number: "01",
            title: "Track and manage your Net Zero Pathway",
            description: "Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year, analyse the year-on-year progress against the targets and gain valuable analytics."
        },
        {
            number: "02",
            title: "Track and manage your Net Zero Pathway",
            description: "Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year, analyse the year-on-year progress against the targets and gain valuable analytics."
        },
        {
            number: "03",
            title: "Track and manage your Net Zero Pathway",
            description: "Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year, analyse the year-on-year progress against the targets and gain valuable analytics."
        }
    ];
    
    // Next slide function
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === steps.length - 1 ? 0 : prevSlide + 1));
    };
    
    // Previous slide function
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? steps.length - 1 : prevSlide - 1));
    };

    return (
        <section className="w-full px-4 md:px-8 lg:px-16 py-12 font-dmsans">
            <div className="flex-col items-center justify-center font-bold max-w-6xl mx-auto">
                <div className="text-center text-primary text-sm md:text-base mb-3">How It works?</div>
                <h1 className="text-center text-4xl md:text-5xl lg:text-6xl mb-3">Getting Started is easy</h1>
                <h3 className="text-center text-xl md:text-2xl mb-6 md:mb-10">How carboncrunch SAAS works</h3>
            </div>
            
            {isMobile ? (
                // Mobile Carousel View
                <div className="mobile-carousel max-w-sm mx-auto mb-12">
                    {/* Green card with dashboard image */}
                    <div className="bg-primary rounded-t-xl p-4 mb-4" style={{background:"linear-gradient(180deg, #28B30E 0%, rgba(40, 179, 14, 0.00) 100%)"}}>
                        <img src={dashboard} alt="Dashboard" className="w-full h-auto rounded-lg" />
                    </div>
                    
                    {/* Step content */}
                    <div className="px-2">
                        <div className="font-bold text-2xl mb-2 text-primary">
                            {steps[currentSlide].number}
                        </div>
                        <h4 className="font-bold text-xl mb-3">
                            {steps[currentSlide].title}
                        </h4>
                        <p className="text-sm text-gray-700 mb-6">
                            {steps[currentSlide].description}
                        </p>
                    </div>
                    
                    {/* Navigation controls */}
                    <div className="flex items-center justify-center space-x-2 mt-4">
                        <button 
                            onClick={prevSlide}
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-primary transition-colors"
                            aria-label="Previous step"
                        >
                            <span className="text-lg">←</span>
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-primary transition-colors"
                            aria-label="Next step"
                        >
                            <span className="text-lg">→</span>
                        </button>
                    </div>
                </div>
            ) : (
                // Desktop Grid View
                <div className="steps-wrapper grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                    {steps.map((step, index) => (
                        <div key={index} className="step-container group transition-all duration-300 cursor-pointer p-4 md:p-6 border border-gray-200 rounded-lg hover:shadow-lg mx-auto w-full max-w-sm">
                            <h3 className="group-hover:text-primary group-hover:font-bold transition-color duration-300 font-bold text-2xl md:text-3xl mb-2">{step.number}</h3>
                            <h4 className="group-hover:text-primary group-hover:font-bold transition-color duration-300 font-bold text-lg md:text-xl mb-2">{step.title}</h4>
                            <p className="text-sm md:text-base">{step.description}</p>
                        </div>
                    ))}
                </div>
            )}
            
            {/* Desktop dashboard image */}
            {!isMobile && (
                <div className="flex justify-center items-center px-4 sm:px-6 md:px-8">
                    <div 
                        className="flex justify-center items-center w-full max-w-6xl" 
                        style={{ 
                            borderRadius: "19.227px 19.227px 0px 0px", 
                            background: "linear-gradient(180deg, #28B30E 0%, rgba(40, 179, 14, 0.00) 100%)",
                            padding: "20px 20px 0px 20px",
                        }}
                    >
                        <img src={dashboard} alt="Dashboard" className="w-full h-auto" />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Howitworks;