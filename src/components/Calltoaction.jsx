import bgImg from "../assets/callToAction-bg.png";

function Calltoaction() {
  return (
    <>
      <div 
        className="w-full -mt-11 px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-24" 
        style={{ 
          background: `linear-gradient(180deg, #F5F6FA 0%, rgba(255, 255, 255, 0.00) 34.72%), 
                       linear-gradient(183deg, rgba(0, 0, 0, 0.15) 7.07%, #222 81.29%), 
                       url(${bgImg}) lightgray 50% / cover no-repeat`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <section className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
              Ready to make meaningful action on your ESG journey?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white mx-auto max-w-3xl">
              Drive impact with accurate carbon accounting, reduction strategies, and transparent reporting.
            </p>

            <div className="flex flex-col items-center justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-10">
              <a 
                href="#" 
                className="inline-flex items-center justify-center w-full px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-primary transition-all duration-200 bg-lightprimary border border-transparent rounded-md sm:w-auto hover:bg-opacity-90" 
                role="button"
              > 
                Login 
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center w-full px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-md sm:w-auto hover:bg-opacity-90" 
                role="button"
              > 
                Book Demo 
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Calltoaction;