import heroBackground from "../assets/heroBackground.svg";
import { Link } from 'react-router-dom'
import { useState } from "react";



const Hero = () => {
    const [open, setOpen] = useState(false)
    return (
        <main className="bg-gradient-to-r from-[#2F66F6] to-[#0A0F29] w-screen">
            <div className="bg-[url('../assets/heroBackground.svg')'] lg:w-[100%] md:w-[100%] flex item-center justify-center w-[100%] mx-auto text-center p-8 lg:px-0 md:px-0 bg-cover"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundSize: "100%",
                }}
                >
        <div className="text-center">
            <h1 className="text-white lg:text-[48px] md:text-[38px] text-[20px] font-serif font-[700] my-4">
                Bringing Great
                <br />Work to You
            </h1>
            <p className="text-white lg:text-[20px] md:text-[18px] text-[14px] text-center font-serif ">
                Find top African tech talents, hire anonymously, and pay securely in crypto.
            </p>
                
                {!open ?
                <div className='flex flex-col items-center'> 
                <button className="bg-[#2F66F6] mt-2 text-white mb-1 rounded-lg p-4 w-full lg:w-[50%] md:w-[50%] item-center text-center" onClick={()=>setOpen(true)}>
                    Join Waitlist
                </button>
                </div>
                :
                (
                <div className=" flex flex-col space-y-3 mt-2 items-center rounded-lg justify-center">
                <div className="w-full">
                <Link to='/join-as-a-client'>
                <button className="bg-[#2F66F6] text-white p-4 text-center">
                    As a client
                </button>
                </Link>
                </div>
                <div className="w-full">
                <Link to='/join-as-a-talent'>
                <button className="bg-[#2F66F6] text-white p-4 text-center">
                    As a talent
                </button>
                </Link>
                </div>
                </div>
                )
               }
                
        </div>  
            </div>
        </main >
    );
};

export default Hero;
