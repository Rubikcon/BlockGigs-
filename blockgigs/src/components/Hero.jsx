import heroBackground from "../assets/heroBackground.svg";
import { Link } from 'react-router-dom'



const Hero = () => {





    return (
        <main className="bg-gradient-to-r from-[#2F66F6] to-[#0A0F29] w-screen">

            <div className="bg-gradient-to-r from-[#2F66F6] to-[#0A0F29] lg:w-[100%] md:w-[100%] w-[100%] mx-auto text-center p-8 lg:px-0 md:px-0  bg-cover "
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundSize: "100%",
                }}>
                <h1 className="text-white lg:text-[48px] md:text-[48px] text-[30px] font-serif font-[700] my-4">
                    Bringing Great
                    <br />Work to You
                </h1>
                <p className="text-white lg:text-[20px] md:text-[20px] text-[16px] text-center font-serif ">
                    Find top African tech talents, hire anonymously, and pay securely in crypto.
                </p>
                <div className="mt-6 flex lg:flex-row md:flex-row flex-col items-center w-[100%] mx-6 lg:px-96 md:px-96 lg:mx-8 ">
                    <div className='lg:w-[40%] md:w-[40%] w-[100%] '>  <Link to='/join-as-a-client'><button className="bg-[#2F66F6]  mt-1  text-white mb-1 rounded-lg p-4 mr-2">
                        Join Waitlist as a client
                    </button>
                    </Link>
                    </div>
                    <div className="lg:w-[40%] md:w-[40%] w-[100%] ">
                        <Link to='/join-as-a-talent'>
                            <button className="bg-[#D7D9E4]  mt-1  text-[#0A0F29] mb-1 rounded-lg p-4 ">
                                Join Waitlist as a talent
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </main >
    );
};

export default Hero;
