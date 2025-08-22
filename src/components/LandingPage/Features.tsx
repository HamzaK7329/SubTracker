// src/components/Features.tsx


export default function Features() {
    return (
        <div className="flex w-full justify-center text-center pt-52 sm:pt-25 md:pt-45 px-4 sm:px-6 md:px-8">
            <div className="max-w-2xl w-full">
                <div className="inline-block border border-[#DA903D] rounded-3xl px-2.5 md:px-4 mb-5">
                    <p className="text-[#F8C572] text-xs md:text-base">
                        Track Subscriptions Easily
                    </p>
                </div>
                <h1 className="text-2xl max-w-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FDDDB4] to-[#F0EBDF] bg-clip-text text-transparent">
                    See All Your Monthly Costs in One Place</h1>
                <p className="text-secondary-500 pt-5 text-xs sm:text-sm md:text-base">
                    App helps you monitor, organise, and stay on top of every subscription
                    you pay for, from Netflix to Amazon Prime.</p>
                <div className="mt-20 sm:mt-32 md:mt-40"></div>
            </div>
        </div>
    );
}