const NoTimeline = () => {
    return (
        <div className="flex min-h-[60vh] w-full items-center justify-center bg-gray-50/50 p-6">
            <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-gray-100">
                
                {/* Inline SVG Icon - No libraries needed */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 ring-8 ring-blue-50/50">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="h-10 w-10 text-blue-500"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                    </svg>
                </div>

                {/* Text Content */}
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                    No Timeline Events
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-gray-500">
                    Your timeline is currently empty. Start adding events to track your milestones and see your progress here.
                </p>

                {/* Action Button */}
                <button 
                    onClick={() => console.log("Add event clicked")}
                    className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/20 active:scale-95"
                >
                    Create First Event
                </button>

            </div>
        </div>
    );
};

export default NoTimeline;