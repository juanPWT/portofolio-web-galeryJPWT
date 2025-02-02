import { useState, useEffect } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Admin = () => {
    const [status, setStatus] = useState({
        open: "Close ❌",
        request: 0,
        waitlist: 0,
        onWorking: 0,
        done: 0,
        max: 0,
    });

    // Load data dari localStorage saat komponen dimuat
    useEffect(() => {
        const savedStatus = localStorage.getItem("commissionStatus");
        if (savedStatus) {
            setStatus(JSON.parse(savedStatus));
        }
    }, []);

    // Simpan ke localStorage
    const saveStatus = () => {
        localStorage.setItem("commissionStatus", JSON.stringify(status));
        alert("Status berhasil disimpan!");
    };

    // Reset status ke default
    const resetStatus = () => {
        localStorage.removeItem("commissionStatus");
        setStatus({
            open: "Open",
            request: 0,
            waitlist: 0,
            onWorking: 0,
            done: 0,
            max: 0
        });
        alert("Status berhasil direset!");
    };

    return (
        <div className="flex flex-col justify-between min-h-screen">
            {/* Navbar */}
            <div className="relative z-10">
                <Navbar />
            </div>

            {/* Content */}
            <div className="mt-20 relative z-0 container mx-auto p-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Manage Commission Status</h1>

                {/* Form */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Status Commision
                    </label>
                    <input
                        type="text"
                        value={status.open}
                        onChange={(e) => setStatus({ ...status, open: e.target.value })}
                        className="w-full p-2 mt-1 border rounded-lg dark:bg-gray-700 dark:text-white"
                    />

                    <label className="block mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Request
                    </label>
                    <input
                        type="number"
                        value={status.request}
                        onChange={(e) => setStatus({ ...status, request: e.target.value })}
                        className="p-2 mt-1 border rounded-lg dark:bg-gray-700 dark:text-white"
                    />

                    <label className="block mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Waitlist
                    </label>
                    <input
                        type="number"
                        value={status.waitlist}
                        onChange={(e) => setStatus({ ...status, waitlist: e.target.value })}
                        className="p-2 mt-1 border rounded-lg dark:bg-gray-700 dark:text-white"
                    />

                    <label className="block mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                        On Working
                    </label>
                    <input
                        type="number"
                        value={status.onWorking}
                        onChange={(e) => setStatus({ ...status, onWorking: e.target.value })}
                        className="p-2 mt-1 border rounded-lg dark:bg-gray-700 dark:text-white"
                    />

                    <label className="block mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Done
                    </label>
                    <input
                        type="number"
                        value={status.done}
                        onChange={(e) => setStatus({ ...status, done: e.target.value })}
                        className="p-2 mt-1 border rounded-lg dark:bg-gray-700 dark:text-white"
                    />
                    <label className="block mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Max
                    </label>
                    <input
                        type="number"
                        value={status.max}
                        onChange={(e) => setStatus({ ...status, max: e.target.value })}
                        className="p-2 mt-1 border rounded-lg dark:bg-gray-700 dark:text-white"
                    />
                    {/* Buttons */}
                    <div className="mt-6 flex gap-4">
                        <button
                            onClick={saveStatus}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Simpan
                        </button>
                        <button
                            onClick={resetStatus}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-10">
                <Footer />
            </div>
        </div>
    );
};

export default Admin;

