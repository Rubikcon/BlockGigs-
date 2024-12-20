import { useState } from "react";
import axios from "axios";

// https://script.google.com/macros/s/AKfycbxPcwGRTXTQ6bKOT4C0Kl9AaApsnw8iS2SHo2NYXNtApjqZhhgD4iE3Wve_JUQY-pgV/exec
// headers: {"Content-type": "application/x-www-form-urlencoded"},
// AKfycbz05Nb76f6sHB7Ae_VHdB-dXFHlDrsv-t1CryQ_xGJBwXnAgN82E1QF_Zfl-ydTwiYP       {deployment id}
const JoinAsClient = () => {
    const [client, setClient] = useState({
        name: "",
        email: "",
        location: "",
        talent: "",
        positions: 0,
        type: "",
        webaddress: "",
        payment: "",
        comment: ""
    })
    const onChangeHandler = (e) => {
        e.preventDefault()
        console.log(e.target, "sheey");
        const {name, value} = e.target
        setClient(prev => ({
            ...prev,
            [name]: value
        }))
    }
   const onFormSubmit = (e) => {
     e.preventDefault()
     console.log(client, "client");
     const url = "https://script.google.com/macros/s/AKfycbxPcwGRTXTQ6bKOT4C0Kl9AaApsnw8iS2SHo2NYXNtApjqZhhgD4iE3Wve_JUQY-pgV/exec"
    //  fetch(url, {
    //     method: "POST",
    //     headers: {"Content-type": "application/x-www-form-urlencoded"},
    //     body: client
    //  }).then(res=>res.text()).then(data=>console.log("data sent successfully"))
    axios.post(url, client).then(res=>console.log("succeffuly"))
   }
    return (
        <div className="flex flex-col justify-center items-center min-h-[65vh] pt-10">
            <form onSubmit={onFormSubmit} className="max-w-[450px] w-full mx-5">
                <h1 className="text-[#06142c] text-[20px] text-center font-bold mb-6">
                    Join waitlist as a Client
                </h1>
                <div className="flex flex-col">
                    <label className="text-[#11121a] text-sm mb-2">Company Name</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="Enter your company name"
                        name="name"
                        value={client.name}
                        type="text"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">Email Address:</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="This is to notify you when the platform is live"
                        name="email"
                        value={client.email}
                        type="email"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">Location:</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="Location E.g, Nigeria"
                        name="location"
                        value={client.location}
                        type="text"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">Type of Talent Needed</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="e.g., frontend developer, blockchain developer, etc"
                        name="talent"
                        value={client.talent}
                        type="text"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">Number of Positions</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="How many positions are you hiring for?"
                        name="postions"
                        value={client.positions}
                        type="number"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">Job Type</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="e.g., Full-time, Part-time, Freelance"
                        name="type"
                        value={client.type}
                        type="text"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">Company’s Website URL (optional)</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="Add your company’s URL"
                        name="webaddress"
                        value={client.webaddress}
                        type="text"

                        onChange={onChangeHandler}
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">Payment option</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="e.g USDT, Stellar, fiat currency"
                        name="payment"
                        value={client.payment}
                        type="text"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="text-[#11121a] text-sm mb-2">Additional Comments/Requirements</label>
                    <input
                        className="rounded-[5px] shadow bg-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2"
                        placeholder="Any other thing you would like to add"
                        name="comment"
                        value={client.comment}
                        type="text"

                        onChange={onChangeHandler}
                    />
                </div>
                <div className="flex flex-col mt-4">
                    <button className="bg-[#2F66F6] text-white py-2 px-4 rounded-[3px] lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] " > Submit</button>
                </div>

            </form>

        </div>
    );
};

export default JoinAsClient;