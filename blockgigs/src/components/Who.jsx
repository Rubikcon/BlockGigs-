import card2 from "../assets/card2.svg";
import card4 from "../assets/card4.svg";


const Who = () => {
    return (
        <main className="bg-[#ECF3FF] w-screen mt-8">
            <div className="bg-[#ECF3FF] lg:w-[80%] md:w-[80%] w-[100%] mx-auto text-center p-8 lg:px-0 md:px-0   "
            >
                <h1 className="text-[#2F66F6] lg:text-[38px] md:text-[38px] text-[30px] font-serif font-[700] my-4">
                    Who Should Join?

                </h1>
                <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
                    <div className="bg-white lg:w-[45%] md:w-[45%] w-[100%] p-8 border rounded-lg shadow-lg">
                        <div className="grid place-content-center">
                            <img src={card2} alt='' />
                        </div>
                        <h3 className="font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]  text-[#0A0F29]">
                            Talents
                        </h3>
                        <p className=" text-center font-normal mt-4 lg:text-[18px] md:text-[18px] text-[16px] flex gap-4">
                            If you’re a developer, designer, or have expertise in the blockchain space, Blockgigs is the place to find your next opportunity.
                        </p>
                    </div>
                    <div className="bg-white lg:w-[45%] md:w-[45%] w-[100%] p-8 border rounded-lg shadow-lg">
                        <div className="grid place-content-center">
                            <img src={card4} alt='' />
                        </div>
                        <h3 className="font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]  text-[#0A0F29]">
                            Companies
                        </h3>
                        <p className=" text-center font-normal mt-4 lg:text-[18px] md:text-[18px] text-[16px] flex gap-4">
                            If you’re looking to hire the best blockchain experts, Blockgigs offers a curated talent pool to meet your needs.
                        </p>
                    </div>

                </div>

            </div>

        </main>
    );
};

export default Who;
