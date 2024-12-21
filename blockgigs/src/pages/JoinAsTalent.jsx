

const JoinAsTalent = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[65vh] pt-10">
            <div className="max-w-[450px] w-full mx-5 mb-5">
                <h1 className="text-[#06142c] text-[20px] text-center font-bold mb-6">
                    Join waitlist as a Talent
                </h1>
                <div className="flex flex-col">
                    <label className="text-[#11121a] text-sm mb-2">Name(Full Name)</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="Enter your full name"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">Email Address:</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="This is to notify you when the platform is live"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">Location:</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="Location E.g, Nigeria"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">Skillset/Expertise</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="e.g., frontend developer, blockchain developer, etc"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2"> Experience Level</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="e.g., Junior, Mid-level, Senior"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">  LinkedIn Profile/Portfolio URL (Optional but useful)</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="Enter your  LinkedIn Profile/Portfolio URL "
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">Availability</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="e.g., Full-time, Part-time, Freelance"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">Preferred Industry (Optional)</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="This is to target specific sectors"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">Resume Upload (Optional)</label>
                    <input type="file" placeholder='Resume upload' className="text-[#696F8C] rounded-[3px] w-[100%] p-3 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-1 outline-none" />
                </div>
                <div className="flex flex-col mt-4 mb-2">
                    <button className="bg-[#2F66F6] text-white py-2 px-4 rounded-[3px] lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] " > Submit</button>
                </div>

            </div>

        </div>
    );
};

export default JoinAsTalent;