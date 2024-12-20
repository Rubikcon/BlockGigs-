import card from '../assets/card.svg';
import card1 from '../assets/card1.svg';
import card2 from '../assets/card2.svg';
import card3 from '../assets/card3.svg';


const Be = () => {
    return (
        <main className="bg-[#ECF3FF] w-screen mt-8">
            <div className="bg-[#ECF3FF] lg:w-[80%] md:w-[80%] w-[100%] mx-auto text-center p-8 lg:px-0 md:px-0  border-[#ECF3FF] border-2 shadow-lg rounded-lg "
            >
                <h1 className="text-[#2F66F6] lg:text-[38px] md:text-[38px] sm:text-[24px] text-[16px] font-serif font-[700] my-4">
                    Be the first to get hear about job offers by joining our Waitlist?
                </h1>
                <p className="text-[#0A0F29] lg:text-[20px] md:text-[20px] text-[16px] text-center font-serif ">
                    Be among the first to access our platform and enjoy exclusive benefits, such as
                </p>
                <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center my-4 flex-wrap px-8'>
                    <div className="bg-white lg:w-[20%] md:w-[20%] w-[100%] p-4  border-white rounded-xl border shadow-lg mb-4">
                        <div className='grid place-content-center'><img
                            src={card}
                            alt=""
                            className=" object-center rounded-lg"
                        /></div>
                        <h3 className="font-bold mt-4 lg:text-[13px] md:text-[13px] text-[10px]  text-[#0A0F29]">
                            Early Access to job offers
                        </h3>
                        <p className=" text-[#0A0F29] lg:text-[12px] md:text-[12px] text-[10px] text-center">
                            Be one of the first to explore job opportunities or find talent when we launch.
                        </p>
                    </div>
                    <div className="bg-white lg:w-[20%] md:w-[20%] w-[100%] p-4  border-white rounded-xl border shadow-lg mb-4">
                        <div className='grid place-content-center'>
                            <img
                                src={card1}
                                alt=""
                                className=" object-center rounded-lg"
                            />
                        </div>
                        <h3 className="font-bold mt-4 lg:text-[13px] md:text-[13px] text-[10px]  text-[#0A0F29]">
                            Priority Matching
                        </h3>
                        <p className=" text-[#0A0F29] lg:text-[12px] md:text-[12px] text-[10px] text-center">
                            Get matched with top jobs or the best talent ahead of others.

                        </p>
                    </div>
                    <div className="bg-white lg:w-[20%] md:w-[20%] w-[100%] p-2  border-white rounded-xl border shadow-lg mb-4">
                        <div className='grid place-content-center'><img
                            src={card2}
                            alt=""
                            className=" object-center rounded-lg"
                        />
                        </div>
                        <h3 className="font-bold mt-4 lg:text-[13px] md:text-[13px] text-[10px]   text-[#0A0F29]">
                            Talent Visibility
                        </h3>
                        <p className=" text-[#0A0F29] lg:text-[12px] md:text-[12px] text-[10px] text-center">
                            Be the first profile to be shown to client on every job category available only to waitlist members.
                        </p>
                    </div>
                    <div className="bg-white lg:w-[20%] md:w-[20%] w-[100%] p-2  border-white rounded-xl border shadow-lg mb-4">
                        <div className='grid place-content-center'><img
                            src={card3}
                            alt=""
                            className=" object-center rounded-lg"
                        />
                        </div>
                        <h3 className="font-bold mt-4 lg:text-[13px] md:text-[13px] text-[10px]   text-[#0A0F29]">
                            Premium Access Offers
                        </h3>
                        <p className=" text-[#0A0F29] lg:text-[12px] md:text-[12px] text-[10px] text-center">
                            Join the first 500 and get 3 months of free job alerts with direct talent search and priority placement!
                        </p>
                    </div>

                </div>


            </div>

        </main>
    );
};

export default Be;
