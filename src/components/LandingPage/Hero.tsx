// src/components/Hero.tsx


export default function Hero() {
    return (
        <div className="flex w-full justify-center text-center pt-30">
            <div className="max-w-2xl">
                <div className="inline-block border border-[#DA903D] rounded-3xl px-2.5 md:px-4 mb-5">
                    <p className="text-[#F8C572] text-xs md:text-base">
                        See Your Subscriptions Clearly
                    </p>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FDDDB4] to-[#F0EBDF] bg-clip-text text-transparent">
                    Stay Aware.</h1>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FDDDB4] to-[#F0EBDF] bg-clip-text text-transparent">
                    Track Your Subscriptions.</h1>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FDDDB4] to-[#F0EBDF] bg-clip-text text-transparent">
                    Save More.</h1>
                <p className="text-secondary-500 pt-5 text-xs sm:text-sm md:text-base">Your subscription dashboard.</p>
                <p className="text-secondary-500 text-xs sm:text-sm md:text-base">Track payments and manage spending effortlessly.</p>

                <div className="flex gap-4 justify-center mt-8">
                    <button className="px-2 py-1 text-xs sm:text-sm md:text-base sm:px-4 sm:py-2  md:px-6 md:py-3 rounded-lg bg-gradient-to-b from-[#DA903D] to-[#F4A958] text-white font-semibold shadow-lg hover:from-[purple] hover:to-[pink] transition-all duration-200">
                        Start Tracking
                    </button>
                    <button className="px-2 py-1 text-xs sm:text-sm md:text-base sm:px-4 sm:py-2  md:px-6 md:py-3 rounded-lg border bg-black border-[#DA903D] text-white font-semibold ">
                        How It Works
                    </button>
                </div>

            </div>
        </div>
    );
}