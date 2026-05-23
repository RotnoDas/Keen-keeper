const NotFound = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
            
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
            
            {/* Ambient Background Glows */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]"></div>
            <div className="absolute left-1/3 top-1/3 -z-10 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[100px]"></div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto max-w-2xl text-center">
                
                {/* Massive 404 Typography */}
                <p className="text-base font-semibold leading-8 text-blue-600">Error 404</p>
                <h1 className="mt-4 text-7xl font-extrabold tracking-tighter text-transparent sm:text-[120px] bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                    404
                </h1>
                
                {/* Copy */}
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Page not found
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600">
                    Sorry, we couldn't find the page you're looking for. It might have been moved, renamed, or perhaps it never existed in the first place.
                </p>

                {/* Action Buttons */}
                <div className="mt-10 flex items-center justify-center gap-x-4">
                    
                    {/* Primary Button (Go Home) */}
                    <button 
                        onClick={() => window.location.href = '/'}
                        className="group flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth={2} 
                            stroke="currentColor" 
                            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Back to Home
                    </button>

                    {/* Secondary Button (Go Back) */}
                    <button 
                        onClick={() => window.history.back()}
                        className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50 active:scale-95"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2} 
                            stroke="currentColor" 
                            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Go Back
                    </button>

                </div>
            </div>
        </div>
    );
};

export default NotFound;