import React from 'react';

const Feature = () => {
    const features = [
        {
            id: 1,
            title: "Regulatory Compliance and Reporting",
            description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements."
        },
        {
            id: 2,
            title: "Meeting Sustainability Goals and Net-Zero Targets",
            description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements."
        },
        {
            id: 3,
            title: "Cost Savings and Operational Efficiency",
            description: "Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements."
        }
    ];


    const LeafIcon = () => (
        <div className="flex items-center justify-center mx-4 w-16 h-16 rounded-full bg-green-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" fill="none">
                <path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill="#28B30E" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 24.3167L27.9005 31.7648C28.0394 31.845 28.1851 31.9029 28.3333 31.9397V46.3849L15.9201 39.0387C15.3498 38.7012 15 38.0878 15 37.4251V24.3167ZM45 24.1187V37.4251C45 38.0878 44.6502 38.7012 44.0799 39.0387L31.6667 46.3849V31.8131C31.6969 31.798 31.7269 31.7819 31.7566 31.7648L45 24.1187Z" fill="#28B30E" />
                <path opacity="0.499209" fill-rule="evenodd" clip-rule="evenodd" d="M15.4053 20.7014C15.5628 20.5024 15.7617 20.3343 15.9936 20.2108L29.1186 13.2201C29.6696 12.9266 30.3305 12.9266 30.8815 13.2201L44.0065 20.2108C44.1852 20.306 44.3444 20.4277 44.4801 20.5697L30.0899 28.8778C29.9953 28.9325 29.9081 28.995 29.8286 29.064C29.7491 28.995 29.6618 28.9325 29.5672 28.8778L15.4053 20.7014Z" fill="#28B30E" />
            </svg>
        </div>
    );



    return (
        <section className="py-12 bg-[#F5F6FA] sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-x-16">
                    {/* Left Column - Title Section */}
                    <div className="lg:max-w-sm text-center lg:text-left">
                        <h2 className="font-dmsans text-lg font-bold text-green-600 rounded-[20px] p-3 bg-white w-fit mx-auto lg:mx-0">Why Carboncrunch</h2>
                        <h3 className="font-dmsans mt-3 text-3xl font-bold text-gray-900">
                            Leading Sustainability with Carboncrunch
                        </h3>
                        <p className="font-dmsans mt-4 text-base text-gray-600">
                            GHG (Greenhouse Gas) Accounting is a framework used to measure and report greenhouse gas emissions.
                        </p>
                    </div>

                    {/* Right Column - Features List */}
                    <div className="mt-10 lg:mt-0 lg:grow mx-9">
                        <div className="space-y-12">
                            {features.map((feature) => (
                                <div key={feature.id} className={`flex flex-col bg-white p-4 items-start gap-4 rounded-[20px]`}>
                                    <LeafIcon />
                                    <div className="ml-6">
                                        <h4 className="font-dmsans text-xl font-medium text-green-500">{feature.title}</h4>
                                        <p className="font-dmsans mt-2 text-base text-gray-500 max-w-md">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;