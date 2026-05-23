const NoVideoData = () => {
    return (
        <div className="flex min-h-[60vh] w-full items-center justify-center bg-gray-50/50 p-6">
            <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-gray-100">
                
                {/* Inline SVG Icon - Video Camera (No libraries needed) */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 ring-8 ring-rose-50/50">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="h-10 w-10 text-rose-500"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 6.75v9a2.25 2.25 0 002.25 2.25z" 
                        />
                    </svg>
                </div>

                {/* Text Content */}
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                    No Videos Available
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-gray-500">
                    You don't have any video recordings or saved media yet. Start a new recording or upload a file to see it here.
                </p>

                {/* Action Button */}
                <button 
                    onClick={() => console.log("Record video clicked")}
                    className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-rose-700 hover:shadow-lg hover:shadow-rose-600/20 active:scale-95"
                >
                    Record Video
                </button>

            </div>
        </div>
    );
};

export default NoVideoData;