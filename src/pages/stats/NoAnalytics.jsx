const NoAnalytics = () => {
    return (
        <div className="flex min-h-[60vh] w-full items-center justify-center bg-gray-50/50 p-6">
            <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-gray-100">
                
                {/* Inline SVG Icon - Bar Chart (No libraries needed) */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-violet-50 ring-8 ring-violet-50/50">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="h-10 w-10 text-violet-500"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" 
                        />
                    </svg>
                </div>

                {/* Text Content */}
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                    No Analytics Yet
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-gray-500">
                    We're still gathering data. Your performance metrics, charts, and insights will appear here once there's enough activity to display.
                </p>

                {/* Action Button */}
                <button 
                    onClick={() => console.log("Refresh dashboard clicked")}
                    className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-600/20 active:scale-95"
                >
                    Refresh Dashboard
                </button>

            </div>
        </div>
    );
};

export default NoAnalytics;