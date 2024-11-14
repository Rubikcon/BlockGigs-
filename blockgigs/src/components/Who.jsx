import card2 from "../assets/card2.svg";
import card4 from "../assets/card4.svg";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: '#0A0F29',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 10,
    boxShadow: 20,
    border: '1px solid #0A0F29',
    backgroundColor: 'white',
    p: 2,
};


const Who = () => {
    const [open, setOpen] = useState(false);
    const [opensubmit, setOpenSubmit] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenSubmit = () => setOpenSubmit(true);
    const handleSubmitClose = () => setOpenSubmit(false);


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
                        <button className="bg-[#2F66F6]  mt-1  text-white mb-1 rounded-lg p-4 mr-2" onClick={handleOpenSubmit}>
                            Join Waitlist
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
                        <button className="bg-[#2F66F6]  mt-1  text-white mb-1 rounded-lg p-4 mr-2" onClick={handleOpen}>
                            Join Waitlist
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

                </div>

            </div>

        </main>
    );
};

export default Who;
