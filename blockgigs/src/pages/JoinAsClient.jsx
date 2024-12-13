

const JoinAsClient = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[65vh] pt-10">
            <div className="max-w-[600px] w-full border-2 border-[#E7E7E7] rounded-[12px] md:rounded-[20px] px-2 py-8 md:p-8">
                <h1 className="text-[#0A2C66] text-[20px] text-center font-bold mb-6">
                    Join as a Client
                </h1>
                <div className="flex flex-col">
                    <label className="text-[#696F8C] text-sm">Company Name</label>
                    <input
                        className="rounded-[8px] bg-white border-2 border-[#0A0F29] text-sm px-2 py-2"
                        placeholder="Enter your company name"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#696F8C] text-sm">Email Address:</label>
                    <input
                        className="rounded-[8px] bg-white border-2 border-[#0A0F29] text-sm px-2 py-2"
                        placeholder="This is to notify you when the platform is live"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#696F8C] text-sm">Location:</label>
                    <input
                        className="rounded-[8px] bg-white border-2 border-[#0A0F29] text-sm px-2 py-2"
                        placeholder="Location E.g, Nigeria"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#696F8C] text-sm">Type of Talent Needed</label>
                    <input
                        className="rounded-[8px] bg-white border-2 border-[#0A0F29] text-sm px-2 py-2"
                        placeholder="e.g., frontend developer, blockchain developer, etc"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#696F8C] text-sm">Number of Positions</label>
                    <input
                        className="rounded-[8px] bg-white border-2 border-[#0A0F29] text-sm px-2 py-2"
                        placeholder="How many positions are you hiring for?"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#696F8C] text-sm">Job Type</label>
                    <input
                        className="rounded-[8px] bg-white border-2 border-[#0A0F29] text-sm px-2 py-2"
                        placeholder="e.g., Full-time, Part-time, Freelance"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#696F8C] text-sm">Company’s Website URL (optional)</label>
                    <input
                        className="rounded-[8px] bg-white border-2 border-[#0A0F29] text-sm px-2 py-2"
                        placeholder="Add your company’s URL"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#696F8C] text-sm">Payment option</label>
                    <input
                        className="rounded-[8px] bg-white border-2 border-[#0A0F29] text-sm px-2 py-2"
                        placeholder="e.g USDT, Stellar, fiat currency"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#696F8C] text-sm">Additional Comments/Requirements</label>
                    <input
                        className="rounded-[8px] bg-white border-2 border-[#0A0F29] text-sm px-2 py-2"
                        placeholder="Any other thing you would like to add"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <button className="bg-[#2F66F6] text-white py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] " > Submit</button>
                </div>

            </div>

        </div>
    );
};

export default JoinAsClient;