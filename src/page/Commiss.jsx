import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Commiss = () => {

    const [status, setStatus] = useState({
        open: "Close ❌",
        request: 0,
        waitlist: 0,
        onWorking: 0,
        done: 0,
        max: 0,
    });

    useEffect(() => {
        const savedStatus = localStorage.getItem("commissionStatus");
        if (savedStatus) {
            setStatus(JSON.parse(savedStatus));
        }
    }, []);

    return (
        <>
            <div className="flex flex-col justify-between min-h-screen">
                {/* Navbar */}
                <div className="relative z-10">
                    <Navbar />
                </div>

                {/* Content */}
                <div className="mt-20 relative z-0 container mx-auto p-4">
                    {/* Status Commission */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                        <h2 className="text-xl font-bold text-gray-700 dark:text-white">Commission Status</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-4">
                            {[
                                { label: "Open", value: status.open },
                                { label: "Request", value: `${status.request}/${status.max}` },
                                { label: "Waitlist", value: `${status.waitlist}/${status.max}` },
                                { label: "On Working", value: `${status.onWorking}/${status.max}` },
                                { label: "Done", value: `${status.done}/${status.max}` },
                            ].map((item, index) => (
                                <div key={index} className="p-3 border rounded-lg dark:border-gray-600">
                                    <span className="block text-gray-700 dark:text-white font-semibold">{item.label}</span>
                                    <span className="text-gray-500 dark:text-gray-300">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Price List */}
                    <h2 className="text-2xl font-bold text-gray-700 dark:text-white mt-10 text-center">Price List</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {[
                            { name: "Headshot", price: "Rp. 75.000", img: "../img/elf-princess-sophia.png", link: "https://docs.google.com/forms/d/e/1FAIpQLScceQGVfJCLllndxt8Z7vZjq4F-l2P8Q_Or5YqGl5AkWwIKYA/viewform?usp=dialog" },
                            { name: "Full Body", price: "Rp. 150.000", img: "https://cdnb.artstation.com/p/assets/images/images/084/483/609/large/jpwt-full-body.jpg?1738500480", link: "https://docs.google.com/forms/d/e/1FAIpQLSd8aG2Xzm55NdZaBRO-nncPqK7GDtIX7IVwLBfBQnTmEbn8jw/viewform?usp=dialog" },
                        ].map((item, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition transform flex flex-col">
                                <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-md" />
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-2">{item.name}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.price}</p>
                                <a href={item.link} target="_blank" className="mt-2 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                                    Request
                                </a>
                            </div>))}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-10">
                    <Footer />
                </div>
            </div>        </>
    );
};

export default Commiss;
