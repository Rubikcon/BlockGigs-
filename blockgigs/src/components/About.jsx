import aboutImage from "../assets/aboutImage.svg";
import diamond from "../assets/diamond.svg";


const About = () => {
    return (
        <main className="bg-[#ECF3FF] w-screen mt-8">
            <div className="bg-[#ECF3FF] lg:w-[80%] md:w-[80%] w-[100%] mx-auto text-center p-8 lg:px-0 md:px-0   "
            >
                <h1 className="text-[#2F66F6] lg:text-[38px] md:text-[28px] text-[20px] font-serif font-[700] my-4">
                    About Blockgigs

                </h1>
                <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
                    <div className="bg-[#ECF3FF] lg:w-[45%] md:w-[45%] w-[100%] p-8">
                        <img src={aboutImage} alt='' className="w-[100%]" />
                    </div>
                    <div className="bg-[#ECF3FF] lg:w-[45%] md:w-[45%] w-[100%]">
                        <h3 className="font-bold mt-2 lg:text-[18px] md:text-[16px] text-[14px] text-[#0A0F29]">
                            At Blockgigs, we’re building a decentralized future, and we want you to be a part of it. Our platform is designed to:
                        </h3>
                        <p className=" text-justify mt-2 md:mt-3 tracking-[.005em] lg:mt-4 lg:text-[18px] md:text-[16px] text-[14px] flex gap-4">
                        <img src={diamond} alt='' />  Connect Blockchain Talents: Whether you’re a developer, designer, or project manager, find the best opportunities in blockchain.
                        </p>
                        <p className="text-justify mt-2 md:mt-3 lg:mt-4 tracking-tight lg:text-[18px] md:text-[18px] text-[14px] flex gap-4">
                         <img src={diamond} alt=''/>  Help Companies Scale: Access a global network of blockchain experts to drive your projects forward.
                        </p>
                        <h3 className="font-bold mt-4 lg:text-[18px] md:text-[16px] text-[14px] text-[#0A0F29]">
                        Join us in shaping the future of work in Web3. Sign up today and get ready for the next big leap in your career or business!
                        </h3>
                    </div>
                </div>

            </div>

        </main>
    );
};

export default About;
