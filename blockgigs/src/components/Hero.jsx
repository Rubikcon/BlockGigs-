import heroBackground from "../assets/heroBackground.svg";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: '#0A0F29',
    transform: 'translate(-50%, -50%)',
    width: 350,
    borderRadius: 10,
    boxShadow: 20,
    border: '1px solid #0A0F29',
    backgroundColor: 'white',
    p: 2,
};


const Hero = () => {
    const [open, setOpen] = useState(false);
    const [opensubmit, setOpenSubmit] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenSubmit = () => setOpenSubmit(true);
    const handleSubmitClose = () => setOpenSubmit(false);


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
                <div className="mt-6 flex lg:flex-row md:flex-row flex-col items-center w-[100%] mx-6 lg:px-96 md:px-96 ">
                    <div className='lg:w-[40%] md:w-[40%] w-[100%] '> <button className="bg-[#2F66F6]  mt-1  text-white mb-1 rounded-lg p-4 mr-2" onClick={handleOpen}>
                        Join Waitlist as a client
                    </button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <input type="text" placeholder='Enter your company name' className="text-[#696F8C] rounded-lg w-[100%] p-4 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <input type="text" placeholder='Email' className="text-[#696F8C] rounded-lg w-[100%] p-4 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <input type="text" placeholder='Location E.g, Nigeria' className="text-[#696F8C] rounded-lg w-[100%] p-4 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <input type="text" placeholder='Type of talent needed e.g., frontend developer, blockchain developer, etc' className="text-[#696F8C] rounded-lg w-[100%] p-4 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <input type="text" placeholder='How many positions are you hiring for?' className="text-[#696F8C] rounded-lg w-[100%] p-4 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <input type="text" placeholder='Job type e.g e.g., Full-time, Part-time, Freelance' className="text-[#696F8C] rounded-lg w-[100%] p-4 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <input type="text" placeholder='"Add your company’s URL' className="text-[#696F8C] rounded-lg w-[100%] p-4 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <input type="text" placeholder='Payment Options e.g USDT, Stellar, fiat currency' className="text-[#696F8C] rounded-lg w-[100%] p-4 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <button className="bg-[#2F66F6] text-white py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] my-2" > Submit</button>
                            </Box>
                        </Modal>
                    </div>
                    <div className="lg:w-[40%] md:w-[40%] w-[100%] ">
                        <button className="bg-[#D7D9E4]  mt-1  text-[#0A0F29] mb-1 rounded-lg p-4 " onClick={handleOpenSubmit}>
                            Join Waitlist as a talent
                        </button>
                        <Modal
                            open={opensubmit}
                            onClose={handleSubmitClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <input type="text" placeholder='Enter your full name' className="text-[#696F8C] rounded-lg w-[100%] p-3 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <input type="text" placeholder='Email' className="text-[#696F8C] rounded-lg w-[100%] p-3 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <input type="text" placeholder='Location E.g, Nigeria' className="text-[#696F8C] rounded-lg w-[100%] p-3 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <input type="text" placeholder=' Skillset/Expertise e.g., frontend developer, blockchain developer, etc' className="text-[#696F8C] rounded-lg w-[100%] p-4 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <input type="text" placeholder='Experience Level e.g., Junior, Mid-level, Senior' className="text-[#696F8C] rounded-lg w-[100%] p-3 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <input type="text" placeholder='Availability e.g e.g., Full-time, Part-time, Freelance' className="text-[#696F8C] rounded-lg w-[100%] p-3 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <input type="text" placeholder='Preferred Industry (Optional)' className="text-[#696F8C] rounded-lg w-[100%] p-3 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <input type="text" placeholder='Enter your  LinkedIn Profile/Portfolio URL' className="text-[#696F8C] rounded-lg w-[100%] p-3 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-2 outline-none" />
                                <label className="block  mb-2 text-[14px]  text-[#0A0F29] text-left">
                                    Resume Upload (Optional)
                                </label>
                                <input type="file" placeholder='Resume upload' className="text-[#696F8C] rounded-lg w-[100%] p-3 bg-transparent border border-[#0A0F29] backdrop-blur-lg mb-1 outline-none" />
                                <button className="bg-[#2F66F6] text-white py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] " > Submit</button>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Hero;
