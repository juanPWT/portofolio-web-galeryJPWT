const DataSosmed = () => {
    return (
        <>
            <div className="container p-8 mx-auto font-inter ">
                <h1 className="h-16 text-xl font-bold text-slate-500 dark:text-slate-100">
                    My Social Media
                </h1>
                <div className="grid gap-4 sm:grid-cols-2">
                    <a
                        href="https://www.instagram.com/talesofparadys"
                        target="_blank"
                        className="p-4 border rounded-lg bg-red-600 shadow hover:bg-red-100 dark:hover:bg-red-800 transition text-center text-lg text-white dark:text-slate-300"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://x.com/jpwtpkl"
                        target="_blank"
                        className="p-4 border rounded-lg bg-black shadow hover:bg-slate-100 dark:hover:bg-slate-800 transition text-center text-lg text-white dark:text-slate-300"
                    >
                        X (Twitter)
                    </a>
                    <a
                        href="https://wa.link/4zcnuo"
                        target="_blank"
                        className="p-4 border rounded-lg bg-green-600 shadow hover:bg-green-100 dark:hover:bg-green-800 transition text-center text-lg text-white dark:text-slate-300"
                    >
                        Whatsapp
                    </a>
                </div>
            </div>
        </>
    );
};

export default DataSosmed;
