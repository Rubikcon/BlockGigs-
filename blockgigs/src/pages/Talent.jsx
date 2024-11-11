

const Talent = () => {



    return (
        <main className="bg-white w-screen ">
            <section>
                <h1 className="text-[#0A0F29] lg:text-[24px] md:text-[24px] text-[20px] font-serif font-bold  text-center">
                    Join waitlist as a Talent
                </h1>
                <div
                    className="  bg-white lg:w-[50%] md:w-[50%] w-[80%] mx-96 text-center p-8 lg:px-0 md:px-0 mt-4"

                >
                    <div className="lg:mx-24 md:mx-24 mx-2">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29]  text-left">
                            Name (Full name)
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block lg:w-3/4 md:w-3/4 w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29]  text-left">
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="This is to notify you when the platform is live"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block lg:w-3/4 md:w-3/4 w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29] text-left">
                            Location
                        </label>
                        <input
                            type="text"
                            placeholder="E.g, Nigeria"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block lg:w-3/4 md:w-3/4 w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29] text-left">
                            Skillset/Expertise
                        </label>
                        <input
                            type="text"
                            placeholder="e.g., frontend developer, blockchain developer, etc"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block lg:w-3/4 md:w-3/4 w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29]  text-left">
                            Experience Level
                        </label>
                        <input
                            type="text"
                            placeholder="e.g., Junior, Mid-level, Senior"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block lg:w-3/4 md:w-3/4 w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29]   text-left">
                            LinkedIn Profile/Portfolio URL (Optional but useful)
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your  LinkedIn Profile/Portfolio URL "
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block lg:w-3/4 md:w-3/4 w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29] text-left">
                            Availability
                        </label>

                        <input
                            type="text"
                            placeholder="e.g., Full-time, Part-time, Freelance"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block lg:w-3/4 md:w-3/4 w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29] text-left">
                            Preferred Industry (Optional)
                        </label>

                        <input
                            type="text"
                            placeholder="This is to target specific sectors"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block lg:w-3/4 md:w-3/4 w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                    </div>
                    <div className="lg:mx-24 md:mx-24 mx-auto">
                        <label className="block mt-4 mb-2 text-[14px] font-bold text-[#0A0F29] text-left">
                            Resume Upload (Optional)
                        </label>

                        <input
                            id="file_input"
                            type="file"
                            className="bg-white border border-[#0A0F29] text-[#696F8C]  text-[13px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block lg:w-3/4 md:w-3/4 w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"

                        />
                        <button
                            className="bg-[#2F66F6]  text-white md:text-[20px] lg:text-[20px] text-[15px] font-bold rounded-lg focus:ring-[#0A0F29] focus:border-white block lg:w-3/4 md:w-3/4 w-3/4 p-4 backdrop-blur-lg mb-4 outline-none"
                        >
                            Submit
                        </button>
                    </div>

                </div>

            </section >
        </main >
    );
};

export default Talent;
