import earth from "../assets/earth.png";
import climate from "../assets/climate-change-with-industrial-pollution-removebg-preview 1.png"
import greenmap from "../assets/phone-bg.png"
import bgph from "../assets/Abstract Background.png"


function Hero() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Mobile version (below 1024px) */}
                <div className="block lg:hidden relative px-3 py-12 flex item-center justify-center " style={{background:`url(${bgph})`}}>
                    {/* Container with margins */}
                    <div className="w-full max-w-[95vw] mx-auto relative">
                        {/* Green world map image with text overlay */}
                        <div className="relative rounded-[20px] overflow-hidden shadow-md w-full">
                            <img
                                src={greenmap}
                                alt="World map background"
                                className="w-full h-80 aspect-video object-cover "
                            />

                            {/* Text overlay on top of the image */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                                <h1 className="text-3xl font-bold font-dmsans text-gray-900">
                                    GHG Accounting<br />
                                    <span className="block">Scope 1, Scope 2,</span>
                                    <span className="block">Scope 3</span>
                                </h1>

                                <p className="mt-4 text-base font-dmsans text-gray-900 font-medium max-w-xs mx-auto">
                                    Track, minimize, offset, and report your carbon emissions
                                    effortlessly to drive faster decarbonization progress.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop version (1024px and above) - Your original layout */}
                <div className="hidden lg:block py-12 sm:py-16 lg:py-20">
                    {/* World map background */}
                    <div className="absolute inset-0 opacity-100">
                        <img
                            src={earth}
                            alt="World map background"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8">
                            {/* Text Content */}
                            <div>
                                <h1 className="text-4xl font-bold font-dmsans text-gray-900 sm:text-5xl lg:text-6xl">
                                    GHG Accounting<br />
                                    <span className="block">Scope 1, Scope 2,</span>
                                    <span className="block">Scope 3</span>
                                </h1>

                                <p className="mt-4 text-lg font-dmsans text-[#2D2D2D] font-500 lg:mt-8">
                                    Track, manage, offset, and report your carbon emissions
                                    effortlessly to drive faster decarbonization progress.
                                </p>
                            </div>

                            {/* Image Content */}
                            <div className="relative lg:pl-8">
                                <div className="relative mx-auto max-w-xs lg:max-w-90">
                                    <img
                                        src={climate}
                                        alt="Earth in glass dome with industrial landscape"
                                        className="relative z-10 w-full max-w-xs mx-auto lg:max-w-none"
                                    />
                                </div>
                                <div
                                    className="relative bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2/2 w-2/4 h-6 bg-black opacity-60 rounded-full blur-md"
                                    style={{ filter: 'blur(14.899999618530273px)' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Hero;