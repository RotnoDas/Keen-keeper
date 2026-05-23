const NoTextData = () => {
    return (
        <div className="flex min-h-[60vh] w-full items-center justify-center bg-gray-50/50 p-6">
            <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-gray-100">
                
                {/* Inline SVG Icon - Chat Bubble (No libraries needed) */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 ring-8 ring-indigo-50/50">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="h-10 w-10 text-indigo-500"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" 
                        />
                    </svg>
                </div>

                {/* Text Content */}
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                    No Messages Yet
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-gray-500">
                    Your inbox is currently empty. Start a new conversation to connect with your contacts, and your chat history will appear here.
                </p>

                {/* Action Button */}
                <button 
                    onClick={() => console.log("New message clicked")}
                    className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 active:scale-95"
                >
                    Start a Conversation
                </button>

            </div>
        </div>
    );
};

export default NoTextData;